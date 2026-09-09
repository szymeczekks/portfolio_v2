import { defineConfig, fontProviders  } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

export default defineConfig({
    integrations:[icon()],
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        locales: ["pl", "en"],
        defaultLocale: "pl",
        routing: {
            prefixDefaultLocale: false,
        },
    },
    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "Space Grotesk",
            cssVariable: "--font-space-grotesk",
            subsets: ["latin", "latin-ext"],
        },
        {
            provider: fontProviders.fontsource(),
            name: "JetBrains Mono",
            cssVariable: "--font-jetbrains-mono",
            subsets: ["latin", "latin-ext"],
        }
    ]
});