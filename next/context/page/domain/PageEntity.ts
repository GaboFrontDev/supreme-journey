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


type PageSection =
  | Hero
  | Paragraph;
interface PageEntity {
  slug: string;
  title : string;
  sections: PageSection[];
  locale: string;
  metadata: Metadata;
}

export { type PageEntity, type PageSection, type Hero };
