import { defineField, defineType } from "sanity"

export default defineType({
  name: "userEmail",
  title: "User Email",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
  ],
})
