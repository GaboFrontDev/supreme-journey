import { Button } from '@/components/Button';
import { HeroSection } from '@/containers/hero-section';
import { ParagraphContentSection } from '@/containers/paragraph-content-section';

export const STRAPI_COMPONENTS_MAP = {
  'home.hero': HeroSection,
  'text.paragraph': ParagraphContentSection,
  'shared.button': Button,
};
