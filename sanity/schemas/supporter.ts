import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'supporter',
    title: 'Supporter',
    type: 'document',
    fields: [
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
