import { defineLocations } from "sanity/presentation";

const siteUrl = import.meta.env.PUBLIC_SITE_URL || 'http://localhost:4321'; // Fallback to localhost if not set

export const resolve = {
  locations: {
    post: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Untitled",
            href: `/post/${doc?.slug}`,
          },
          { title: "Posts", href: `${siteUrl}/posts` }
        ],
      }),
    }),
    page: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Sin título",
            href: `/${doc?.slug}`,
          },
          { title: "Páginas", href: siteUrl }
        ],
      }),
    }),
    homePage: defineLocations({
      select: {
        title: "title",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Home",
            href: `/`,
          },
          { title: "Inicio", href: siteUrl },
        ],
      }),
    }),
  },
};