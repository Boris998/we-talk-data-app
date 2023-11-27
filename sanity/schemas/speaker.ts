import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'speaker',
  title: 'Speaker',
  type: 'document',
  fields: [
    defineField({
      name: 'featureFlag',
      title: 'Display Speaker',
      type: 'boolean',
    }),
    defineField({
      name: 'speakerName',
      title: 'Speaker Name',
      type: 'string',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'string',
    }),
    defineField({
      name: 'linkedIn',
      title: 'Linked In',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'presentationTitle',
      title: 'Presentation Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'presentationStartTime',
      title: 'Presentation start time (e.g. 18:30)',
      type: 'string',
    }),
    defineField({
      name: 'additionalInfo',
      title: 'AdditionalInfo',
      type: 'string',
    }),
  ],
})
