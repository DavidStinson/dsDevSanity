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
      name: "image",
      description: "Provide an optional image for this tag",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          description:
            "Alt text helps visitors that are unable to see or load images for any reason.",
          type: "string",
          title: "Alt Text",
          validation: (Rule) =>
            Rule.required()
              .max(124)
              .error("Don't make the alt text longer than 120 characters."),
          options: {
            isHighlighted: true,
          },
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};
