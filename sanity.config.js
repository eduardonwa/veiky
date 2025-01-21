import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { presentationTool } from "sanity/presentation";
import { resolve } from "./src/sanity/lib/resolve";
import { visionTool } from "@sanity/vision";
import { myStructure } from "./deskStructure";

const SANITY_STUDIO_PREVIEW_URL = import.meta.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:4321';

export default defineConfig({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  plugins: [
    structureTool({
      structure: myStructure,
    }),
    presentationTool({
      resolve,
      title: 'Presentación',
      previewUrl: `${SANITY_STUDIO_PREVIEW_URL}?preview=true`,
    }),
    visionTool(),
  ],
  schema,
});