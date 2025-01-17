import { defineType, defineField } from "sanity";

export const productosType = defineType({
    name: 'productos',
    type: 'document',
    fields: [
        defineField({
            name: 'nombre',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'tipoProducto',
            type: 'string',
            title: 'Tipo de producto',
            options: {
                list: [
                    { title: 'Paquete', value: 'paquete' },
                    { title: 'Unidad', value: 'unidad' },
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'descripcion',
            title: 'Descripción',
            type: 'text',    
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'ingredientes',
            type: 'array',
            of: [{type:'string'}],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'precio',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'imagenes',
            type: 'array',
            title: 'Imagenes del producto',
            of: [
                    {
                        type: 'image',
                        options: {
                            hotspot: true,
                        },
                    },
                ],
            validation: (rule) => rule.max(4),
        }),
        // campos específicos para paquetes
        {
            name: 'cantidad',
            type: 'number',
            title: 'Cantidad de galletas',
            hidden: ({ parent }) => parent?.tipoProducto !== 'paquete',
        },
        {
            name: 'pesoTotal',
            type: 'string',
            title: 'Peso total del paquete',
            hidden: ({ parent }) => parent?.tipoProducto !== 'paquete',
        },
        {
            name: 'pesoIndividual',
            type: 'string',
            title: 'Peso de la galleta',
            hidden: ({ parent }) => parent?.tipoProducto !== 'paquete',
        },
        {
            name: 'sabores',
            type: 'array',
            title: 'Sabores o variantes',
            of: [{ type:'string' }],
            hidden: ({ parent }) => parent?.tipoProducto !== 'paquete',
        }
    ],
    preview: {
        select: {
            title: 'nombre',
            media: 'imagenes.0.asset',
        },
        prepare(selection) {
            const { title, media } = selection;
            return {
                title: title,
                media: media,
            };
        },
    },
})