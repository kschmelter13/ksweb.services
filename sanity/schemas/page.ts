// import { IoDocumentOutline } from "react-icons/io5";

// export default {
//   name: "page",
//   type: "document",
//   title: "Page",
//   icon: IoDocumentOutline,
//   groups: [
//     {
//       name: "general",
//       title: "General",
//       default: true,
//     },
//     {
//       name: "blocks",
//       title: "Blocks",
//     },
//     {
//       name: "seo",
//       title: "SEO",
//     },
//   ],
//   fields: [
//     {
//       name: "title",
//       type: "string",
//       title: "Title",
//       validation: (Rule) => Rule.required(),
//       group: "general",
//     },
//     {
//       name: "slug",
//       title: "Slug",
//       type: "slug",
//       options: {
//         source: "title",
//         maxLength: 96,
//       },
//       validation: (Rule) => Rule.required(),
//       group: "general",
//     },
//     {
//       title: "Image",
//       name: "image",
//       description: "This is used for card previews",
//       type: "figure",
//       validation: (Rule) => Rule.required(),
//       group: "general",
//     },
//     {
//       name: "summary",
//       type: "simplePortableText",
//       title: "Summary",
//       description: "This is used for card previews",
//       validation: (Rule) => Rule.required().max(200),
//       group: "general",
//     },
//     {
//       name: "blocks",
//       type: "array",
//       title: "Blocks",
//       of: [
//         { type: "textBlock" },
//         { type: "buttonBlock" },

//         { type: "heroBlock" },
//         { type: "testimonialCarouselBlock" },
//         { type: "formBlock" },
//         { type: "productComparisonBlock" },
//         { type: "embedBlock" },
//         { type: "globalBlockBlock" },
//         { type: "columnsBlock" },
//       ],
//       group: "blocks",
//     },
//     {
//       title: "SEO / Share Settings",
//       name: "seo",
//       type: "seo",
//       group: "seo",
//     },
//   ],

//   preview: {
//     select: {
//       title: "title",
//       slug: "slug",
//     },
//     prepare({ title = "Untitled", slug = {} }) {
//       const path = `/${slug.current}`;
//       return {
//         title,
//         subtitle: slug.current ? path : "(missing slug)",
//       };
//     },
//   },
// };
