import Image from "next/image";

const logos = [{ src: "/images/leaders/logo_svg_white.svg", alt: "Scalex logo" }];

export default function TrustBar() {
  return (
    <section className="section pb-16">
      <div className="mx-auto max-w-6xl rounded-3xl border border-subtle bg-surface px-6 py-8 motion-safe:animate-rise">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-steel">Trusted by leaders worldwide</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          {logos.map((logo) => (
            <Image key={logo.src} src={logo.src} alt={logo.alt} width={140} height={44} className="h-8 w-auto" />
          ))}
        </div>
      </div>
    </section>
  );
}
