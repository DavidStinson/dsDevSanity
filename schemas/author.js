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
      type: "imageObj",
      description: "The avatar for this author",
      title: "Avatar",
      name: "avatar",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "bio",
      description: "A short bio for this author",
      title: "Bio",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "avatar.image",
    },
  },
};
