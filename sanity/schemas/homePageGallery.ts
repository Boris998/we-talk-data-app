import {defineField, defineType} from 'sanity'
import {urlFor} from "../../sanity";

export default      defineType({
    name: 'homePageGallery',
    title: 'Home Page Gallery',
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
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'btn',
            title: 'Button text',
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
