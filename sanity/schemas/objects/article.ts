import { IoDocumentTextOutline } from "react-icons/io5";
import { defineType, defineField } from "sanity";

export default defineType({
	name: "articleBlock",
	type: "object",
	title: "Article",
	icon: IoDocumentTextOutline,
	fields: [
		defineField({
			name: "text",
			type: "portableText",
			title: "Text",
		}),
	],
	preview: {
		select: {
			text: "text",
		},
		prepare(value) {
			const block = (value.text || []).find(
				(block: any) => block._type === "block"
			);
			return {
				title: block
					? block.children
							.filter((child: any) => child._type === "span")
							.map((span: any) => span.text)
							.join("")
					: "No title",
				subtitle: `Article block`,
			};
		},
	},
});
