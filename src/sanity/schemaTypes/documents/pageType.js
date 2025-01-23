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
      title: 'Título de la página',
      validation: (rule) => rule.required(),
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
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: (doc) => {
          // Si la página es la principal, el slug será "/"
          if (doc.isHome) {
            return '/';
          }
          // Si no, genera el slug basado en el título
          return doc.title;
        },
        slugify: (input) => {
          // Si el input es "/", devuelve "/" directamente
          if (input === '/') {
            return '/';
          }
          // Si no, usa slugify para generar el slug
          return slugify(input, { lower: true, strict: true });
        },
      },
      validation: (Rule) =>
        Rule.custom((slug, context) => {
          const { parent } = context;

          // Si la página es la principal, el slug debe ser "/"
          if (parent?.isHome) {
            return slug?.current === '/' ? true : 'El slug debe ser "/" para la página principal.';
          }

          // Si no es la página principal, no hay restricciones adicionales
          return true;
        }),
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