import { defineField, defineType } from "sanity";

export default defineType({
	name: "services",
	title: "Services",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Collection Name",
			type: "string",
			description: "Name of this services collection",
		}),
		defineField({
			name: "servicesList",
			title: "List of Services",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "service" }], // Use reference type here
				},
			],
			description: "The services included in this collection",
		}),
	],

	preview: {
		select: {
			title: "title",
			subtitle: "servicesList.length",
			media: "servicesList[0].mainImage",
		},
		prepare(selection) {
			const { title, subtitle, media } = selection;
			return {
				title: title,
				subtitle: `${subtitle} services`,
				media: media,
			};
		},
	},
});
