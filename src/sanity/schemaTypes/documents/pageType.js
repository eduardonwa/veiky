import { DocumentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";
import { client } from '../../lib/client';

export const pageType = defineType({
  name: "page",
  title: "Página",
  type: "document",
  icon: DocumentIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "content",
      type: "pageBuilder",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'isHome',
      type: 'boolean',
      title: '¿Es la página principal?',
      validation: (Rule) =>
        Rule.custom(async (isHome, context) => {
          const { document, parent } = context;

          // Solo validar si el campo isHome está siendo modificado
          if (parent && parent.isHome === isHome) {
            return true;
          }

          if (!isHome) return true; // No hay necesidad de validar si no es la página principal

          const pages = await client.fetch(
            `*[_type == "page" && isHome == true && _id != $currentId]`,
            { currentId: document._id }
          );
          return pages.length === 0
            ? true
            : 'Solo una página puede ser la principal.';
        }),
    })
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      isHome: 'isHome',
    },
    prepare(selection) {
      const { title, isHome } = selection;
      return {
        title,
        subtitle: isHome ? 'Página principal' : '',
      }
    }
  },
});