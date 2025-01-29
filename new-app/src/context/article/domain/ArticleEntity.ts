import { StrapiMediaEntity } from '@/context/shared/domain/StrapiMediaEntity';

export interface ArticleEntity {
  UserId: string;
  Title: string;
  Content: string;
  PublishDate: string;
  Image: {
    data: StrapiMediaEntity;
  };
  slug: string;
  locale: string;
}
