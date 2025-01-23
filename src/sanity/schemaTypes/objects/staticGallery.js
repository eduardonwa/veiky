import { defineType, defineField } from "sanity";

export const staticGalleryType = defineType({
    name: 'staticGallery',
    type: 'object',
    fields: [
        defineField({
            name: 'titulo',
            type: 'string',
        }),
        defineField({
            name: 'subtitulo',
            type: 'text',
        }),
        defineField({
            name: 'imagen',
            type: 'array',
            of: [
                {
                    type: 'imagenTexto'
                }
            ],
        }),
    ]
})