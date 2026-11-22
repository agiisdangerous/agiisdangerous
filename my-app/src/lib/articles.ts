import type { Article } from "./articles/article-types";

import geminiArticle from "./articles/gemini-4-argon-ai-extinction-risk";
import ibmArticle from "./articles/ibm-warns-about-ai-dangers";
import moralValuesArticle from "./articles/ai-has-no-moral-values";

export type { Article } from "./articles/article-types";

export const articles: Article[] = [
  geminiArticle,
  ibmArticle,
  moralValuesArticle,
  // dataCentersArticle,
  // jobsArticle,
];

export const categoryNames = [
  "Risks of AI",
  // "Job Loss",
  // "Data Centers",
] as const;
