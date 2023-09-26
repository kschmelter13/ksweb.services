import { defineType, defineField } from "sanity";

export default defineType({
	name: "page",
	type: "document",
	title: "Page",
	groups: [
		{
			name: "general",
			title: "General",
			default: true,
		},
		{
			name: "blocks",
			title: "Blocks",
		},
		{
			name: "seo",
			title: "SEO",
		},
	],
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			validation: (Rule) => Rule.required(),
			group: "general",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			validation: (Rule) => Rule.required(),
			group: "general",
		}),
		defineField({
			name: "pageService",
			type: "reference",
			to: [{ type: "service" }], // Referencing the service type
			title: "Service",
			group: "blocks",
		}),
		defineField({
			title: "SEO / Share Settings",
			name: "seo",
			type: "seo",
			group: "seo",
		}),
	],
	preview: {
		select: {
			title: "title",
			slug: "slug",
		},
		prepare({ title = "Untitled", slug = {} }) {
			const path = `/${slug.current}`;
			return {
				title,
			};
		},
	},
});
