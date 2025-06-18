import { DestacadoData } from "../strapi";

export type ComponentType =
  | 'shared.text-text'
  | 'shared.bigimage'
  | 'shared.image-image';

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

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: PaginationMeta;
}

export interface PageData {
  id: number;
  attributes: ProyectoPageAttributes;
}
type Template = CategoriaProyectoData | PageData | DestacadoData;

export interface StrapiResponse<T extends Template> {
  data: T[];
  meta: Meta;
}
export interface StrapiResponseSingle<T extends Template> {
  data: T;
  meta: Meta;
}

export type SectionComponent =
  | TextTextComponent
  | BigImageComponent
  | ImageImageComponent
  | TextImageComponent
  | ImageTextComponent
  | MarkdownComponent
  | CenteredImageComponent;

export interface AutorAttributes {
  nombre: string;
  foto: Image;
  titulo: string;
}

export interface AutorData {
  id: number;
  attributes: AutorAttributes;
}

export interface CategoriaProyectoAttributes {
  nombre: string;
  portada: Image;
  texto: string;
  proyectos_ares: {
    data: PageData[];
  };
  concepto: string;
  orden: number;
}

export interface CategoriaProyectoData {
  id: number;
  attributes: CategoriaProyectoAttributes;
}

export interface ProyectoPageAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  slug: string;
  secciones: SectionComponent[];
  proyectos_relacionados: {
    data: PageData[];
  };
  miniatura: Image;
  nombre: string;
  lideres: {
    data: AutorData[];
  };
  equipo: string[];
  premios: string[];
  ficha: {
    year: string;
    ubicacion: string;
    tipo: string;
    landArea: string;
    builtArea: string;
    cliente: string;
  };
  concepto: string;
  texto: string;
  categoria_proyecto: {
    data: CategoriaProyectoData[];
  };
}
