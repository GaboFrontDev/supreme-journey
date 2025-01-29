import { HeroSection } from '@/containers/HeroSection';
import { PartnersSection } from '@/containers/PartnersSection';
import { HowItWorksSection } from '@/containers/HowItWorksSection';
import { PackagesSection } from '@/containers/PackagesSection';
import { FeedbackSection } from '@/containers/FeedbackSection';
import { FaqSection } from '@/containers/FaqSection';
import { ContactUsSection } from '@/containers/ContactUsSection';
import { BlogLatestArticles } from '@/containers/BlogLatestArticles';
import { FeaturesSection } from '@/containers/FeaturesSection';
import { SimpleHeroSection } from '@/containers/SimpleHeroSection';
import { HiwCarouselSection } from '@/containers/HiwCarouselSection';
import { BlogArticlesList } from '@/containers/BlogArticlesList';
import { ArticleSearchSection } from '@/containers/ArticleSearchSection';
import { TextContentSection } from '@/containers/TextContentSection';

export const STRAPI_COMPONENTS_MAP = {
  'aura-imaging.landing-hero': HeroSection,
  'aura-imaging.magazines': PartnersSection,
  'aura-imaging.what-it-is': HowItWorksSection,
  'aura-imaging.packages': PackagesSection,
  'aura-imaging.latest-articles': BlogLatestArticles,
  'aura-imaging.hiw-carousel': HiwCarouselSection,
  'aura-imaging.products-slide': FeaturesSection,
  'aura-imaging.simple-hero': SimpleHeroSection,
  'aura-imaging.search-articles': ArticleSearchSection,
  'page-sections.faq': FaqSection,
  'page-sections.form-section': ContactUsSection,
  'aura-photo-components.blog-articles': BlogArticlesList,
  'aura-photo-components.what-client-say': FeedbackSection,
  'page-sections.text-content-section': TextContentSection,
};
