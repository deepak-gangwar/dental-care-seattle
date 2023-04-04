export default {
  name: 'doctor',
  title: 'Doctors',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'This name is used as the page heading'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This name goes on the browser tab.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description for SEO. Not shown on the website.'
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      description: 'Paragraphs related to the doctor come here',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'specialty',
      title: 'Specialty',
      type: 'string',
      description: 'E.g. Orthodontics, Periodontics, etc.',
    },
  ],
};
