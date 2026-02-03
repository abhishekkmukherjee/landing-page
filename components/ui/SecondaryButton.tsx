import Link from "next/link";

export default function SecondaryButton({
  href,
  label
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-strong bg-surface px-6 py-3 text-sm font-semibold text-primary transition duration-300 hover:border-strong hover:bg-surface-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora"
    >
      {label}
    </Link>
  );
}
