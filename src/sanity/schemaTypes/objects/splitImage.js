import { defineField, defineType } from "sanity";
import { BlockContentIcon } from "@sanity/icons";

export const splitImageType = defineType({
  name: "splitImage",
  type: "object",
  fields: [
    defineField({
      name: "orientacion",
      type: "string",
      options: {
        list: [
          { value: "imageLeft", title: "Imagen a la izquierda" },
          { value: "imageRight", title: "Imagen a la derecha" },
        ],
      },
    }),
    defineField({
      name: "titulo",
      type: "string",
    }),
    defineField({
      name: 'subtitulo',
      type: 'text',
    }),
    defineField({
      name: "imagen",
      type: "image",
    }),
  ],
  icon: BlockContentIcon,
  preview: {
    select: {
      title: "titulo",
      media: "imagen",
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: "Texto con imagen",
        media: media ?? BlockContentIcon,
      };
    },
  },
});