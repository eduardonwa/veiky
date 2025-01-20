import { defineField, defineType } from "sanity";
import { StarIcon } from "@sanity/icons";

export const featuresType = defineType({
  name: "features",
  type: "object",
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
    }),
    defineField({
      name: "caracteristicas",
      title: "Características",
      type: "array",
      of: [
        defineField({
          name: "caracteristica",
          title: "Característica",
          type: "object",
          fields: [
            defineField({
              name: "titulo",
              title: "Título",
              type: "string",
            }),
            defineField({
              name: "texto",
              type: "text",
            }),
          ],
        }),
      ],
    }),
  ],
  icon: StarIcon,
  preview: {
    select: {
      title: "titulo",
    },
    prepare({title}) {
      return {
        title,
        subtitle: "Características"
      }
    }
  }
});