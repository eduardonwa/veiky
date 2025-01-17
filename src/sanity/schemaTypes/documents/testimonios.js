import { defineType, defineField } from "sanity";

export const testimonioType = defineType({
    name: 'testimonios',
    type: 'document',
    fields: [
        defineField({
            name: 'cliente',
            title: 'Nombre del cliente',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'foto',
            type: 'image',
        }),
        defineField({
            name: 'testimonioTexto',
            type: 'blockContent',
            title: 'Texto del testimonio',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'fecha',
            type: 'date'
        })
    ],
});