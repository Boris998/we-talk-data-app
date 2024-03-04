import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'featureFlags',
    title: 'Feature flags',
    type: 'document',
    fields: [
        defineField({
            name: 'featureFlagAbout',
            title: 'Display Section About',
            type: 'boolean',
        }),defineField({
            name: 'featureFlagVideo',
            title: 'Display Section Video',
            type: 'boolean',
        }),defineField({
            name: 'featureFlagUpcomingEvents',
            title: 'Display Section Upcoming Events',
            type: 'boolean',
        }),defineField({
            name: 'featureFlagGallery',
            title: 'Display Section Gallery',
            type: 'boolean',
        }),defineField({
            name: 'featureFlagPastEvents',
            title: 'Display Section Past Events',
            type: 'boolean',
        }),defineField({
            name: 'featureFlagPartners',
            title: 'Display Section Partners',
            type: 'boolean',
        }),defineField({
            name: 'featureFlagSupporters',
            title: 'Display Section Supporters',
            type: 'boolean',
        })
    ],
})
