export type HomeStat = { value: string; label: string; fixedWidth?: boolean };
export type HomeOffice = { title: string; country: string };
export type HomeService = { id?: string; title: string; content: string; image: { url: string } | string };

export type HomeHero = {
  title1?: string;
  title2?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  image?: string;
};

export type HomeTexts = {
  servicesTitle?: string;
  collaborationTitle?: string;
  collaborationDescription?: string;
  projectsTitle?: string;
  finalCtaTitle?: string;
  ctaStudyLabel?: string;
  ctaStudyHref?: string;
  ctaProjectsLabel?: string;
  ctaProjectsHref?: string;
  finalCtaLabel?: string;
  finalCtaHref?: string;
};

export type HomePageContent = {
  heroIntro?: boolean;
  hero?: HomeHero;
  stats?: HomeStat[];
  oficinas?: HomeOffice[];
  services?: HomeService[]; // fallback naming
  servicios?: HomeService[];
  texts?: HomeTexts; // fallback naming
  textos?: HomeTexts;
};
