import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'city',
            title: 'City',
            type: 'string',
        }),
        defineField({
            name: 'year',
            title: 'Year',
            type: 'number',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
        }),
        defineField({
            name: 'speakers',
            title: 'Speakers',
            type: 'array',
            of: [{type: 'reference', to: {type: 'speaker'}}]
        }),
    ],
})
