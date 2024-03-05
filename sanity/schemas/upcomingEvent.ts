import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'upcomingEvent',
    title: 'Upcoming Event',
    type: 'document',
    fields: [
        defineField({
            name: 'speakersSectionTitle',
            title: 'Speakers Section Title',
            type: 'string',
        }),
        defineField({
            name: 'scheduleSectionTitle',
            title: 'Schedule Section Title',
            type: 'string',
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
        }),
        defineField({
            name: 'speaker',
            title: 'Speaker',
            type: 'array',
            of: [{type: 'reference', to: {type: 'speaker'}}]
        }),
        defineField({
            name: 'registerFlag',
            title: 'Register Flag',
            type: 'boolean',
        }),
    ],
})
