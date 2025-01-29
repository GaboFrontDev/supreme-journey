import { StrapiEntryEntity } from '@/context/shared/domain/StrapiEntity';
import { StrapiMediaEntity } from '../../shared/domain/StrapiMediaEntity';
import { ArticleEntity } from '@/context/article/domain/ArticleEntity';
import { Metadata } from 'next';

interface Component<T> {
  id: string;
  __component: T;
  currentLocale: string;
}

export type Button = Component<'shared.button'> & {
  Text: string;
  Link: string;
  Primary: boolean;
}

export type Media = StrapiMediaEntity;
export type MediaArray = StrapiMediaEntity[];
export type MediaArrayEntity = {
  data: StrapiMediaEntity[];
};

export interface SmallFolder {
  title: string;
  image: { data: StrapiMediaEntity };
  Link: string;
}

export interface HeroMediaCarousel {
  id: string;
  photo: { data: StrapiMediaEntity };
  alternativeText: string;
}

export interface HeroFolderCarousel extends HeroMediaCarousel {
  caption: string;
}
export interface Hero extends Component<'aura-imaging.landing-hero'> {
  title: string;
  subTitle: string;
  heroButtons: Button[];
  heroDeviceCarousel: HeroMediaCarousel[];
  heroFolderCarousel: HeroFolderCarousel[];
  smallFolder: SmallFolder;
}

interface ProductSlideItem {
  title: string;
  description: string;
  media: { data: StrapiMediaEntity };
  tag: string;
  buttonText: string;
  buttonLink: string;
}

export interface ProductsSlides
  extends Component<'aura-imaging.products-slide'> {
  slideItem: ProductSlideItem[];
}

interface WhatItIsCard {
  title: string;
  description: string;
  image: { data: StrapiMediaEntity };
  buttonLabel: string;
  buttonUrl: string;
}

export interface WhatItIs extends Component<'aura-imaging.what-it-is'> {
  title: string;
  description: string;
  cards: WhatItIsCard[];
}

interface FAQItem {
  Question: string;
  Answer: string;
}

export interface FAQ extends Component<'page-sections.faq'> {
  Title: StrapiHeading;
  helpTitle: string;
  helpText: string;
  FaqItems: FAQItem[];
}

export interface FormSection extends Component<'page-sections.form-section'> {
  Title?: StrapiHeading;
  Subtitle?: string;
}

export interface WhatClientsSayReviews {
  userName: string;
  reviewContent: string;
  position: string;
  avatar: { data: StrapiMediaEntity };
}

export interface WhatClientsSay
  extends Component<'aura-photo-components.what-client-say'> {
  title: string;
  description: string;
  reviews: WhatClientsSayReviews[];
}

export interface Packages extends Component<'aura-imaging.packages'> {
  title: string;
  description: string;
  packages: PackageItem[];
}

interface PackageItem {
  title: string;
  description: string;
  tagList: string[];
  image: { data: StrapiMediaEntity };
}
interface HowItWorksStep {
  image: { data: StrapiMediaEntity };
  stepTitle: string;
  stepDescription: string;
  textPosition: 'left' | 'right';
}

export interface HowItWorksCarousel
  extends Component<'aura-imaging.hiw-carousel'> {
  steps: HowItWorksStep[];
}

export interface Magazines extends Component<'aura-imaging.magazines'> {
  title: string;
  images: MediaArrayEntity;
}

export interface SimpleHero extends Component<'aura-imaging.simple-hero'> {
  title: string;
  description: string;
  heroButtons: Button[];
}

export interface LatestArticles
  extends Component<'aura-imaging.latest-articles'> {
  title: string;
  description: string;
}

export type StrapiHeading = {
  HeadingText: string;
  HeadingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export interface IBlogArticles
  extends Component<'aura-photo-components.blog-articles'> {
  title: string;
  subtitle: string;
}

export interface ISearchArticles
  extends Component<'aura-imaging.search-articles'> {}

export interface TextContent
  extends Component<'page-sections.text-content-section'> {
  Title: string;
  Content: string;
}

export type PageSection =
  | Hero
  | Magazines
  | WhatItIs
  | Packages
  | WhatClientsSay
  | HowItWorksCarousel
  | FAQ
  | LatestArticles
  | FormSection
  | ProductsSlides
  | SimpleHero
  | IBlogArticles
  | ISearchArticles
  | TextContent;

interface PageEntity {
  slug: string;
  Title: string;
  sections: PageSection[];
  locale: string;
  metadata: Metadata;
}

export { type PageEntity };
