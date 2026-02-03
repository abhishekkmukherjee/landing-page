import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        night: "rgb(var(--color-night) / <alpha-value>)",
        steel: "rgb(var(--color-muted) / <alpha-value>)",
        haze: "rgb(var(--color-text) / <alpha-value>)",
        aurora: "#4ef0c6",
        ember: "#ff7a59",
        void: "rgb(var(--color-void) / <alpha-value>)"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.45)",
        soft: "0 10px 40px rgba(0,0,0,0.35)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        rise: {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        },
        draw: {
          "0%": { strokeDashoffset: "600", opacity: "0" },
          "100%": { strokeDashoffset: "0", opacity: "1" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
        rise: "rise 0.9s ease forwards",
        pulseSoft: "pulseSoft 3s ease-in-out infinite",
        draw: "draw 1.6s ease forwards",
        shimmer: "shimmer 10s ease infinite"
      }
    }
  },
  plugins: []
};

export default config;
