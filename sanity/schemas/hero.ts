// import { defineField, defineType } from "sanity";
// import buttonBlock from "./buildingBlocks/button"; // Ensure you adjust this path
// import textBlock from "./buildingBlocks/text"; // Adjust this path as well

// const alignmentOptions = defineField({
// 	name: "alignment",
// 	type: "string",
// 	title: "Alignment",
// 	options: {
// 		list: [
// 			{ title: "Left", value: "left" },
// 			{ title: "Center", value: "center" },
// 			{ title: "Right", value: "right" },
// 		],
// 		layout: "dropdown",
// 	},
// });

// const heroImage = defineField({
// 	name: "image",
// 	type: "image",
// 	title: "Hero Image",
// 	options: {
// 		hotspot: true,
// 	},
// });

// const heroSection = defineType({
// 	name: "heroSection",
// 	type: "document",
// 	title: "Hero Section",
// 	fields: [
// 		defineField({ name: "header", type: "string", title: "Header" }),
// 		textBlock, // Include the textBlock
// 		buttonBlock, // Include the buttonBlock
// 		heroImage,
// 		defineField({
// 			name: "layout",
// 			type: "string",
// 			title: "Layout Option",
// 			options: {
// 				list: [
// 					{
// 						title: "Text/Button Left, Image Right",
// 						value: "textLeftImageRight",
// 					},
// 					{
// 						title: "Image Left, Text/Button Right",
// 						value: "imageLeftTextRight",
// 					},
// 					{ title: "Stacked", value: "stacked" },
// 				],
// 				layout: "radio",
// 			},
// 		}),
// 		alignmentOptions,
// 	],
// });

// export default heroSection;
