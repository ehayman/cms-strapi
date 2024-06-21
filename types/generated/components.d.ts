import type { Schema, Attribute } from '@strapi/strapi';

export interface FaqFaqQuestion extends Schema.Component {
  collectionName: 'components_faq_faq_questions';
  info: {
    displayName: 'FAQ Question';
    icon: 'question';
  };
  attributes: {
    Question: Attribute.String;
    FAQAnswer: Attribute.Blocks;
  };
}

export interface FaqFaqSection extends Schema.Component {
  collectionName: 'components_faq_faq_sections';
  info: {
    displayName: 'FAQ Section';
    icon: 'question';
  };
  attributes: {
    SectionName: Attribute.String;
    FAQQuestion: Attribute.Component<'faq.faq-question', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'faq.faq-question': FaqFaqQuestion;
      'faq.faq-section': FaqFaqSection;
    }
  }
}
