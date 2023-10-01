import { defineType, defineField } from "sanity";

export default defineType({
	name: "redirects",
	title: "Redirects",
	type: "document",
	fields: [
		defineField({
			name: "from",
			type: "string",
			title: "From URL",
		}),
		defineField({
			name: "to",
			type: "string",
			title: "To URL",
		}),
	],
});
