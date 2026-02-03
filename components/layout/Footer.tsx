import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process", href: "#process" },
  { label: "Privacy", href: "#" }
];

export default function Footer() {
  return (
    <footer className="section border-t border-subtle py-12 text-sm text-steel">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-primary">ScaleX Growth Systems</p>
          <p className="mt-2 max-w-md text-steel">
            Performance marketing for coaches, creators, and ed-tech brands who care about qualified leads and clean ROI.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {links.map((item) => (
            <Link key={item.href + item.label} href={item.href} className="transition hover:text-haze">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
