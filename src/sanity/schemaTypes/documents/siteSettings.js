import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Configuración del Sitio",
  type: "document",
  fields: [
    defineField({
        name: 'titulo',
        type: 'string',
        description: 'Nombre de tu empresa/página',
    }),
  ],
});