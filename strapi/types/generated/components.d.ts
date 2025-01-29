import type { Schema, Struct } from '@strapi/strapi';

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'shared.button', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    className: Schema.Attribute.Text;
    content: Schema.Attribute.String;
    primary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    title: Schema.Attribute.String;
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
      'shared.button': SharedButton;
      'text.paragraph': TextParagraph;
    }
  }
}
