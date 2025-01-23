import { defineField, defineType } from "sanity";
import { MenuIcon } from '@sanity/icons'

export const navigationType = defineType({
    name: 'navigation',
    title: 'Enlaces de navegación',
    type: 'document',
    icon: MenuIcon,
    preview: {
        prepare() {
            return {
                title: 'Navegación Principal'
            }
        }
    },
    fields: [
        defineField({
            name: "logo",
            type: "image",
            title: "Logo",
            description: "El logo que aparecerá en la barra de navegación.",
        }),
        defineField({
            name: 'navItems',
            title: 'Enlaces de navegación',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'page' }]
                }
            ],
            options: {
                modal: 'dialog',
                filter: `!(_id in path('drafts.**'))` // This line filters out draft documents
            },
        }),
    ]
});