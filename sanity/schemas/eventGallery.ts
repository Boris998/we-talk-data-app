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
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'reference', to: {type: 'picture'}}]
        }),
    ],
})
