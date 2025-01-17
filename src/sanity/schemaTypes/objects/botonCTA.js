import { defineType, defineField } from "sanity";

export const botonCTAType = defineType({
    name: 'botonCTA',
    title: 'Botón',
    type: 'object',
    fields: [
        {
            name: 'texto',
            title: 'Texto',
            type: 'string',
            description: 'Tip: Enfatiza el “valor” sobre la “acción” para tener un mejor rendimiento. El truco está en cumplir con el valor que promete el título.',
            validation: (rule) => rule.required().max(34),
        },
        {
            name: 'enlace',
            title: 'Enlace',
            type: 'string',
            validation: (rule) => rule.required(),
        },
    ],
    description: 'Botón para llevar a tus clientes hacia el siguiente paso.',
});