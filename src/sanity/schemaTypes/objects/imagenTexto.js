import { defineType, defineField } from "sanity";

export const imagenTextoType = defineType({
    name: 'imagenTexto',
    type: 'object',
    fields: [
        defineField({
            name: 'imagen',
            type: 'image',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'titulo',
            type: 'string',
            validation: rule => rule.max(75),
        }),
        defineField({
            name: 'subtitulo',
            type: 'text',
        }),
    ],
})