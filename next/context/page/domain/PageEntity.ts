import { Metadata } from 'next';
import { StrapiMediaEntity } from '../../shared/domain/StrapiMediaEntity';

interface Component<T> {
  id: string;
  __component: T;
  slug: string;
  title: string;
}


interface Hero extends Component<'home.hero'> {
  title: string;
  media: StrapiMediaEntity;
}

export interface Paragraph extends Component<'text.paragraph'> {
  content: string;
}

export interface Button extends Component<'shared.button'> {
  content: string;
  className: string;
  title: string;
  primary: boolean;
}

/**
 * PageSection is the main entity that represents a page section.
 * It represents the different components that can be used to build a page.
 * It's used to build the page dynamically.
 */
type PageSection =
  | Hero
  | Paragraph
  | Button;


/**
 * PageEntity is the main entity that represents a page.
 * It contains the slug, title, sections, locale, and metadata.
 */
interface PageEntity {
  slug: string;
  title : string;
  sections: PageSection[];
  locale: string;
  metadata: Metadata;
}

export { type PageEntity, type PageSection, type Hero };
