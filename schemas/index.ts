import { type SchemaTypeDefinition } from "sanity"
import email from "./email"

const schema: { types: SchemaTypeDefinition[] } = {
  types: [email],
}

export default schema
