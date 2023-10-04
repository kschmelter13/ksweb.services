import { defineType, defineField } from "sanity";

const crops = [
	{ title: "Original", value: 0 },
	{ title: "1 : 1 (square)", value: 1 },
	{ title: "2 : 1 (half)", value: 2 },
	{ title: "5 : 7", value: 0.7142857143 },
	{ title: "4 : 6", value: 0.6666666667 },
	{ title: "16 : 9", value: 1.7777777778 },
];

const customRatioField = defineField({
	title: "Display Size (aspect ratio)",
	name: "customRatio",
	type: "number",
	options: {
		list: crops,
	},
	validation: (Rule) => {
		return Rule.custom((field: any, context: { parent?: any }) =>
			"asset" in context.parent && field === undefined ? "Required!" : true
		);
	},
});

const altField = defineField({
	title: "Alternative text",
	name: "alt",
	type: "string",
	description: "Important for SEO and accessiblity.",

	validation: (Rule) => {
		return Rule.custom((field: any, context: { parent?: any }) =>
			"asset" in context.parent && field === undefined ? "Required!" : true
		);
	},
});

export default defineType({
	title: "Image",
	name: "figure",
	type: "image",
	options: {
		hotspot: true,
	},
	fields: [customRatioField, altField],
	preview: {
		select: {
			asset: "asset",
			alt: "asset.alt",
			customAlt: "alt",
			customRatio: "customRatio",
		},
		prepare({ alt, customAlt, customRatio, asset }) {
			const crop = crops.find((crop) => crop.value === customRatio);
			return {
				title: customAlt ?? alt ?? "(alt text missing)",
				subtitle: crop?.title,
				media: asset,
			};
		},
	},
});
