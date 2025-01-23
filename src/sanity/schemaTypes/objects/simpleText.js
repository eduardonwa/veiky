import { defineType, defineField } from "sanity";

export const simpleTextType = defineType({
    name: 'simpleText',
    type: 'object',
    fields: [
        defineField({
            name: 'titulo',
            type: 'string',
            validation: rule =>
                rule
                    .max(75)
                    .required()
                    .error('El texto no puede superar los 75 caractéres')
        }),
        defineField({
            name: 'texto',
            type: 'blockContent',
            validation: rule => rule.required(),
        }),
    ],
});