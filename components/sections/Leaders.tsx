import Image from "next/image";

const trustedLogos = [
  { name: "Skill Nation", src: "/images/leaders/skill%20nation.webp" },
  { name: "Masters Union", src: "/images/leaders/masters%20union.webp" },
  { name: "Growth School", src: "/images/leaders/growth%20school.svg" },
  { name: "Skill House", src: "/images/leaders/skill%20house.webp" },
  { name: "Clapingo", src: "/images/leaders/clapingo.webp" }
];

const leaders = [
  {
    name: "Rajiv Talreja",
    role: "Asia’s Leading Business Coach",
    niche: "Business",
    image: "/images/leaders/rajiv%20talreja.png"
  },
  {
    name: "Jatan Shah",
    role: "Founder - SkillNation",
    niche: "Skill Development",
    image: "/images/leaders/jatin%20shah.png"
  },
  {
    name: "Vishal Malkan",
    role: "Founder - Malkansview",
    niche: "Stock Market",
    image: "/images/leaders/vishal%20malkan.png"
  },
  {
    name: "Siddharth Rajsekar",
    role: "Founder - Internet Lifestyle Hub",
    niche: "Coaching",
    image: "/images/leaders/sidharth%20.png"
  }
];

export default function Leaders() {
  return (
    <section className="section py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-subtle bg-surface px-6 py-8 text-center shadow-glow">
              <p className="text-xs uppercase tracking-[0.35em] text-steel">Trusted by leaders worldwide</p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
                {trustedLogos.map((logo) => (
                  <Image
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    width={170}
                    height={56}
                    className="h-9 w-auto opacity-80"
                    unoptimized
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="relative overflow-hidden rounded-[28px] border border-subtle bg-surface p-6 shadow-glow transition duration-500 hover:-translate-y-1"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-aurora/25 blur-2xl motion-safe:animate-drift" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-4 flex h-44 w-full items-center justify-center">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={220}
                      height={220}
                      className="h-40 w-auto object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="rounded-full border border-aurora/30 bg-aurora/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-aurora">
                    {leader.niche}
                  </span>
                  <p className="mt-4 text-lg font-semibold text-primary">{leader.name}</p>
                  <p className="text-sm text-steel">{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
