import { StrapiEntryEntity } from './StrapiEntity';
import { StrapiMetaEntity } from './StrapiMetaEntity';

export interface StrapiSingleItemResponseEntity<T> {
  data: StrapiEntryEntity<T>;
  meta: StrapiMetaEntity;
}
