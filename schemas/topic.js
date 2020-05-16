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
      name: "image",
      description: "Provide an optional image for this topic",
      title: "Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          validation: (Rule) =>
            Rule.required()
              .max(124)
              .error("Don't make the alt text longer than 120 characters."),
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};
