import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/lib/resolve";
import { visionTool } from "@sanity/vision";
import { myStructure } from "./deskStructure";

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({
      structure: myStructure,
    }),
    presentationTool({
      previewUrl: {
        origin: 'http://localhost:4321',
        preview: '/',
        previewMode: {
          enable: '/api/draft',
          disable: '/api/disable-draft',
        },
      },
      resolve,
    }),
    visionTool(),
  ],
  schema,
});