// @ts-nocheck
import { useMemo } from "react";
import { PortableText as PortableTextComponentBase } from "@portabletext/react";

import Photo from "./photo";
import Button from "./button";
const serializers = {
	types: {
		code: (props) => (
			// Add syntax highlighting here
			<pre data-language={props.value.language}>
				<code>{props.value.code}</code>
			</pre>
		),
		figure: ({ value }) =>
			value?.asset ? (
				<div className="mx-auto my-12 overflow-hidden transform translate-x-0 rounded sm:max-w-3xl">
					<Photo
						photo={value}
						alt={value.caption || "Blog image"} // Added alt attribute
						srcSizes={[400, 1800, 2200]}
						sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
						width={2200}
						height={1200}
						loading="lazy" // Lazy load images
					/>
				</div>
			) : null,
		button: ({ value }) =>
			value ? (
				<div className="flex justify-center mx-auto my-12 sm:max-w-3xl">
					<Button
						href={value?.href || "/"}
						openInNewWindow={value.newWindow}
						variant="primary"
						size="wide"
						className="hover:bg-blue-500 active:bg-blue-700" // Added hover and active states
					>
						{value.label}
					</Button>
				</div>
			) : null,
	},
	list: (props) => <ul className="list-disc pl-5">{props.children}</ul>,
	listItem: (props) => <li>{props.children}</li>,
	marks: {
		em: ({ children }) => (
			<em className="text-gray-600 font-semibold">{children}</em>
		),
		link: ({ value, children }) => {
			const target = (value?.href || "").startsWith("http")
				? "_blank"
				: undefined;
			return (
				<a
					href={value?.href}
					target={target}
					rel={target === "_blank" ? "noopener noreferrer" : undefined} // Updated rel attribute
					className="text-blue-600 hover:underline" // Added hover effect
				>
					{children}
				</a>
			);
		},
	},
	block: {
		// Headings
		h1: ({ children }) => (
			<h1 className="text-4xl mb-5 mt-8 font-normal leading-tight">
				{children}
			</h1>
		),
		h2: ({ children }) => (
			<h2 className="text-3xl mb-4 mt-16 font-normal leading-tight">
				{children}
			</h2>
		),
		h3: ({ children }) => (
			<h3 className="text-2xl mb-3 mt-6 font-normal leading-tight">
				{children}
			</h3>
		),
		h4: ({ children }) => (
			<h4 className="text-xl mb-2 mt-5 font-normal leading-snug">{children}</h4>
		),
		h5: ({ children }) => (
			<h5 className="text-lg mb-2 mt-4 font-normal">{children}</h5>
		),
		h6: ({ children }) => (
			<h6 className="text-base mb-1 mt-3 font-normal">{children}</h6>
		),

		// Paragraph and Lists
		normal: ({ children }) => (
			<p className="text-base my-4 leading-relaxed">{children}</p>
		),

		// Other styles
		blockquote: ({ children }) => (
			<blockquote className="border-l-4 border-purple-500 pl-4 italic bg-purple-50 mb-4 mt-6">
				{children}
			</blockquote>
		),
		customHeading: ({ children }) => (
			<h2 className="text-lg text-purple-700 font-medium mt-5 mb-3">
				{children}
			</h2>
		),
	},
};

export const PortableTextComponent = (props) => (
	<PortableTextComponentBase components={serializers} {...props} />
);

type PortableTextProps = {
	className?: string;
	value: any[];
	[key: string]: any;
};

export const PortableText = ({
	className,
	value = [],
	...props
}: PortableTextProps) => {
	if (value?.length > 1) {
		return (
			<PortableTextComponent className={className} value={value} {...props} />
		);
	} else {
		return (
			<div className={className}>
				<PortableTextComponent value={value} {...props} />
			</div>
		);
	}
};

export function ProseableText({ className, value = [], ...props }): any {
	// Group together standard `_type === "block"`  blocks
	// eg <p>, <li>, etc – and separate out everyone else
	const blockGroups: any[] = useMemo(
		() =>
			value?.reduce(
				(acc: any[], item: any) => {
					const lastIdx = acc.length - 1;

					if (
						// We don't have items in this group yet
						acc[lastIdx].length === 0 ||
						// The last group has the same `type`
						acc[lastIdx][0]._type === item?._type
					) {
						acc[lastIdx].push(item);
					} else {
						// Time to create a new group, because the `type` is different compared to last group
						acc.push([item]);
					}

					return acc;
				},
				[[]]
			),
		[value]
	);

	console.log("groups", blockGroups);

	if (!blockGroups?.length) return null;
	return blockGroups.map((group: any) =>
		group[0]?._type === "block" ? (
			<div key={group[0]?._key} className={className} {...props}>
				<PortableTextComponent value={group} />
			</div>
		) : (
			<PortableTextComponent key={group[0]?._key} value={group} />
		)
	);
}

export function toPlainText(value: any[] = []) {
	return (
		value
			// loop through each block
			.map((block: any) => {
				// if it's not a text block with children,
				// return nothing
				if (block._type !== "block" || !block.children) {
					return "";
				}
				// loop through the children spans, and join the
				// text strings
				return block?.children?.map((child) => child.text).join("");
			})
			// join the paragraphs leaving split by two linebreaks
			.join("\n\n")
	);
}
