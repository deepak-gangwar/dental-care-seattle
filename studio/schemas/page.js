export default {
  name: 'pages',
  title: 'Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'navigationOrder',
      title: 'Navigation Order',
      type: 'number',
    },
    {
      name: 'pageSections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          name: 'pageSection',
          title: 'Page Section',
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Section Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Hero', value: 'hero' },
                  // { title: 'Services', value: 'services' },
                  // { title: 'Team', value: 'team' },
                  // add more section types as needed
                ],
              },
            },
            {
              name: 'mainHeading',
              title: 'Main Heading',
              type: 'string',
            },
            {
              name: 'subHeading',
              title: 'Sub Heading',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            // add additional fields specific to each section type as needed
          ],
        },
      ],
    },
  ],
};
