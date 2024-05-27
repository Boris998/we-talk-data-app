import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'event',
    title: 'Past Events Page',
    type: 'document',
    fields: [
        defineField({
            name: 'featureFlag',
            title: 'Display Event',
            type: 'boolean',
        }),
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
            name: 'date',
            title: 'Date',
            type: 'string',
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
