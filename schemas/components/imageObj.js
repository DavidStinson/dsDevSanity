export default {
  name: "imageObj",
  type: "image",
  validation: (Rule) => Rule.required(),
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      description:
        "Alt text helps visitors that are unable to see or load images for any reason.",
      type: "string",
      title: "Alt Text",
      validation: (Rule) =>
        Rule.required()
          .max(120)
          .error("Don't make the alt text longer than 120 characters."),
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "attr",
      description: "Any necessary image attributation",
      type: "string",
      title: "Attributation",
      options: {
        isHighlighted: true,
      },
    },
  ],
};
