import type { Schema, Attribute } from '@strapi/strapi';

export interface TestingAccordianValues extends Schema.Component {
  collectionName: 'components_testing_accordian_values';
  info: {
    displayName: 'AccordianValues';
    icon: 'cube';
    description: '';
  };
  attributes: {
    handle: Attribute.String;
    handleContent: Attribute.Blocks;
  };
}

export interface TestingComponentTest extends Schema.Component {
  collectionName: 'components_testing_component_tests';
  info: {
    displayName: 'Component Test';
    icon: 'bell';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    accordianValues: Attribute.Component<'testing.accordian-values', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'testing.accordian-values': TestingAccordianValues;
      'testing.component-test': TestingComponentTest;
    }
  }
}
