export const myStructure = (S) =>
  S.list()
    .title('Contenido')
    .items([
      // Filtra los documentos que no deseas mostrar
      ...S.documentTypeListItems().filter(
        (listItem) => !['author', 'post', 'category', 'page', 'faq', 'navigation', 'siteSettings'].includes(listItem.getId())
      ),
      S.divider(),
      // Agrega manualmente los documentos que deseas mostrar con un título personalizado
      S.documentTypeListItem("page").title("Páginas"),
      S.divider(),
      // Publicaciones
      S.listItem()
        .title('Publicaciones')
        .child(
          S.documentList()
            .title('Todas las publicaciones')
            .filter('_type == "post"')
        ),
      S.listItem()
        .title('Filtrar publicaciones')
        .child(
          S.list()
            .title('Filtros')
            .items([
              // Filtrar por categoría
              S.listItem()
                .title('Por categoría')
                .child(
                  S.documentTypeList('category')
                    .title('Por categoría')
                    .child(categoryId =>
                      S.documentList()
                        .title('Posts')
                        .filter('_type == "post" && $categoryId in categories[]._ref')
                        .params({ categoryId })
                    ),
                ),
              // Filtrar por autor
              S.listItem()
                .title('Por autor')
                .child(
                  S.documentTypeList('author')
                    .title('Por autor')
                    .child(authorId =>
                      S.documentList()
                        .title('Posts')
                        .filter('_type == "post" && $authorId == author._ref')
                        .params({ authorId })
                    ),
                ),
            ]),
        ),
      S.divider(),
      // Configuración del sitio
      S.listItem()
        .title('Configuración')
        .child(
          S.list()
            .title('Configuración')
            .items([
              S.listItem()
                .title('General')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                ),
              S.listItem()
                .title('Barra de navegación')
                .child(
                  S.document()
                    .schemaType('navigation')
                    .documentId('navigation')
                ),
            ])
        ),
      S.divider(),
    ]);