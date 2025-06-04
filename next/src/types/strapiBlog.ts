export type ComponentType = 'shared.text-text' | 'shared.bigimage' | 'shared.image-image';

export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
  isUrlSigned: boolean;
}

export interface ImageFormats {
  large: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  thumbnail: ImageFormat;
}

export interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  isUrlSigned: boolean;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface Image {
  data: ImageData;
}

export interface CenteredImageComponent {
  id: number;
  __component: 'shared.centered-image';
  image: Image;
  alt: string;
}

export interface TextTextComponent {
  id: number;
  __component: 'shared.text-text';
  leftText: string;
  rightText: string;
}

export interface BigImageComponent {
  id: number;
  __component: 'shared.bigimage';
  alt: string;
  imagen: Image;
}

export interface ImageImageComponent {
  id: number;
  __component: 'shared.image-image';
  leftImage?: Image;
  rightImage?: Image;
}

export interface TextImageComponent {
  id: number;
  __component: 'shared.text-image';
  text: string;
  image: Image;
}

export interface ImageTextComponent {
  id: number;
  __component: 'shared.image-text';
  text?: string;
  image?: Image;
}

export interface MarkdownComponent {
  id: number;
  __component: 'shared.markdown';
  content: string;
}

export type SectionComponent = 
  | TextTextComponent 
  | BigImageComponent 
  | ImageImageComponent 
  | TextImageComponent 
  | ImageTextComponent 
  | MarkdownComponent
  | CenteredImageComponent;


export interface ArticuloRelacionadoAttributes {
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  secciones: SectionComponent[];
  miniatura: Image;
  nombre: string;
  autor: string;
}

export interface ArticuloRelacionadoData {
  id: number;
  attributes: ArticuloRelacionadoAttributes;
}

export interface PageAttributes {
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  secciones: SectionComponent[];
  relacionados: {
    data: ArticuloRelacionadoData[]
  };
  miniatura: Image;
  nombre: string;
  autor: string;
  preview: string;
}

export interface PageData {
  id: number;
  attributes: PageAttributes;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: PaginationMeta;
}

export interface StrapiResponse {
  data: PageData[];
  meta: Meta;
} 