import { defineCollection, z } from 'astro:content';

const gallery = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.string(),
        cover: z.string().optional(),   // path under /public, e.g. "/gallery/japan/cover.jpg"
        photos: z.array(z.string()).default([]), // paths under /public
    }),
});

export const collections = { gallery };
