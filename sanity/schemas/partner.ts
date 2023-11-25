import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'partner',
    title: 'Partner',
    type: 'document',
    fields: [
        defineField({
            name: 'featureFlag',
            title: 'Display Partner',
            type: 'boolean',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'url',
            title: 'Url',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
        }),
    ],
})
