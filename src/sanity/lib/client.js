import { createClient } from '@sanity/client';

// Usamos la configuración del proyecto y el dataset de tu archivo de configuración de Sanity
export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID, // Este valor ya está en tu archivo de configuración
  dataset: import.meta.env.PUBLIC_SANITY_DATASET, // Igualmente aquí
  token: import.meta.env.SANITY_API_READ_TOKEN,
  apiVersion: "2025-01-20",
  useCdn: false, // Puedes cambiarlo a false si necesitas datos en tiempo real
});