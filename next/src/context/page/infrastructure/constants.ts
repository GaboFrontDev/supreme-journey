import qs from "qs";

const section = "sections";
export class AuraImaging {
  static readonly LandingHero = ["heroButtons", "landingImage", "heroDeviceCarousel", "heroDeviceCarousel.photo", "heroFolderCarousel", "heroFolderCarousel.photo", "smallFolder", "smallFolder.image" ].map((str) => `${section}.${str}`);
  static readonly ProductsSlide = ["slideItem", "slideItem.media"].map((str) => `${section}.${str}`);
  static readonly WhatItIsSection = ["cards", "cards.image"].map((str) => `${section}.${str}`);
  static readonly WhatClientsSay = ["reviews", "reviews.avatar"].map((str) => `sections.${str}`);
  static readonly FAQ = ["Title", "FaqItems"].map((str) => `${section}.${str}`);
  static readonly FormSection = ["ContactDetails", "Title", "ContactTitle"].map((str) => `${section}.${str}`);
  static readonly SimpleHero = ["heroButtons"].map((str) => `${section}.${str}`);
  static readonly Magazines = ["images"].map((str) => `${section}.${str}`);
  static readonly Packages = ["packages", "packages.image"].map((str) => `${section}.${str}`);
  static readonly LatestArticles = [].map((str) => `${section}.${str}`);
  static readonly HowItWorksCarousel = ["steps", "steps.image"].map((str) => `${section}.${str}`);
  static readonly Metadata: string[] = ['metadata'].map((str) => `${str}`);

  static readonly PopulateParams: string[] = [
    "landing-hero", ...AuraImaging.LandingHero,
    "products-slide", ...AuraImaging.ProductsSlide,
    "what-it-is", ...AuraImaging.WhatItIsSection,
    "what-client-say", ...AuraImaging.WhatClientsSay,
    "faq", ...AuraImaging.FAQ,
    "form-section", ...AuraImaging.FormSection,
    "simple-hero", ...AuraImaging.SimpleHero,
    "packages", ...AuraImaging.Packages,
    "magazines", ...AuraImaging.Magazines,
    "latest-articles", ...AuraImaging.LatestArticles,
    "hiw-carousel", ...AuraImaging.HowItWorksCarousel,
    "metadata", ...AuraImaging.Metadata,
  ];

  static readonly PopulateParmsStr: string = qs.stringify({
    populate: AuraImaging.PopulateParams
  });
}
