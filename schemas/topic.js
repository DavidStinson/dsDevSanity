export default {
  name: 'topic',
  title: 'Topic',
  type: 'document',
  fields: [
    {
      name: 'title',
      description: "The title for this topic",
      title: 'Title',
      type: 'string'
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      description: "Provide an optional image for this topic",
      title: 'Image',
      type: 'image',
    },
  ]
}
