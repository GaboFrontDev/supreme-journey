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

type Template = ClienteData;

export interface StrapiResponse<T extends Template> {
  data: T;
  meta: Meta;
}
