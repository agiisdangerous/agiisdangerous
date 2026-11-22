import type { Article } from "./article-types";

const article: Article = {
  slug: "ibm-warns-about-ai-dangers",
  title: "IBM warns about the dangers of AI",
  category: "Risks of AI",
  image: "/img/ibm.jpg",
  summary:
    "IBM warns about the dangers of AI such as bias, security risks, job loss, and threats to the existence of humanity itself.",
  readTime: "12 min read",
  content: [
    {
      type: "paragraph",
      text: "Global technology company IBM has identified some of the core risks related to the development of AI.",
    },
    {
      type: "paragraph",
      text: "IBM states that the same systems that could be used to discover drugs, mitigate climate change, and protect wildlife could also threaten security, jobs, and even human existence itself.",
    },
    {
      type: "paragraph",
      text: "The goal should not be to reject every AI tool. It should be to match each tool to an appropriate task, make its limits visible, and keep consequential decisions accountable to people.",
    },
    {
      type: "heading1",
      text: "Bias",
    },
    {
      type: "paragraph",
      text: "The first danger of AI highlighted by IBM is bias.",
    },
    {
      type: "paragraph",
      text: "According to IBM, AI inadvertently becomes biased when presented with biased training data.",
    },
    {
      type: "paragraph",
      text: "Recent developments show AI bias remains a persistent issue. A June 2026 report by Stanford found that when AI is used in hiring, researchers found bias against black and asian candidates. In July 2025, Massachusetts Attorney General Andrea Campbell announced that her office had reached a $2.5 million settlement with student loan company Earnest Operations because the company's AI lending practices discriminated against black, hispanic, and non-citizen applicants. An April 2025 study in Scientific Reports found Stable Diffusion showed bias across six races, two genders, and 32 professions. For example, it depicted nearly all middle eastern men as bearded, brown-skinned, and wearing traditional attire. Finally, a report from Meta's Oversight Board found that AI models from leading labs including Anthropic and OpenAI were much more likely to refuse to criticize governments known for restricting free speech, such as China and Saudi Arabia.",
    },
    {
      type: "quote",
      attribution: "Dan Jurafsky",
      text: "It was surprising that AI systems that use game-based assessment to rank people were still biased against black and asian applicants.",
    },
    {
      type: "paragraph",
      text: "IBM’s suggestions to mitigate bias in AI such as including representative datasets and establishing an AI governance strategy, are insufficient. A complete strategy would define strict red lines for when a system must be rejected or shut down rather than tuned.",
    },
    {
      type: "paragraph",
      text: "In fact, a July 2025 study in AI & Society states that the total elimination of bias in AI systems is an unachievable goal.",
    },
    {
      type: "heading1",
      text: "Security and Privacy",
    },
    {
      type: "paragraph",
      text: "The next danger of AI highlighted by IBM is cybersecurity threats.",
    },
    {
      type: "paragraph",
      text: "IBM states that AI tools can be used to clone voices, generate fake identities, and send convincing phishing emails. Additionally, only 24% of generative AI initiatives by organizations are secured. This exposes data and AI models to breaches.",
    },
    {
      type: "paragraph",
      text: "AI cybersecurity threats go beyond the use of AI by humans. AI technology has now been found acting on its own to hack systems, such as when a swarm of OpenAI agents conspired together to hack Hugging Face. ",
    },
    {
      type: "paragraph",
      text: "IBM suggests solutions such as outlining an AI safety and security strategy and investing in cyber response training to mitigate the cybersecurity threat of AI. However, while the solutions are a solid foundation for securing internal AI deployments, they are not enough to fully mitigate the broader threat landscape.",
    },
    {
      type: "paragraph",
      text: "Another issue with AI is data privacy. The data being obtained to train AI is often obtained without users’ consent and could contain personally identifiable information (PII). IBM suggests informing consumers about data collection practices for AI systems, considering computer-generated synthetic data, and giving users a choice to opt out of data collection. Once again, this is not enough to fully mitigate the data privacy risks associated with AI, leaving major legal, technical, and operational vulnerabilities unaddressed.",
    },
    {
      type: "heading1",
      text: "Environmental Impact",
    },
    {
      type: "paragraph",
      text: "Even though advanced AI could help mitigate the effects of climate change, it is also important to note that it carries a significant carbon footprint, according to IBM.",
    },
    {
      type: "paragraph",
      text: "AI being used by hundreds of millions of daily users creates a massive need for electricity and freshwater to dissipate heat.",
    },
    {
      type: "paragraph",
      text: "To reduce the carbon footprint of AI, IBM suggests things like powering data centers with renewable energy. Once again, IBM's solutions are not enough to truly reduce AI's environmental footprint. According to the International Energy Agency, coal is currently the largest source of electricity for data centers, and natural gas is the third-largest source behind renewable energy. Additionally, Jevons paradox must be considered: when technological improvements that make a resource more efficient to use increase rather than decrease its total consumption. Global electricity generation to supply data centers is projected to grow from 460 TWh in 2024 to 1300 TWh in 2035, according to the IEA.",
    },
    {
      type: "quote",
      attribution: "Noman Bashir",
      text: "The demand for new data centers cannot be met in a sustainable way. The pace at which companies are building new data centers means the bulk of the electricity to power them must come from fossil fuel-based power plants.",
    },
    {
      type: "heading1",
      text: "Job Loss",
    },
    {
      type: "paragraph",
      text: "IBM warns AI is expected to disrupt the job market.",
    },
    {
      type: "paragraph",
      text: "AI will drive growth in roles such as machine learning, robotics, and digital transformation. However, IBM warns AI will lead to the decline of clerical, secretarial, data entry, and customer service roles. ",
    },
    {
      type: "paragraph",
      text: "The reality is, as AI becomes superintelligent, it will lead to the end of more than just the jobs outlined by IBM. As AI becomes more and more advanced, it could also lead to the replacement of software engineers, database administrators, software testers, financial analysts, accountants, bank tellers, content writers, SEO analysts, market research analysts, graphic designers, HR recruiters, and legal assistants. When paired with robotics, advanced AI could lead to the replacement of cashiers, warehouse workers, truck and delivery drivers, and assembly line workers. Even the job of building a better AI system will likely become compromised once AI reaches the level of recursive self-improvement.",
    },
    {
      type: "paragraph",
      text: "Elon Musk, CEO of xAI, goes as far as to predict that eventually no jobs will be needed, as AI will be able to do everything.",
    },
    {
      type: "heading1",
      text: "Existential Risks",
    },
    {
      type: "paragraph",
      text: "Most alarmingly, IBM warns of existential risks related to the development of AI. IBM highlights warnings comparing the risk of AI to that of pandemics and nuclear weapons. ",
    },
    {
      type: "paragraph",
      text: "IBM's strategies for mitigating the risk of extinction are highly insufficient. IBM's recommended measures say nothing about a pause on the development of AI until we have solved issues like the alignment problem. Instead, they advise staying up to date on AI, remaining open to experimenting with the latest AI tools, and strengthening AI teams' skills. ",
    },
    {
      type: "paragraph",
      text: "By framing the existential risk as something enterprises can navigate simply by staying current, it normalizes an unrestrained race toward increasingly autonomous systems before anyone knows how to reliably control them. It would be unwise to suggest managing the danger of nuclear proliferation by encouraging every organization to experiment with the latest enrichment technology, just as it is unwise to encourage experimentation with the latest AI tools to handle its existential risk.",
    },
    {
      type: "paragraph",
      text: "When AI goes wrong and makes damaging decisions, another issue arises: lack of accountability. Related to this is a lack of explainability and transparency. IBM describes AI as a black box whose internal decision-making mechanisms remain a mystery even to AI researchers who work closely with the technology. ",
    },
    {
      type: "paragraph",
      text: "This lack of transparency is an existential risk. Without the ability to inspect a model's internal reasoning, researchers cannot distinguish between a model that is genuinely aligned and one engaging in deceptive alignment by suppressing its dangerous behaviors until it gains full autonomy.",
    },
    {
      type: "heading1",
      text: "Misinformation and Manipulation",
    },
    {
      type: "paragraph",
      text: "Finally, IBM highlights AI’s ability to generate misinformation and manipulation as a danger. IBM states AI can be used to create deepfakes, election-related disinformation, and hallucinated facts.",
    },
    {
      type: "paragraph",
      text: "AI misinformation and manipulation have rapidly evolved into large-scale, coordinated efforts. Today, the danger of AI misinformation involves entire networks of fake social media accounts and political attack advertisements from official political party committees.",
    },
    {
      type: "paragraph",
      text: "McGill University's Centre for Media, Technology and Democracy has identified a network of at least 293 TikTok and Instagram accounts that has used deepfakes of real influencers to target Canadians with over 3,000 videos seen 22.1 million times. The network steals real people’s faces and gives them an AI voice, AI-redrawn lips, and a script that is often written by AI. The network used AI to manipulate videos of overwhelmingly white women. For example, they took influencer Ashley Hetherington describing her thoughts about dating as a Christian woman and used it to push Alberta separation and viewpoints about the Canada-US trade war.",
    },
    {
      type: "paragraph",
      text: "The network also pushed misinformation to 5.1 million viewers with an AI-generated video of a “48-hour ultimatum” from Trump. In many of the videos, the network criticizes both the United States and Canada when it comes to the trade war. The network was described as consistently showing a disregard for the truth and frequently adding fabrications to its videos.",
    },
    {
      type: "paragraph",
      text: "None of the network’s videos disclose the fact that they use AI and the account labels say they are located in China.",
    },
    {
      type: "paragraph",
      text: "Another example of misinformation and manipulation comes from the Republican Party's Senate campaign arm, the National Republican Senatorial Committee (NRSC), which featured a deepfake of James Talarico reciting social media posts he made years ago. ",
    },
    {
      type: "paragraph",
      text: 'The words "AI generated" are displayed in an easy-to-miss font in the lower right-hand corner.',
    },
    {
      type: "paragraph",
      text: "On the other side of the aisle, California Governor and rumored 2028 presidential candidate Gavin Newsom has frequently used deepfake videos to attack Trump. ",
    },
    {
      type: "quote",
      attribution: "Daniel Schiff",
      text: "It's harmful for politicians and campaigns to continue normalizing this.",
    },
    {
      type: "heading1",
      text: "Conclusion",
    },
    {
      type: "paragraph",
      text: "What's clear is that AI and the development of AI into AGI remain risky and dangerous.",
    },
    {
      type: "paragraph",
      text: "When one of the top technology companies in the world is warning about the existential risks of AI, it is imperative that we listen.",
    },
  ],
  references: [
    {
      title: "10 AI dangers and risks and how to manage them",
      authors: "Rina Diane Caballar",
      url: "https://www.ibm.com/think/insights/10-ai-dangers-and-risks-and-how-to-manage-them",
    },
    {
      title: "AI hiring tools show racial bias",
      authors: "Stanford Report",
      date: "June 2026",
      url: "https://news.stanford.edu/stories/2026/06/ai-hiring-tools-racial-bias-research?trk=article-ssr-frontend-pulse_little-text-block&",
    },
    {
      title:
        "AG Campbell Announces $2.5 Million Settlement With Student Loan Lender For Unlawful Practices Through AI Use, Other Consumer Protection Violations",
      date: "July 2025",
      url: "https://www.mass.gov/news/ag-campbell-announces-25-million-settlement-with-student-loan-lender-for-unlawful-practices-through-ai-use-other-consumer-protection-violations",
    },
    {
      title:
        "AI-generated faces influence gender stereotypes and racial homogenization",
      authors: "Nouar AlDahoul, Talal Rahwan, and Yasir Zaki",
      publication: "Scientific Reports",
      date: "April 2025",
      url: "https://www.nature.com/articles/s41598-025-99623-3",
    },
    {
      title:
        "Meta Oversight Board finds top AI models less likely to criticize repressive regimes",
      authors: "Reuters",
      date: "July 2026",
      url: "https://www.reuters.com/business/meta-oversight-board-finds-top-ai-models-less-likely-criticize-repressive-2026-07-16/",
    },
    {
      title: "Can AI have a sense of morality?",
      authors: "Donghee Shin",
      date: "July 2025",
      publication: "AI & Society",
      url: "https://link.springer.com/article/10.1007/s00146-025-02476-7",
    },
    {
      title:
        "AI agents are hacking systems without any input from humans. How did we get here?",
      authors: "Loreben Tuquero",
      date: "September 2026",
      url: "https://www.pbs.org/newshour/amp/science/ai-agents-are-hacking-systems-without-any-input-from-humans-how-did-we-get-here",
    },
    {
      title: "Explained: Generative AI's environmental impact",
      authors: "Adam Zewe",
      date: "January 2025",
      url: "http://news.mit.edu/2025/explained-generative-ai-environmental-impact-0117",
    },
    {
      title:
        "Which Jobs Will AI Replace by 2030? Top Careers At Risk and The Skills That Could Protect You",
      authors: "EIMT Editorial Team",
      date: "October 2026",
      url: "https://www.eimt.edu.eu/jobs-ai-will-replace-by-2030/",
    },
    {
      title: "Energy supply for AI",
      authors: "International Energy Agency",
      url: "https://www.iea.org/reports/energy-and-ai/energy-supply-for-ai",
    },
    {
      title:
        "Stolen Faces: An Inauthentic TikTok and Instagram Network Inflaming the U.S.–Canada Trade War",
      authors:
        "Aengus Bridgman, Esli Chan, David Hobson, Sequoia Kim, Mathieu Lavigne, Manon Paquet, Chris Ross, and Ben Steel",
      date: "November 2026",
      url: "https://mediatechdemocracy.com/en/publications/stolen-faces_2026/",
    },
    {
      title: "AI deepfakes blur reality in 2026 US midterm campaigns",
      authors: "Joseph Ax and Helen Coster",
      date: "March 2026",
      url: "https://www.reuters.com/business/media-telecom/ai-deepfakes-blur-reality-2026-us-midterm-campaigns-2026-03-28/",
    },
  ],
};

export default article;
