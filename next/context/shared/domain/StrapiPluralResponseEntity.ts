import { StrapiEntryEntity } from './StrapiEntity';
import { StrapiMetaEntity } from './StrapiMetaEntity';

export interface StrapiPluralResponseEntity<T> {
  data: (StrapiEntryEntity & T)[];
  meta: StrapiMetaEntity;
}
