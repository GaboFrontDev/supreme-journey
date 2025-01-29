import qs from "qs";

const section = "sections";

const PageStructure = {
  Hero: ["media"].map((str) => `${section}.${str}`),
  Paragraph: [""].map((str) => `${section}.paragraph.${str}`),
  Button: ["content", "className"].map((str) => `${section}.button.${str}`),
};

const PopulateParams = [
  "sections.hero",
  ...PageStructure.Hero,
  "sections.paragraph",
  ...PageStructure.Paragraph,
  "sections.button",
  ...PageStructure.Button,
];

export const PopulateParmsStr = qs.stringify({
  populate: PopulateParams,
});
