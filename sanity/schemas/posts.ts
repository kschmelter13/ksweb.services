import { defineType, defineField } from "sanity";
import { IoReaderOutline } from "react-icons/io5";

export default defineType({
	name: "posts",
	type: "document",
	title: "Posts",
	icon: IoReaderOutline,
	initialValue: () => ({
		date: new Date().toISOString(),
	}),
	fields: [
		defineField({
			name: "title",
			type: "string",
			title: "Title",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "featured",
			type: "boolean",
			title: "Featured?",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "date",
			type: "date",
			title: "Date",
			options: {
				dateFormat: "YYYY-MM-DD",
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			type: "slug",
			title: "Slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "image",
			type: "figure",
			title: "Image",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "summary",
			type: "text",
			title: "Summary",
			validation: (Rule) => Rule.required().max(500),
		}),
		defineField({
			name: "categories",
			type: "array",
			title: "Categories",
			of: [{ type: "reference", to: [{ type: "category" }] }],
			options: {
				layout: "tags",
			},
		}),
		defineField({
			name: "blocks",
			type: "array",
			title: "Blocks",
			of: [{ type: "articleBlock" }],
		}),
		defineField({
			name: "seo",
			type: "seo",
			title: "SEO / Share Settings",
		}),
		defineField({
			name: "order",
			type: "number",
			title: "Order",
			hidden: true,
		}),
	],
	orderings: [
		{
			title: "Date (Desc)",
			name: "dateDesc",
			by: [{ field: "date", direction: "desc" }],
		},
		{
			title: "Date (Asc)",
			name: "dateAsc",
			by: [{ field: "date", direction: "asc" }],
		},
		{
			title: "Slug",
			name: "slugDesc",
			by: [{ field: "slug", direction: "desc" }],
		},
	],
	preview: {
		select: {
			title: "title",
			slug: "slug",
			media: "image",
		},
		prepare({ title = "Untitled", slug = {}, media }) {
			const path = `/articles/${slug.current}`;
			return {
				title,
				subtitle: slug.current ? path : "(missing slug)",
				media,
			};
		},
	},
});
