import type { Article } from "./article-types";

const article: Article = {
  slug: "ibm-warns-about-ai-dangers",
  title: "IBM warns about the dangers of AI",
  category: "Risks of AI",
  image: "/img/ibm.jpg",
  summary:
    "Powerful AI tools can create real benefits, but reliability, security, privacy, and oversight remain essential concerns.",
  readTime: "6 min read",
  content: [
    {
      type: "paragraph",
      text: "AI systems are being introduced into decisions and workflows that affect people. Their output can be useful, but it can also be incomplete, confidently wrong, or shaped by data that does not represent the people affected.",
    },
    {
      type: "paragraph",
      text: "Organizations need to understand where a model is being used, what information it can access, and who is responsible for checking its work. Security testing and monitoring should continue after a system is launched.",
    },
    {
      type: "paragraph",
      text: "The goal should not be to reject every AI tool. It should be to match each tool to an appropriate task, make its limits visible, and keep consequential decisions accountable to people.",
    },
  ],
};

export default article;
