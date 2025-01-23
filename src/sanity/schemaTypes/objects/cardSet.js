import { defineField, defineType } from 'sanity';

export const cardSetType = defineType({
    name: 'cardSet',
    type: 'object',
    title: 'Set de Tarjetas',
    fields: [
        defineField({
            name: 'encabezado',
            type: 'string',
        }),
        defineField({
            name: 'setTarjetas',
            type: 'array',
            of: [
                {
                    type: 'card',
                },
            ],
            validation: (rule) =>
                rule
                    .min(2)
                    .max(3)
                    .error('El set debe tener entre 2 y 3 tarjetas')
        })
    ]
});