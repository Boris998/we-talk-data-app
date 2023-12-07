import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'eventGallery',
    title: 'Event Gallery',
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
            name: 'sliderImages',
            title: 'Slider Image',
            type: 'array',
            of: [{type: 'reference', to: {type: 'picture'}}]
        }),
    ],
})
