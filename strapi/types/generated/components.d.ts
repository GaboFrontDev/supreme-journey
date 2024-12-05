import type { Schema, Struct } from '@strapi/strapi';

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TextParagraph extends Struct.ComponentSchema {
  collectionName: 'components_text_paragraphs';
  info: {
    description: '';
    displayName: 'paragraph';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.hero': HomeHero;
      'text.paragraph': TextParagraph;
    }
  }
}
