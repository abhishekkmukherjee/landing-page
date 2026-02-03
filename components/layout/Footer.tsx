import Image from "next/image";

export default function Footer() {
  return (
    <footer className="section border-t border-subtle pb-10 pt-16 text-sm text-steel overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 text-sm text-steel md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/images/leaders/logo_svg_white.svg" alt="ScaleX logo" width={52} height={52} />
            </div>
            <p className="text-base text-haze">Scaling Customer Acquisition For Coaches, Consultants &amp; Ed Tech Brands.</p>
            <div className="space-y-1">
              <p>Bangalore, India</p>
              <p>hi@scalex.club</p>
            </div>
            <div className="space-y-1">
              <p className="text-haze">Hiring: hr@scalex.club</p>
              <p>Please email on hr@scalex.club for any HR / hiring related queries.</p>
            </div>
            <div className="space-y-3">
              <p>Social Media</p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-surface text-haze transition hover:translate-y-[-1px]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                    <path d="M16.5 3.5h-9A4 4 0 0 0 3.5 7.5v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Zm2.5 13a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.5v-9A2.5 2.5 0 0 1 7.5 5h9A2.5 2.5 0 0 1 19 7.5v9Z" />
                    <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6.4A2.4 2.4 0 1 1 14.4 12 2.4 2.4 0 0 1 12 14.4Z" />
                    <circle cx="17.2" cy="6.8" r="1.2" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-surface text-haze transition hover:translate-y-[-1px]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                    <path d="M6.94 8.5H4.2V19h2.74V8.5Zm-1.37-1.3A1.58 1.58 0 1 0 4 5.6a1.58 1.58 0 0 0 1.57 1.6ZM19.8 12.6c0-2.7-1.44-3.95-3.36-3.95a2.9 2.9 0 0 0-2.64 1.45h-.04V8.5h-2.6V19h2.71v-5.2c0-1.36.26-2.68 1.94-2.68s1.69 1.56 1.69 2.77V19h2.7Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-3 md:text-right">
            <p className="text-haze">Quick Links</p>
            <p>Privacy Policy</p>
            <p>Terms and conditions</p>
            <p>Refund Policy</p>
            <p>Pricing Policy</p>
          </div>
        </div>
        <div className="mt-10 text-xs text-steel">
          © 202 ScaleX Media Private Limited. All rights reserved.
        </div>
      </div>
      <div className="mt-12 w-full text-center">
        <h2 className="headline w-full select-none text-[clamp(4.5rem,16vw,14rem)] font-semibold uppercase tracking-tight leading-[0.85]">
          <span className="block translate-y-6 bg-gradient-to-b from-white/70 via-white/35 to-white/5 bg-clip-text text-transparent">
            ScaleX
          </span>
        </h2>
      </div>
    </footer>
  );
}
