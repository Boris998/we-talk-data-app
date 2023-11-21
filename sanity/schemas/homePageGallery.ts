import {defineField, defineType} from 'sanity'

export default      defineType({
    name: 'homePageGallery',
    title: 'Home Page Gallery',
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
            name: 'sliderImage',
            title: 'Slider Image',
            type: 'array',
            of: [{type: 'reference', to: {type: 'picture'}}]
        }),
    ],
})
