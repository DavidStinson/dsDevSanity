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
      type: "imageObj",
      description: "Provide an optional image for this topic",
      title: "Topic Image",
      name: "topicImage",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "topicImage.image",
    },
  },
};
