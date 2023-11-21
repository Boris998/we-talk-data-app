import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'pastEvents',
    title: 'Past Events',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'events',
            title: 'Events',
            type: 'array',
            of: [{type: 'reference', to: {type: 'event'}}]
        }),
    ],
})
