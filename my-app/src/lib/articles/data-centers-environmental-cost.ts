import type { Article } from "./article-types";

const article: Article = {
  slug: "data-centers-environmental-cost",
  title: "Data Centers are terrible for the environment",
  category: "Data Centers",
  summary:
    "The physical infrastructure behind AI has an environmental footprint that deserves to be measured and reduced.",
  image: "/img/photo-1584169417032-d34e8d805e8b.avif",
  readTime: "7 min read",
  paragraphs: [
    "AI services run on physical infrastructure. Data centers require electricity, cooling, networking equipment, land, and materials, and their environmental impact depends on where and how they are built and operated.",
    "A useful assessment looks beyond a single energy figure. It considers the source of electricity, water use, hardware manufacturing and replacement, cooling methods, and whether facilities add pressure to local grids or communities.",
    "More transparent reporting, efficient models and chips, cleaner electricity, responsible water management, and longer hardware lifetimes can all help reduce the footprint.",
  ],
};

export default article;
