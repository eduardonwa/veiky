export const myStructure = (S) =>
    S.list()
      .title('Contenido')
      .items([
        // el resto de los documentos
        ...S.documentTypeListItems().filter(
          // no incluir
          (listItem) => !['author', 'post', 'category', 'page', 'faq'].includes(listItem.getId())
        ),
      S.divider(),
        S.documentTypeListItem("page").title("Páginas"),
      S.divider(),
        // todas las publicaciones
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
                // filtar por categoría
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
                // filtar por autor
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
      ])