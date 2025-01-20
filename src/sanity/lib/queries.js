export const pageQuery = `
  *[_type == "page" && (slug.current == $slug)][0] {
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    content[] {
      _type == "hero" => {
        encabezado,
        subtitulo,
        "imagenUrl": imagen.asset->url,
        testimonio,
        botonCTA {
          enlace,
          texto
        }
      },
      _type == "splitImage" => {
        _type,
        titulo,
        subtitulo,
        "imagenUrl": imagen.asset->url,
      },
      _type == "features" => {
        _type,
        titulo,
        caracteristicas[] {
          titulo,
          texto
        }
      },
      _type == "faqs" => {
        _type,
        title,
        faqs[]-> {
          title,
          "faqText": body[].children[].text
        }
      }
    }
  }
`;

export const homePageQuery = `
  *[_type == "page" && isHome == true][0] {
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    content[] {
      _type == "hero" => {
        encabezado,
        subtitulo,
        "imagenUrl": imagen.asset->url,
        testimonio,
        botonCTA {
          enlace,
          texto
        }
      },
      _type == "splitImage" => {
        _type,
        titulo,
        subtitulo,
        "imagenUrl": imagen.asset->url,
      },
      _type == "features" => {
        _type,
        titulo,
        caracteristicas[] {
          titulo,
          texto
        }
      },
      _type == "faqs" => {
        _type,
        title,
        faqs[]-> {
          title,
          "faqText": body[].children[].text
        }
      }
    }
  }
`;