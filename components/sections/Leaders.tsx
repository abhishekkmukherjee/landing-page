import Image from "next/image";

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
          <h2 className="headline text-3xl text-primary sm:text-4xl lg:text-5xl">
            Empowering leaders across niches
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="relative overflow-hidden rounded-[28px] border border-subtle bg-surface p-6 shadow-glow transition duration-500 hover:-translate-y-1"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-aurora/20 blur-2xl" />
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
                  <span className="rounded-full bg-indigo-600/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
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
