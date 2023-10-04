import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/posts";
import author from "./schemas/author";
import service from "./schemas/service";
import seo from "./schemas/objects/seo";
import page from "./schemas/page";
import pages from "./schemas/pages";
import article from "./schemas/objects/article";
import button from "./schemas/objects/button";
import figure from "./schemas/objects/figure";
import portableText from "./schemas/objects/portableText";
import simplePortableText from "./schemas/objects/simplePortableText";
import redirects from "./schemas/redirects";

// import buttonBlock from "./schemas/buildingBlocks/button";
// import textBlock from "./schemas/buildingBlocks/text";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		post,
		author,
		category,
		blockContent,
		service,
		seo,
		page,
		pages,
		redirects,
		article,
		button,
		figure,
		portableText,
		simplePortableText,
	],
};
