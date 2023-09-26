import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import service from "./schemas/service";
import seo from "./schemas/objects/seo";
import page from "./schemas/page";
import pages from "./schemas/pages";
// import buttonBlock from "./schemas/buildingBlocks/button";
// import textBlock from "./schemas/buildingBlocks/text";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, author, category, blockContent, service, seo, page, pages],
};
