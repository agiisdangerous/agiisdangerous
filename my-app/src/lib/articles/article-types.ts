export type ArticleBlock =
  | {
      type: "heading1" | "heading2" | "paragraph";
      text: string;
    }
  | {
      type: "quote";
      text: string;
      attribution?: string;
    };

export type ArticleReference = {
  title: string;
  authors?: string;
  publication?: string;
  date?: string;
  url?: string;
};

export type Article = {
  slug: string;
  title: string;
  category: "Risks of AI" | "Job Loss" | "Data Centers";
  summary: string;
  image: string;
  readTime: string;
  content: ArticleBlock[];
  references?: ArticleReference[];
};
