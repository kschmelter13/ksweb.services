import { defineType, defineField } from "sanity";

export default defineType({
	name: "simplePortableText",
	type: "array",
	title: "Simple Portable Text",
	of: [
		defineField({
			name: "block", // This is assumed based on your provided schema.
			type: "block",
			title: "Block",
			styles: [],
			lists: [],
			marks: {
				decorators: [
					{ title: "Strong", value: "strong" },
					{ title: "Emphasis", value: "em" },
					{ title: "Code", value: "code" },
				],
				// annotations: [{ type: "link" }, { type: "internalLink" }],
			},
		}),
	],
});
