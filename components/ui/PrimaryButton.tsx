import Link from "next/link";

export default function PrimaryButton({
  href,
  label
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-ink shadow-soft transition duration-300 hover:translate-y-[-1px] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora"
    >
      {label}
    </Link>
  );
}
