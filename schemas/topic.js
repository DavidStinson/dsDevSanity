export default {
  name: "topic",
  title: "Topic",
  type: "document",
  fields: [
    {
      name: "title",
      description: "The title for this topic",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      description: "The uri of this topic",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 32,
      },
    },
    {
      type: "imageObj",
      description: "Provide an optional image for this topic",
      title: "Topic Image",
      name: "topicImage",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "topicImage",
    },
  },
};
