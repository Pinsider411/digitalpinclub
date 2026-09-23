import { ReactNode } from "react";

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-[1160px] px-4 py-10 sm:px-6 sm:py-14 ${className}`}
    >
      {children}
    </section>
  );
}
