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
      className="inline-flex items-center justify-center rounded-xl bg-aurora px-6 py-3 text-sm font-semibold text-white shadow-soft transition duration-300 hover:translate-y-[-1px] hover:bg-aurora/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aurora"
    >
      {label}
    </Link>
  );
}
