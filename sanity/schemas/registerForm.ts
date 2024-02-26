import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'register',
    title: 'Register',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'experience',
            title: 'Experience',
            type: 'string',
        }),
        defineField({
            name: 'comment',
            title: 'Comment',
            type: 'string',
        }),
        defineField({
            name: 'agree',
            title: 'Agree',
            type: 'boolean',
        }),
    ],
})
