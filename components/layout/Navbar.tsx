import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  return (
    <header className="section sticky top-0 z-30 border-b border-subtle bg-night/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-wide text-primary">
          <Image src="/images/leaders/logo_svg_white.svg" alt="ScaleX logo" width={56} height={56} />
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-steel md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-haze">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="#contact"
            className="rounded-full border border-strong bg-surface px-4 py-2 text-sm font-semibold text-primary transition hover:border-strong hover:bg-surface-strong"
          >
            Book a call
          </Link>
        </div>
      </div>
    </header>
  );
}
