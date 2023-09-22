import { defineField, defineType } from "sanity"

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "metaDescription",
      title: "MetaDescription",
      type: "text",
    }),
    defineField({
      name: 'companies',
      type: 'array',
      title: 'Companies',
      of: [{type: 'reference', to: {type: 'company'}}]
    })
  ],
})
