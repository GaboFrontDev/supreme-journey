import { StrapiAttributesEntity } from './StrapiAttributesEntity';

export type  StrapiEntryEntity<T> = T & StrapiAttributesEntity & {
  id: number | string;
}
