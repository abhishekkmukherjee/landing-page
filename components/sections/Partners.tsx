import Image from "next/image";

const partners = [
  {
    name: "Meta Business Partner",
    src: "/images/leaders/meta-business-partner-logo.webp"
  },
  {
    name: "Google Partner",
    src: "/images/leaders/google-partner-logo-png_seeklogo-428155.webp"
  },
  {
    name: "Zoom Partner Programs",
    src: "/images/leaders/zoom%20partner.webp"
  }
];

export default function Partners() {
  return (
    <section className="section pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-subtle bg-void/70 px-6 py-10 md:px-10">
          <div className="text-center">
            <h2 className="headline text-2xl text-primary sm:text-3xl lg:text-4xl">Official Partners With</h2>
            <span className="mx-auto mt-3 block h-1 w-48 rounded-full bg-indigo-500/90 motion-safe:animate-pulseSoft" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center rounded-2xl bg-white/95 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)] ring-1 ring-white/10 motion-safe:animate-rise"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={240}
                  height={120}
                  className="h-16 w-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
