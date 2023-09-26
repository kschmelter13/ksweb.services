import { IoDocumentOutline } from "react-icons/io5";
import { defineType, defineField } from "sanity";

export default defineType({
	name: "pages",
	title: "Pages",
	type: "document",
	icon: IoDocumentOutline,
	fields: [
		defineField({
			name: "main",
			title: "Main",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "page" }],
				},
			],
		}),
		defineField({
			name: "services",
			title: "Services",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "page" }],
				},
			],
		}),
		defineField({
			name: "articles",
			title: "Articles",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "page" }],
				},
			],
		}),
	],
});
