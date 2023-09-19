import { defineField, defineType } from "sanity";

export default defineType({
	name: "service",
	title: "Service",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Service Name",
			type: "string",
			description: "Name of the service being offered",
		}),
		defineField({
			name: "subtitle",
			title: "Subtitle/Description",
			type: "text",
			description: "Short description of the service",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: (Rule) => Rule.required(),
			description: "Slug for the route of the service",
		}),
		defineField({
			name: "tagline",
			title: "Tagline",
			type: "text",
			description: "A tagline of the service",
		}),
		defineField({
			name: "mainImage",
			title: "Service Image",
			type: "image",
			options: {
				hotspot: true,
			},
			description: "Main image that represents the service",
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative Text",
					description: "Alt text for accessibility and SEO",
				},
			],
		}),
		defineField({
			name: "sections",
			title: "Sections",
			type: "array",
			description: "Sections detailing different aspects of the service",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "title",
							title: "Section Title",
							type: "string",
							description: "Title of the section",
						},
						{
							name: "id",
							title: "Section ID",
							type: "string",
							description:
								"ID to reference this section, used for scroll-to functionality",
						},
						{
							name: "description",
							title: "Description",
							type: "text",
							description: "Detailed description of the section",
						},
						{
							name: "features",
							title: "Features",
							type: "array",
							of: [{ type: "string" }],
							description: "List of features or attributes of this section",
						},
						{
							name: "image",
							title: "Section Image",
							type: "image",
							options: {
								hotspot: true,
							},
							description: "Image associated with this section",
							fields: [
								{
									name: "alt",
									type: "string",
									title: "Alternative Text",
								},
							],
						},
					],
				},
			],
		}),
	],

	preview: {
		select: {
			title: "title",
			subtitle: "subtitle",
			media: "mainImage",
		},
	},
});
