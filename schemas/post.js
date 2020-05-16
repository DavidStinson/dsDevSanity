export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      description: "The title for this post",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      description: "The uri of this post",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      description: "Author or authors of this post",
      title: "Author",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: { type: "author" } }],
    },
    {
      name: "heroImage",
      description: "The main image for this post.",
      title: "Hero image",
      type: "image",
      options: {
        hotspot: true,
      },
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
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "topics",
      description: "Broad topics of this post",
      title: "Topics",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: { type: "topic" } }],
    },
    {
      name: "tags",
      description: "Specific tags for this post",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
    },
    {
      name: "publishedDate",
      description: "The original publish date of this post",
      title: "Published Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "updatedDate",
      description: "The date of the most recent update to this post, if any",
      title: "Updated Date",
      type: "date",
      validation: (Rule) =>
        Rule.min(Rule.valueOfField("publishedDate")).error(
          "Updates may not occur before the Published Date"
        ),
    },
    {
      name: "bodyExcerpt",
      description: "A piece of highlighted content from the body of this post",
      title: "Body Excerpt",
      type: "blockContent",
    },
    {
      name: "body",
      description: "The main content of this post",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "githubLink",
      description: "A GitHub link for any project in this post",
      title: "GitHub Link",
      type: "url",
      scheme: ["https"],
    },
    {
      name: "deploymentLink",
      description: "A demo of the content of this post",
      title: "Deployment Link",
      type: "url",
      scheme: ["https"],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "heroImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
