import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'picture',
    title: 'Picture',
    type: 'document',
    fields: [
        defineField({
            name: 'alt',
            title: 'Alt',
            type: 'string',
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
        }),
    ],
});
