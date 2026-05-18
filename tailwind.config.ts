import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
        "2xl": "3rem"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        surface: {
          1: "hsl(var(--surface-1))",
          2: "hsl(var(--surface-2))",
          3: "hsl(var(--surface-3))"
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))"
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
        "3xl": "2rem"
      },
      boxShadow: {
        soft: "0 24px 80px -32px rgba(15, 23, 42, 0.18)",
        glow: "0 18px 40px -24px rgba(14, 165, 233, 0.45)"
      },
      fontFamily: {
        sans: ["Avenir Next", "Segoe UI", "Helvetica Neue", "Arial", "sans-serif"],
        display: ["Iowan Old Style", "Palatino Linotype", "Book Antiqua", "serif"]
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(circle at top left, rgba(14,165,233,0.22), transparent 34%), radial-gradient(circle at top right, rgba(249,115,22,0.18), transparent 28%), linear-gradient(180deg, rgba(255,255,255,0.86), rgba(255,255,255,1))",
        "mesh-gradient-dark":
          "radial-gradient(circle at top left, rgba(56,189,248,0.16), transparent 34%), radial-gradient(circle at top right, rgba(251,146,60,0.12), transparent 28%), linear-gradient(180deg, rgba(2,6,23,0.88), rgba(2,6,23,1))"
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out"
      }
    }
  },
  plugins: []
};

export default config;
