import { PageData, Image, ProyectoPageAttributes } from "./projects/strapi";
export interface Meta {
  pagination: PaginationMeta;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Cliente {
  name: string;
  esNegritas: boolean;
}

export interface ClienteData {
  id: number;
  attributes: {
    data: Cliente[];
  };
}

export interface Destacado {
  proyectos: Proyecto[];
}

export interface DestacadoData {
  id: number;
  attributes: {
    proyectos: {
      data: Proyecto[];
    };
  };
}

export interface Proyecto {
  id: number;
  attributes: ProyectoPageAttributes
}

type Template = ClienteData | DestacadoData;

export interface StrapiResponse<T extends Template> {
  data: T;
  meta: Meta;
}
