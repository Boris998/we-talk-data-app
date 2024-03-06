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
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'locationUrl',
            title: 'Location Url',
            type: 'string',
        }),
        defineField({
            name: 'receptionTime',
            title: 'Reception Time',
            type: 'string',
        }),
        defineField({
            name: 'techTalkTime',
            title: 'Tech Talk Time',
            type: 'string',
        }),
        defineField({
            name: 'networkingTime',
            title: 'Networking Time',
            type: 'string',
        }),
        defineField({
            name: 'registerButton',
            title: 'Register Button',
            type: 'string',
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
