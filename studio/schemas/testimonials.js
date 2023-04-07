export default {
  name: 'testimonials',
  type: 'document',
  title: 'Testimonials',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      name: 'topReview',
      type: 'object',
      title: 'Top Review',
      description: 'The top review for the testimonials page',
      fields: [
        {
          name: 'review',
          type: 'array',
          title: 'Review',
          of: [{ type: 'block' }],
        },
        {
          name: 'name',
          type: 'string',
          title: 'Top review by -',
        },
      ],
    },
    {
      name: 'reviews',
      type: 'array',
      title: 'Reviews',
      description: 'The list of reviews for the testimonials page',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
              name: 'review',
              type: 'array',
              title: 'Review',
              of: [{ type: 'block' }],
            },
          ],
        },
      ],
    },
    {
      name: 'footnotes',
      type: 'array',
      title: 'Footnotes',
      description: 'This is the paragraphs that appears at the bottom of the reviews page.',
      of: [{ type: 'block' }],
    },
  ]
}
