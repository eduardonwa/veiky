import { defineConfig } from "astro/config";
import sanityIntegration from "@sanity/astro";
import react from "@astrojs/react";
import alpine from '@astrojs/alpinejs';
import { loadEnv } from "vite";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanityIntegration({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      apiVersion: "2025-01-20", // insert the current date to access the latest version of the API
      studioBasePath: "/studio",
      useCdn: false,
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
    alpine(
      {
        entrypoint: '/src/scripts/alpine.js',
      }),
  ],
  output: "server",
});