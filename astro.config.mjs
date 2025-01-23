import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import sanityIntegration from "@sanity/astro";
import react from "@astrojs/react";
import alpine from '@astrojs/alpinejs';
import EnvironmentPlugin from "vite-plugin-environment";

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);

export default defineConfig({
  integrations: [
    sanityIntegration({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      apiVersion: "2025-01-20",
      studioBasePath: "/studio",
      useCdn: false,
      stega: {
        studioUrl: "/studio",
      },
    }),
    react(),
    alpine({
      entrypoint: '/src/scripts/alpine.js',
    }),
  ],
  output: "server",
  vite: {
    plugins: [
      EnvironmentPlugin({ NODE_ENV: process.env.NODE_ENV }),
    ],
    define: {
      global: 'globalThis',
      process: {
        env: {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        },
      },
    },
  },
});
