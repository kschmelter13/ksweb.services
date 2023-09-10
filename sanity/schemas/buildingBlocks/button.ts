// import { BiPointer } from "react-icons/bi";
// import { defineType, defineField } from "sanity";

// const buttonBlock = defineType({
// 	type: "object",
// 	name: "buttonBlock",
// 	title: "Button(s)",
// 	icon: BiPointer,
// 	fields: [
// 		defineField({
// 			name: "heading",
// 			type: "string",
// 			title: "Heading",
// 		}),
// 		defineField({
// 			title: "Layout",
// 			name: "layout",
// 			type: "string",
// 			initialValue: "full",
// 			options: {
// 				list: [
// 					{ title: "Full", value: "full" },
// 					{ title: "Medium", value: "medium" },
// 				],
// 				// layout: 'radio'
// 			},
// 		}),
// 		defineField({
// 			name: "buttons",
// 			type: "array",
// 			title: "Buttons",
// 			of: [{ type: "button" }],
// 		}),
// 	],
// 	preview: {
// 		select: {
// 			heading: "heading",
// 		},
// 		prepare({ heading }) {
// 			return {
// 				title: `Buttons${heading ? `: ${heading}` : ""}`,
// 				subtitle: "Button block",
// 			};
// 		},
// 	},
// });

// export default buttonBlock;
