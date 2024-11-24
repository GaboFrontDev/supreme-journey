import { Metadata } from 'next';
import { StrapiMediaEntity } from '../../shared/domain/StrapiMediaEntity';

interface Component<T> {
  id: string;
  __component: T;
  currentLocale: string;
}

interface Media {
  data: StrapiMediaEntity;
}
interface MediaArray {
  data: StrapiMediaEntity[];
}

interface Hero extends Component<'single-page.landing-hero'> {
  title: string;
  subtitle: string;
  heroButtons: Button[];
  landingImage: Media;
}

export interface Photos extends Component<'single-page.photos'> {
  values: MediaArray;
}

export interface Magazines extends Component<'single-page.magazines'> {
  images: MediaArray;
}

interface Button {
  Text: string;
  Link: string;
  Primary: boolean;
}

interface FAQ extends Component<'single-page.faq'> {
  title: String;
  faqItems: FAQItem[];
}

interface FAQItem {
  title: string;
  content: string;
}

export interface Paragraph extends Component<'single-page.paragraph'> {
  buttons: Button[];
  images: MediaArray;
  description: string;
  title: string;
}

export interface Review extends Component<'single-page.reviews'> {
  title: string;
  slug: string;
  items: ReviewEntry[];
}

export interface IBlogArticles
  extends Component<'aura-photo-components.blog-articles'> {
  title: string;
  subtitle: string;
}

interface ReviewEntry {
  userName: string;
  reviewContent: string;
}

interface ContactDetails {
  Title: string;
  Content: string;
}

interface Title {
  HeadingText: string;
  HeadingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export interface FormSection extends Component<'page-sections.form-section'> {
  Title: Title;
  SubTitle: string;
  ContactTitle: Title;
  ContactDetails: {
    Title: string;
    Content: string;
  }[];
  formRules: FormRules;
}

export interface FormRules {
  countryHidden: boolean;
  countryHiddenDefaultOption: string;
}

type PageSection =
  | Hero
  | Magazines
  | FAQ
  | Paragraph
  | Review
  | FormSection
  | Photos
  | IBlogArticles;

interface PageEntity {
  slug: string;
  Title: string;
  PageSections: PageSection[];
  locale: string;
  metadata: Metadata;
}

export { type PageEntity, type PageSection, type FAQ, type Hero };
