export default {
  name: "tag",
  title: "Tag",
  type: "document",
  fields: [
    {
      name: "title",
      description: "The title for this tag",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "imageObj",
      description: "Provide an optional image for this tag",
      title: "Tag Image",
      name: "tagImage",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "tagImage.image",
    },
  },
};
