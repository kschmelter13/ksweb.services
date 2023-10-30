import { IoUnlinkOutline } from "react-icons/io5";

export default {
	title: "Button",
	name: "button",
	type: "object",
	icon: IoUnlinkOutline,
	fields: [
		{
			title: "Label",
			name: "label",
			type: "string",
		},
		{
			title: "URL",
			name: "href",
			type: "url",
			validation: (Rule: any) =>
				Rule.uri({
					allowRelative: true,
					scheme: ["https", "http", "mailto", "tel"],
				}),
		},
		{
			title: "Open in new window?",
			name: "newWindow",
			type: "boolean",
			initialValue: false,
		},
	],
};
