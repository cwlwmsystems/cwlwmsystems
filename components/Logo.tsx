import Image from "next/image";
import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className={compact ? "brand brand-compact" : "brand"} href="/" aria-label="Cwlwm Systems home">
      <Image src="/cwlwm-systems-logo.png" alt="Cwlwm Systems" width={1917} height={505} priority />
    </Link>
  );
}
