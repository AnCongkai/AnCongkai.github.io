export type LinkItem = {
  label: string;
  url: string;
};
export type BioItem = {
  [key: string]: string;
};
export type NewsItem = {
  date: string;
  content: string;
  url?: string;
};
export type PublicationsItem = {
  year: number;
  journal: string;
  title: string;
  authors: string;
  url?: string;
  img?: string;
};
