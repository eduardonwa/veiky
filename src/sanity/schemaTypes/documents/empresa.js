import { defineType, defineField } from "sanity";

export const empresaType = defineType({
    name: 'empresa',
    type: 'document',
    groups: [
        { name: 'contacto', title: 'Información de Contacto' },
        { name: 'marca', title: 'Información de Marca '},
    ],
    fields: [
        defineField({
           name: 'nombre',
           title: 'Nombre Oficial',
           type: 'string',
           group: 'marca',
           validation: (rule) => rule.required(), 
        }),
        defineField({
            name: 'logo',
            type: 'image',
           group: 'marca',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Descripción',
            type: 'text',
            group: 'marca',
            validation: Rule => Rule.max(160).warning('Mantén el texto por debajo de 160 caracteres.'),
        }),
        defineField({
            name: 'historia',
            title: 'Historia',
            type: 'blockContent',
            group: 'marca',
        }),
        defineField({
            name: 'hero',
            title: 'Impacto inicial',
            type: 'hero',
            group: 'marca',
        }),
        defineField({
            name: 'address',
            title: 'Dirección',
            type: 'string',
            group: 'contacto',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'phone',
            title: 'Teléfono',
            type: 'string',
            group: 'contacto',
        }),
        defineField({
            name: 'socialMedia',
            title: 'Redes Sociales',
            type: 'array',
            of: [{ type: 'object',
            fields: [
                { name: 'platform', type: 'string', title: 'Plataforma' },
                { name: 'url', type: 'url', title: 'Enlace' },
            ]}],
            group: 'contacto',
            description: 'Enlaces a las redes sociales de la empresa.',
        }),
        defineField({
            name: 'email',
            type: 'string',
            group: 'contacto',
        }),
    ],
});