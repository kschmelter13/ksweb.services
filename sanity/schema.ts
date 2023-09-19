import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import service from "./schemas/service";
import services from "./schemas/services";
// import buttonBlock from "./schemas/buildingBlocks/button";
// import textBlock from "./schemas/buildingBlocks/text";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [post, author, category, blockContent, service, services],
};
