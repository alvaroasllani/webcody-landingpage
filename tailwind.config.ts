import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
      fontFamily: {
        doto: ['"Doto"', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
			colors: {
				nd: {
          black: "var(--black)",
          surface: "var(--surface)",
          surfaceRaised: "var(--surface-raised)",
          border: "var(--border)",
          borderVisible: "var(--border-visible)",
          textDisabled: "var(--text-disabled)",
          textSecondary: "var(--text-secondary)",
          textPrimary: "var(--text-primary)",
          textDisplay: "var(--text-display)",
          accent: "var(--accent)",
          accentSubtle: "var(--accent-subtle)",
          success: "var(--success)",
          warning: "var(--warning)",
          interactive: "var(--interactive)"
        },
        border: 'var(--border)',
				input: 'var(--border-visible)',
				ring: 'var(--border-visible)',
				background: 'var(--black)',
				foreground: 'var(--text-primary)',
				primary: {
					DEFAULT: 'var(--text-display)',
					foreground: 'var(--black)',
				},
				secondary: {
					DEFAULT: 'var(--surface-raised)',
					foreground: 'var(--text-primary)'
				},
				destructive: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--text-display)'
				},
				muted: {
					DEFAULT: 'var(--text-secondary)',
					foreground: 'var(--black)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--text-display)'
				},
				card: {
					DEFAULT: 'var(--surface)',
					foreground: 'var(--text-primary)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
