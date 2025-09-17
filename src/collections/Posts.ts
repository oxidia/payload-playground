import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  folders: true,
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    group: 'Content',
    useAsTitle: 'name',
  },
  versions: {
    drafts: { autosave: false, schedulePublish: false },
    maxPerDoc: 0,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
}
