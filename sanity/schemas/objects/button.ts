import { defineType, defineField } from "sanity";
import { IoUnlinkOutline } from "react-icons/io5";

const labelField = defineField({
	title: "Label",
	name: "label",
	type: "string",
});

const hrefField = defineField({
	title: "URL",
	name: "href",
	type: "url",
	validation: (Rule) =>
		Rule.uri({
			allowRelative: true,
			scheme: ["https", "http", "mailto", "tel"],
		}),
});

const newWindowField = defineField({
	title: "Open in new window?",
	name: "newWindow",
	type: "boolean",
	initialValue: false,
});

export default defineType({
	title: "Button",
	name: "button",
	type: "object",
	icon: IoUnlinkOutline,
	fields: [labelField, hrefField, newWindowField],
});
