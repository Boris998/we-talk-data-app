import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        defineField({
            name: 'featureFlag',
            title: 'Display Section',
            type: 'boolean',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),    ],
})
