import { HeroSection } from '@/containers/hero-section';
import { ScrollSection } from '@/containers/slider-section';
import { PartnersSection } from '@/containers/partners-section';
import { ParagraphContentSection } from '@/containers/paragraph-content-section';
import { TestimonialsSection } from '@/containers/testimonials-section';
import { FaqSection } from '@/containers/faq-section';
import { ContactUsSection } from '@/containers/contact-us-section';
import { BlogArticles } from '@/containers/blog-list';

export const STRAPI_COMPONENTS_MAP = {
  'single-page.landing-hero': HeroSection,
  'single-page.photos': ScrollSection,
  'single-page.magazines': PartnersSection,
  'single-page.paragraph': ParagraphContentSection,
  'single-page.reviews': TestimonialsSection,
  'single-page.faq': FaqSection,
  'page-sections.form-section': ContactUsSection,
  'aura-photo-components.blog-articles': BlogArticles,
};
