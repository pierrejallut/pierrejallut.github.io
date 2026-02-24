// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primeuix/themes/aura";
import PrimeUI from "tailwindcss-primeui";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-06",
  devServer: {
    port: 8080,
  },
  devtools: { enabled: false },
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "nuxt-vitalizer"
  ],
  nitro: {
  prerender: {
    crawlLinks: false,
    routes: [],          // <- ne prerender rien
    failOnError: false,
  },
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".p-dark",
        },
      },
      ripple: true,
    },
    autoImport: true,
  },
  css: ["primeicons/primeicons.css"],
  tailwindcss: {
    config: {
      plugins: [PrimeUI],
      darkMode: ["class", ".p-dark"],
    },
  },
  app: {
    head: {
      title: "Pierre Jallut",
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/logo.png",
        }
      ]
    },
    // IMPORTANT: mets le nom exact du repo
    baseURL: '/pierrejallut.github.io/',
    // optionnel mais souvent utile pour éviter certains cas limites
    // buildAssetsDir: '/_nuxt/',
  }
});
