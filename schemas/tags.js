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
    },
    {
      name: "image",
      description: "Provide an optional image for this tag",
      title: "Image",
      type: "image",
    },
  ],
};
