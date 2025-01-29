import type { Attribute, Schema } from '@strapi/strapi';

export interface HomeHero extends Schema.Component {
  collectionName: 'components_home_heroes';
  info: {
    description: '';
    displayName: 'hero';
  };
  attributes: {
    buttons: Attribute.Component<'shared.button', true>;
    description: Attribute.Text & Attribute.Required;
    media: Attribute.Media<'images' | 'files' | 'videos'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    className: Attribute.Text;
    content: Attribute.String;
    primary: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
  };
}

export interface TextParagraph extends Schema.Component {
  collectionName: 'components_text_paragraphs';
  info: {
    description: '';
    displayName: 'paragraph';
  };
  attributes: {
    content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.hero': HomeHero;
      'shared.button': SharedButton;
      'text.paragraph': TextParagraph;
    }
  }
}
