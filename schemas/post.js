export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "topics",
      title: "Topics",
      type: "array",
      of: [{ type: "reference", to: { type: "topic" } }],
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    {
      name: "publishedDate",
      title: "Published Date",
      type: "date",
    },
    {
      name: "updatedDate",
      title: "Updated Date",
      type: "date",
      validation: (Rule) =>
        Rule.required().min(Rule.valueOfField("publishedDate")),
    },
    {
      name: "bodyExcerpt",
      title: "Body Excerpt",
      type: "blockContent",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "githubLink",
      title: "GitHub Link",
      type: "url",
      scheme: ["https"],
    },
    {
      name: "deploymentLink",
      title: "Deployment Link",
      type: "url",
      scheme: ["https"],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
