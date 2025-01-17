import { defineType, defineField } from "sanity"

export const equipoType = defineType({
    name: 'Equipo',
    type: 'document',
    fields: [
        defineField({
            name: 'nombre',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'celular',
            type: 'string',
            title: 'Número de contacto',
            validation: (Rule) =>
                Rule.required()
                    .regex(
                        /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,6}$/im,
                        {
                            name: 'teléfono', // Nombre de la validación
                            invert: false, // No invertir la lógica de la validación
                        }
                    )
                    .error('Debes ingresar un número de celular válido.'),
        }),
        defineField({
            name: 'email',
            type: 'string',
            title: 'Correo electrónico',
            validation: (Rule) =>
                Rule.required()
                    .regex(
                        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                        {
                            name: 'email', // Nombre de la validación
                            invert: false, // No invertir la lógica de la validación
                        }
                    )
                    .error('Debes ingresar un correo electrónico válido.'),
        }),
        defineField({
            name: 'rol',
            type: 'string',
            options: {
                list: [
                    { title: 'Dueño', value: 'dueño' },
                    { title: 'Administrador', value: 'administrador' },
                    { title: 'Operador de caja', value: 'operadorCaja' },
                    { title: 'Repartidor', value: 'repartidor' },                    
                ],
            },
        }),
        defineField({
            name: 'foto',
            type: 'image',
            validation: (rule) => rule.required(),
        }),
    ],
})