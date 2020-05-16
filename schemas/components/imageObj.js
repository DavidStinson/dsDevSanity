export default {
  name: "imageObj",
  type: "object",
  fields: [
    {
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
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
    },
    {
      name: "attr",
      description: "Any necessary image attributation",
      type: "string",
      title: "Attributation",
    },
  ],
};
