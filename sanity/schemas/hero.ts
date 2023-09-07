// import { defineField, defineType } from "sanity";

// const heroImage = defineType({
//   name: 'heroImage',
//   title: 'Hero Image',
//   type: 'image',
//   options: {
//     hotspot: true,
//   },
//   fields: [
//     defineField({
//       name: 'alt',
//       title: 'Alternative Text',
//       type: 'string',
//       description: 'Description of the image for accessibility',
//       options: {
//         isHighlighted: true
//       }
//     })
//   ]
// });

// const heroButton = defineType({
//   name: 'heroButton',
//   title: 'Hero Button',
//   type: 'object',
//   fields: [
//     defineField({
//       name: 'text',
//       type: 'string',
//       title: 'Button Text'
//     }),
//     defineField({
//       name: 'link',
//       type: 'url',
//       title: 'Button Link'
//     }),
//     defineField({
//       name: 'style',
//       type: 'string',
//       title: 'Button Style',
//       description: 'Optional styling for the button',
//       options: {
//         list: ['primary', 'secondary', 'outlined'],
//         layout: 'dropdown'
//       }
//     })
//   ]
// });

// const heroSection = defineType({
//   name: 'heroSection',
//   title: 'Hero Section',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'variant',
//       title: 'Layout Variant',
//       type: 'string',
//       options: {
//         list: [
//           {title: 'Centered', value: 'centered'},
//           {title: 'Title & Text Left, Image Right', value: 'title-text-left'}
//         ],
//         layout: 'radio'
//       }
//     }),
//     defineField({
//       name: 'title',
//       title: 'Hero Title',
//       type: 'string'
//     }),
//     defineField({
//       name: 'subtitle',
//       title: 'Hero Subtitle',
//       type: 'string',
//       description: 'Optional subtitle for the hero section'
//     }),
//     defineField({
//       name: 'body',
//       title: 'Hero Text',
//       type: 'text'
//     }),
//     defineField({
//       name: 'image',
//       title: 'Hero Image',
//       type: 'reference',
//       to: [heroImage],
//       hidden: ({ document }) => document.variant === 'centered'
//     }),
//     defineField({
//       name: 'buttons',
//       title: 'Hero Buttons',
//       type: 'array',
//       of: [heroButton],
//       description: 'Optional buttons for the hero section'
//     })
//   ]
// });

// export { heroImage, heroButton, heroSection };
