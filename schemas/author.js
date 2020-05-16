export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "name",
      description: "The name of this author",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      description: "The uri of this author",
      title: "Slug",
      type: "slug",
      validation: (Rule) =>
        Rule.required(),
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      description: "An avatar for this author",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      description: "A bio for this author",
      title: "Bio",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: "Block",
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
