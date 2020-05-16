export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The title for this post"
    },
    {
      name: "slug",
      description: "The uri of this post",
      title: "Slug",
      type: "slug",
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
      of: [{ type: "reference", to: {type: "author"} }],
    },
    {
      name: "heroImage",
      description: "The main image for this post.",
      title: "Hero image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "topics",
      description: "Broad topics of this post",
      title: "Topics",
      type: "array",
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
    },
    {
      name: "updatedDate",
      description: "The date of the most recent update to this post, if any",
      title: "Updated Date",
      type: "date",
      validation: (Rule) =>
        Rule.required().min(Rule.valueOfField("publishedDate")),
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
