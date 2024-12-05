import qs from "qs";

const section = "sections";

const PageStructure = {
  Hero: ["media"].map((str) => `${section}.${str}`),
  Paragraph: [""].map((str) => `${section}.paragraph.${str}`),
};

const PopulateParams = [
  "sections.hero",
  ...PageStructure.Hero,
  "sections.paragraph",
  ...PageStructure.Paragraph,
];

export const PopulateParmsStr = qs.stringify({
  populate: PopulateParams,
});
