import { defineField, defineType } from 'sanity';

export const cardType = defineType({
    name: 'card',
    type: 'object',
    title: 'Tarjeta Individual',
    fields: [
        defineField({
            name: 'titulo',
            type: 'string',
            title: 'Título',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'imagen',
            type: 'image',
            title: 'Imagen',
        }),
        defineField({
            name: 'descripcion',
            type: 'text',
            title: 'Descripción',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'boton',
            type: 'botonCTA',
        }),
    ],
});