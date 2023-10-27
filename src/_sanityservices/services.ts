import { client } from "../../sanity/lib/client";
// import {
// 	createClient,
// 	createImageUrlBuilder,
// 	createPortableTextComponent,
// 	createPreviewSubscriptionHook,
// 	createCurrentUserHook,
// } from "next-sanity";

import { urlForImage } from "../../sanity/lib/image";

export const getAllServices = async () => {
	const query = `
        *[_type == "pages"]{
            "services": services[]->{
                title,
                slug,
                seo,
                "service": pageService->{
                    title,
                    subtitle,
                    slug,
                    tagline,
                    mainImage,
                    sections[]{
                        title,
                        description,
                        id,
                        features,
                        image
                    }
                }
            }
        }
    `;

	const pagesData = await client.fetch(query);
	// Flatten the services array from all pages documents
	const services = pagesData.flatMap((page: any) => page.services);

	return services;
};

export const getMainPages = async () => {
	const query = `
        *[_type == "pages"]{
            "mainPages": main[]->{
                title,
                slug,
                seo,
            }
        }
    `;

	const pagesData = await client.fetch(query);

	// Flatten the services array from all pages documents
	const services = pagesData.flatMap((page: any) => page.mainPages);

	return services;
};

export async function getAllRedirects() {
	const query = `
          *[_type == "redirects"]{
              from,
              to
          }
      `;

	const redirectsData = await client.fetch(query);

	return redirectsData;
}

export const getArticlePage = async () => {
	const query = `
        *[_type == "pages"]{
            "mainPages": main[]->{
                title,
                slug,
                seo,
            }
        }
    `;

	const pagesData = await client.fetch(query);

	// Filter out pages where none of the mainPages have a slug of "articles"
	const articlePage = pagesData[0].mainPages.filter(
		(page: any) => page.slug.current === "articles"
	);

	return articlePage;
};

export const getAllArticles = async () => {
	const query = `
        *[_type == "posts"]{
            title,
            featured,
            date,
            slug,
            image,
            summary,
            categories[]->{
                _id,
                title
            },
            blocks[] {
                ...,
                text[]{
                    ...,
                    markDefs[]{
                    ...,
                    _type == "link" => {
                        "url": @.url,
                        "isButton": @.isButton,
                        "styles": @.styles{style, isLarge, isBlock},
                        "page":@.page->{"type": _type, "slug": slug.current}
                    }
                    },
                    _type == "figure" => {
                    ${imageMeta}
                    },
                },
                asset->{ // For figures
                    _id,
                    url
                },
                _type == "button" => {
                    // Add any button fields you might want
                }
            },
            seo,
            order
        }
    `;

	const articles = await client.fetch(query);
	return articles;
};

export const imageMeta = `
alt,
asset,
crop,
customRatio,
hotspot,
"id": asset->assetId,
"type": asset->mimeType,
"aspectRatio": asset->metadata.dimensions.aspectRatio,
"lqip": asset->metadata.lqip
`;

export const ptContent = `
 ...,
 markDefs[]{
   ...,
   _type == "link" => {
     "url": @.url,
     "isButton": @.isButton,
     "styles": @.styles{style, isLarge, isBlock},
     "page":@.page->{"type": _type, "slug": slug.current}
   }
 },
 _type == "figure" => {
  ${imageMeta}
  },
`;

const blocks = `
_type == 'textBlock' => {
  _type,
  _key,
  isLarge,
  isCentered,
  isNarrow,
  text[] {
    ${ptContent}
  }
},
_type == 'articleBlock' => {
  _type,
  _key,

  text[] {
    ${ptContent}
  }
},
`;

export const blocksSchema = `
  ${blocks}
  _type == 'globalBlockBlock' => {
    _type,
    _key,
    "blocks": globalBlock->blocks[]{
      "type": _type,
      ${blocks}
    }
  }
`;

export const getArticleContent = async () => {
	const query = `
        *[_type == "post" && slug.current == $slug && wasDeleted != true && isDraft != true] | order(_updatedAt desc)[0]{
        _id,
        title,
        date,
        summary[]{
            ${ptContent}
        },
        blocks[]{
            ${blocksSchema}
        },
        slug,
        background,
        image {
            ${imageMeta}
        },
        seo,
        _createdAt,
        _updatedAt,
        }
        `;

	const pagesData = await client.fetch(query);

	// Filter out pages where none of the mainPages have a slug of "articles"
	const articlePage = pagesData[0].mainPages.filter(
		(page: any) => page.slug.current === "articles"
	);

	return articlePage;
};

const config = {
	/**
	 * Find your project ID and dataset in `sanity.json` in your studio project.
	 * These are considered “public”, but you can use environment variables
	 * if you want differ between local dev and production.
	 *
	 * https://nextjs.org/docs/basic-features/environment-variables
	 **/
	dataset: process.env.SANITY_PROJECT_DATASET,
	projectId: process.env.SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === "production",
	apiVersion: "2021-03-25",
	ignoreBrowserTokenWarning: true,
	/**
	 * Set useCdn to `false` if your application require the freshest possible
	 * data always (potentially slightly slower and a bit more expensive).
	 * Authenticated request (like preview) will always bypass the CDN
	 **/
};

export function buildSrc(image: any, { width, height, format, quality }: any) {
	// let imgSrc = imageBuilder.image(image)

	// console.log(`Build image: ${image}, Width: ${width}, Height: ${height}, Format: ${format}, Quality: ${quality}, `, image)

	let imgSrc = urlForImage(image);

	if (width) {
		imgSrc = imgSrc.width(Math.round(width));
	}

	if (height) {
		imgSrc = imgSrc.height(Math.round(height));
	}

	if (format) {
		imgSrc = imgSrc.format(format);
	}

	if (quality) {
		imgSrc = imgSrc.quality(quality);
	}

	return imgSrc.fit("max").auto("format");
}

export function buildSrcSet(image, { srcSizes, aspect, format, quality }) {
	const sizes = srcSizes.map((width) => {
		let imgSrc = buildSrc(image, {
			...{ width },
			height: aspect && Math.round(width * aspect) / 100,
			...{ format },
			...{ quality },
		});

		if (format) {
			imgSrc = imgSrc.format(format);
		}

		return `${imgSrc} ${width}w`;
	});

	return sizes.join(",");
}

export function buildSizes(layout: string) {
	switch (layout) {
		case "fill":
			// Modify this to fit your design requirements
			return "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw";
		case "responsive":
			// You can add more cases for other layouts or additional conditions
			return "(max-width: 640px) 100vw, 80vw";
		default:
			// For "intrinsic" and "fixed" or other cases
			return "100vw";
	}
}
// export const PortableTextComponent = createPortableTextComponent({
// 	...config,
// 	// Serializers passed to @sanity/block-content-to-react
// 	// (https://github.com/sanity-io/block-content-to-react)
// 	serializers: {
// 		types: {
// 			code: (props) => (
// 				<pre data-language={props.node.language}>
// 					<code>{props.node.code}</code>
// 				</pre>
// 			),
// 			figure: ({ node }) =>
// 				(node.asset && (
// 					<div className="mx-auto my-12 overflow-hidden transform translate-x-0 rounded sm:max-w-3xl">
// 						<Photo
// 							photo={node}
// 							srcsetSizes={[400, 1800, 2200]}
// 							sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
// 							width={2200}
// 						/>
// 					</div>
// 				)) ||
// 				null,
// 			button: ({ node }) =>
// 				(node && (
// 					<div className="flex justify-center mx-auto my-12 sm:max-w-3xl">
// 						<Button
// 							href={node?.href || "/"}
// 							openInNewWindow={node.newWindow}
// 							isWide
// 							variant="primary"
// 						>
// 							{node.label}
// 						</Button>
// 					</div>
// 				)) ||
// 				null,
// 			youtube: ({ node }) => {
// 				const { url } = node;

// 				const id = getYouTubeId(url);

// 				if (!id) {
// 					return null;
// 				}
// 				return (
// 					<div className="mx-auto my-12 overflow-hidden rounded sm:max-w-3xl video-container">
// 						<iframe
// 							allowFullScreen="1"
// 							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 							title="YouTube video player"
// 							src={`https://www.youtube.com/embed/${id}?enablejsapi=1&amp;widgetid=5`}
// 							id="widget6"
// 							width="100%"
// 							height="100%"
// 							frameBorder="0"
// 						></iframe>
// 					</div>
// 				);
// 			},
// 			embedBlock: ({ node }) =>
// 				(node?.code && (
// 					<EmbedBlock
// 						code={node?.code}
// 						isNarrow={node.isNarrow}
// 						isCentered={node.isCentered}
// 					/>
// 					// <pre>{ JSON.stringify(node, null, 2) }</pre>
// 				)) ||
// 				null,
// 		},
// 	},
// });

// export const PortableText = ({ className, blocks, ...props }) => {
// 	if (blocks.length > 1) {
// 		return (
// 			<PortableTextComponent className={className} blocks={blocks} {...props} />
// 		);
// 	} else {
// 		return (
// 			<div className={className}>
// 				<PortableTextComponent blocks={blocks} {...props} />
// 			</div>
// 		);
// 	}
// };

// export function ProseableText({ className, blocks = [], ...props }) {
// 	// Group together standard `_type === "block"`  blocks
// 	// eg <p>, <li>, etc – and separate out everyone else
// 	const blockGroups = useMemo(
// 		() =>
// 			blocks?.reduce(
// 				(acc, item) => {
// 					const lastIdx = acc.length - 1;

// 					if (
// 						// We don't have items in this group yet
// 						acc[lastIdx].length === 0 ||
// 						// The last group has the same `type`
// 						acc[lastIdx][0]._type === item._type
// 					) {
// 						acc[lastIdx].push(item);
// 					} else {
// 						// Time to create a new group, because the `type` is different compared to last group
// 						acc.push([item]);
// 					}

// 					return acc;
// 				},
// 				[[]]
// 			),
// 		[blocks]
// 	);

// 	if (!blockGroups?.length) return null;

// 	return blockGroups.map((group) =>
// 		group[0]._type === "block" ? (
// 			<div key={group[0]._key} className={className} {...props}>
// 				<PortableTextComponent blocks={group} />
// 			</div>
// 		) : (
// 			<PortableTextComponent key={group[0]._key} blocks={group} />
// 		)
// 	);
// }

// export function toPlainText(blocks = []) {
// 	return (
// 		blocks
// 			// loop through each block
// 			.map((block) => {
// 				// if it's not a text block with children,
// 				// return nothing
// 				if (block._type !== "block" || !block.children) {
// 					return "";
// 				}
// 				// loop through the children spans, and join the
// 				// text strings
// 				return block.children.map((child) => child.text).join("");
// 			})
// 			// join the paragraphs leaving split by two linebreaks
// 			.join("\n\n")
// 	);
// }
