import { IoTextOutline } from "react-icons/io5";
import { defineType, defineField } from "sanity";

const textBlock = defineType({
	type: "object",
	name: "textBlock",
	title: "Text",
	icon: IoTextOutline,
	fields: [
		defineField({
			name: "text",
			type: "portableText",
			title: "Text",
		}),
		defineField({
			name: "isLarge",
			type: "boolean",
			title: "Large type?",
			description: "Increases the overall type size. Good for headings.",
			initialValue: false,
		}),
		defineField({
			name: "isCentered",
			type: "boolean",
			title: "Align text center?",
			initialValue: false,
		}),
		defineField({
			name: "isNarrow",
			type: "boolean",
			title: "Narrow column?",
			description:
				"Limits the column width. Can be better for line length legibility.",
			initialValue: false,
		}),
	],
	preview: {
		select: {
			text: "text",
			isLarge: "isLarge",
			isCentered: "isCentered",
		},
		prepare(value) {
			// Refs: https://www.sanity.io/docs/previewing-block-content
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
				subtitle: `Text block${value.isLarge ? " (Large)" : ""}${
					value.isCentered ? " (Centered)" : ""
				}`,
			};
		},
	},
});

export default textBlock;
