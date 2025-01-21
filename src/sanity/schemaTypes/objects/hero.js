import { defineType, defineField } from "sanity";

export const heroType = defineType({
    name: 'hero',
    type: 'object',
    title: 'Sección Héroe',
    fields: [
        defineField({
            name: 'encabezado',
            type: 'string',
            description: 'Tip: Explica lo que haces de manera breve o engánchalos resolviendo una objeción común.',
            validation: (rule) => rule.max(70).error('El texto no puede superar los 70 caracteres.'),
        }),
        defineField({
            name: 'subtitulo',
            type: 'text',
            description: 'Tip: Brinda más información de tu producto. Preséntalo y explica como genera el valor de tu título.',
            validation: (rule) => rule.max(150).error('El texto no puede superar los 150 caracteres.'),
        }),
        defineField({
            name: 'imagen',
            type: 'image',
            description: 'Tip: Muestra tu producto en todo su esplender. El objetivo es acercarse lo más posible a la realidad mostrándolo en plena acción.',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'testimonio',
            type: 'text',
            description: 'Tip: Esta prueba social añade credibilidad instantánea al valor que estás prometiendo.',
            validation: (rule) => rule.max(120).error('El texto no debe superar los 120 caracteres'),
        }),
        defineField({
            name: 'botonCTA',
            title: 'Botón',
            type: 'botonCTA',
            validation: (rule) => rule.required(),
        }),
    ],
    description: 'Describe tu producto de manera que causes una buena impresión en tu cliente.',
});
