#!/usr/bin/env python3
import re, urllib.request, time, json, sys
from pathlib import Path

ts = Path(__file__).resolve().parents[1] / "src/data/pinnacle-releases.ts".read_text()
urls = re.findall("url: \"(https://disneypinnacle.com/releases/[^\"]+)\"", ts)
print("releases=%d" % len(urls), flush=True)

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; DPCMintIndex/0.1)"})
    with urllib.request.urlopen(req, timeout=45) as resp:
        return resp.read().decode("utf-8", "replace")

def parse_editions(html):
    """Parse atlas.v1.Edition blobs for id + numMinted / maxMintSize / effectiveSupply."""
    out = {}
    bs = chr(92)
    q = chr(34)
    esc_q = bs + q

    def nfield(name):
        return re.compile(
            re.escape(name + esc_q + ":" + esc_q + "$n")
            + r"(\d+)"
            + re.escape(esc_q)
        )

    id_pat = re.compile(
        re.escape("atlas.v1.Edition" + esc_q + "," + esc_q + "id" + esc_q + ":" + esc_q + "$n")
        + r"(\d+)"
        + re.escape(esc_q)
    )
    num_minted_pat = nfield("numMinted")
    max_mint_pat = nfield("maxMintSize")
    eff_pat = nfield("effectiveSupply")
    name_pat = re.compile(
        re.escape(esc_q + "name" + esc_q + ":" + esc_q)
        + r"([^" + re.escape(bs + q) + r"]+)"
        + re.escape(esc_q)
    )
    parallel_pat = re.compile(
        re.escape(esc_q + "parallel" + esc_q + ":" + esc_q)
        + r"([^" + re.escape(bs + q) + r"]+)"
        + re.escape(esc_q)
    )
    etype_pat = re.compile(
        re.escape(esc_q + "editionType" + esc_q + ":" + esc_q)
        + r"([^" + re.escape(bs + q) + r"]+)"
        + re.escape(esc_q)
    )
    next_ed = re.compile(re.escape("atlas.v1.Edition" + esc_q))

    for m in id_pat.finditer(html):
        eid = m.group(1)
        chunk = html[m.start() : m.start() + 5000]
        nxt = next_ed.search(chunk[60:])
        if nxt:
            chunk = chunk[: 60 + nxt.start()]
        nm = num_minted_pat.search(chunk)
        mm = max_mint_pat.search(chunk)
        eff = eff_pat.search(chunk)
        # Prefer numMinted (ever minted); fall back to maxMintSize / effectiveSupply
        if nm:
            minted = int(nm.group(1))
        elif mm:
            minted = int(mm.group(1))
        elif eff:
            minted = int(eff.group(1))
        else:
            continue
        names = name_pat.findall(chunk)
        parallel_m = parallel_pat.search(chunk)
        etype_m = etype_pat.search(chunk)
        out[eid] = {
            "editionId": int(eid),
            "numMinted": minted,
            "maxMintSize": int(mm.group(1)) if mm else None,
            "effectiveSupply": int(eff.group(1)) if eff else None,
            "name": names[-1] if names else None,
            "parallel": parallel_m.group(1) if parallel_m else None,
            "editionType": etype_m.group(1) if etype_m else None,
        }
    return out

sample = fetch(urls[0])
sample_eds = parse_editions(sample)
print(
    "sample_editions=%d sample_sum=%d"
    % (len(sample_eds), sum(e["numMinted"] for e in sample_eds.values())),
    flush=True,
)
for v in list(sample_eds.values())[:6]:
    print(v, flush=True)
if not sample_eds:
    sys.exit(2)

all_eds = {}
errors = []
for i, u in enumerate(urls):
    try:
        eds = parse_editions(fetch(u))
        all_eds.update(eds)
        if i % 10 == 0 or i + 1 == len(urls):
            print("%d/%d unique=%d" % (i + 1, len(urls), len(all_eds)), flush=True)
        time.sleep(0.2)
    except Exception as e:
        errors.append({"url": u, "error": str(e)})
        print("ERR %d %s" % (i, e), flush=True)
        time.sleep(1)

total = sum(e["numMinted"] for e in all_eds.values())
eff_total = sum((e["effectiveSupply"] or 0) for e in all_eds.values())
out = {
    "editionCount": len(all_eds),
    "estimatedTotalMinted": total,
    "estimatedTotalEffectiveSupply": eff_total,
    "errors": errors,
    "editions": sorted(all_eds.values(), key=lambda e: e["editionId"]),
}
path = Path(__file__).resolve().parents[1] / "scripts/data/seed-editions.json"
path.write_text(json.dumps(out, indent=2))
print(
    "DONE unique=%d minted=%d effective=%d errors=%d -> %s"
    % (len(all_eds), total, eff_total, len(errors), path),
    flush=True,
)
