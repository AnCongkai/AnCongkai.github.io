import type { BioItem, LinkItem, NewsItem, PublicationsItem } from "./types";
import { z } from "zod";
import config from "../../config.json";

const configSchema = z.object({
  name: z.string(),
  search_name: z.string(),
  sub_title: z.string(),
  search_sub_title: z.string(),
  links: z.array(
    z.object({
      label: z.string(),
      url: z.string(),
    }),
  ),
  bio_text: z.array(z.string()),
  bio_items: z.array(z.record(z.string())),
  news: z.array(
    z.object({
      date: z.string(),
      content: z.string(),
      url: z.string().url().optional(),
    }),
  ),
  publications: z.array(
    z.object({
      year: z.number().int(),
      journal: z.string(),
      title: z.string(),
      authors: z.string(),
      url: z.string().url().optional(),
      thumbnail: z.string().optional(),
      width: z.string().optional(),
      paper_level: z.string().optional(),
      paper_intro: z.string().optional(),
    }),
  ),
});

const typedSchema = configSchema.parse(config);

export const NAME = typedSchema.name;
export const SEARCH_NAME = typedSchema.search_name;
export const SUB_TITLE = typedSchema.sub_title;
export const SEARCH_SUB_TITLE = typedSchema.search_sub_title;
export const LINKS: LinkItem[] = typedSchema.links;
export const BIO_TEXT = typedSchema.bio_text;
export const BIO_ITEMS: BioItem[] = typedSchema.bio_items;
export const NEWS: NewsItem[] = typedSchema.news;
export const PUBLICATIONS: PublicationsItem[] = typedSchema.publications;
