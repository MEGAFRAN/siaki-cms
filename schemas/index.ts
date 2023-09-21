import { type SchemaTypeDefinition } from "sanity"
import post from "./post"
import author from "./author"
import blockContent from "./blockContent"
import category from "./category"
import company from "./company"
import home from "./pages/home"

const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, category, company, home],
}

export default schema
