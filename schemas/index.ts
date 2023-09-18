import { type SchemaTypeDefinition } from "sanity"
import post from "./post"
import author from "./author"
import blockContent from "./blockContent"
import abogados from "./categories/abogados"
import contadores from "./categories/contadores"
import medicos from "./categories/medicos"
import programadores from "./categories/programadores"
import category from "./category"
import home from "./pages/home"

const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, blockContent, category, abogados, medicos, contadores, programadores, home],
}

export default schema
