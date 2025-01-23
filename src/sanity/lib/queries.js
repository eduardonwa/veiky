export const pageQuery = `
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    _rev,
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    content[] {
      _type == "hero" => {
        _type,
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
        orientacion,
        "imagenUrl": imagen.asset->url,
        boton {
          texto,
          enlace[]-> {
            _id,
            slug,
          }
        }
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
      },
      _type == "card" => {
        _type,
        titulo,
        descripcion,
        "imagenUrl": imagen.asset->url,
        boton {
          texto,
          enlace[]->{
            _id,
            slug,
          }
        }
      },
      _type == "cardSet" => {
        _type,
        encabezado,
        setTarjetas[] {
          titulo,
          descripcion,
          "imagenUrl": imagen.asset->url,
          boton {
            texto,
            enlace[]-> {
              _id,
              slug,
            }
          }
        }
      },
      _type == "staticGallery" => {
        _type,
        titulo,
        subtitulo,
        imagen[] {
          "imagenUrl": imagen.asset->url,
          titulo,
          subtitulo,
        }
      },
    }
  }
`;

export const homePageQuery = `
  *[_type == "page" && isHome == true][0] {
    _id,
    _rev,
    title,
    "slug": slug.current,
    "mainImageUrl": mainImage.asset->url,
    content[] {
      _type == "hero" => {
        _type,
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
        orientacion,
        "imagenUrl": imagen.asset->url,
      },
      _type == "features" => {
        _type,
        titulo,
        caracteristicas[] {
          titulo,
          texto,
          "imagenUrl": imagen.asset->url,
        }
      },
      _type == "faqs" => {
        _type,
        title,
        faqs[]-> {
          title,
          "faqText": body[].children[].text
        }
      },
      _type == "card" => {
        _type,
        titulo,
        descripcion,
        "imagenUrl": imagen.asset->url,
        boton {
          texto,
          enlace[]->{
            _id,
            slug,
          }
        }
      },
      _type == "cardSet" => {
        _type,
        encabezado,
        setTarjetas[] {
          titulo,
          descripcion,
          "imagenUrl": imagen.asset->url,
          boton {
            texto,
            enlace[]-> {
              _id,
              slug,
            }
          }
        }
      },
      _type == "staticGallery" => {
        _type,
        titulo,
        subtitulo,
        imagen[] {
          "imagenUrl": imagen.asset->url,
          titulo,
          subtitulo,
        }
      },
    }
  }
`;

export const navbarQuery = `
  *[_type == "navigation"][0] {
    "logoUrl": logo.asset->url,
    navItems[]-> {
      _id,
      title,
      slug,
      isHome,
    }
  }
`;