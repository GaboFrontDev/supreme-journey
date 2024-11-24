import qs from "qs";

const section = "PageSections";

const PageStructure = {
  LandingHero: ["video", "heroButtons"].map((str) => `${section}.${str}`),
  Magazines: ["images"].map((str) => `${section}.${str}`),
  FAQ: ["faqItems", "Title"].map((str) => `${section}.${str}`),
  FormSection: ["ContactDetails", "Title", "ContactTitle"].map(
    (str) => `${section}.${str}`
  ),
  Paragraph: ["buttons", "images"].map((str) => `${section}.${str}`),
  Reviews: ["items", "avatar"].map((str) => `${section}.${str}`),
  Photos: ["values"].map((str) => `${section}.${str}`),
};

const PopulateParams = [
  "landing-hero",
  ...PageStructure.LandingHero,
  "magazines",
  ...PageStructure.Magazines,
  "FAQSection",
  ...PageStructure.FAQ,
  "FormSection",
  ...PageStructure.FormSection,
  "Paragraph",
  ...PageStructure.Paragraph,
  "reviews",
  ...PageStructure.Reviews,
  "photos",
  ...PageStructure.Photos,
];

export const PopulateParmsStr = qs.stringify({
  populate: PopulateParams,
});
