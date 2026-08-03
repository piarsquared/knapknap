// idk much about typescript, this was in fact an absolute pain to figure out
// comments are for me later

// name is content.config.ts, similar to __init__.py but for typescript obviously

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // deprecated? i think not.
// allows you to load multiple local files at once essentially

const posts = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.{md,mdx}", // goodness this is a mouthfull
    // for future me, this basically just recursively matches subdirectories and finds md (markdown) files
    base: "./src/content/posts", // self explanatory, this is the "base" 
  }),
  schema: z.object({ // this uses zod by the way, a validation library
    title: z.string(),
    //date: z.string(),
    date: z.coerce.date(), // tries to convert to date if not already
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { posts };