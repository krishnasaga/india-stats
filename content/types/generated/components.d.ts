import type { Schema, Attribute } from '@strapi/strapi';

export interface ChartBarChart extends Schema.Component {
  collectionName: 'components_chart_bar_charts';
  info: {
    displayName: 'BarChart';
  };
  attributes: {
    x: Attribute.JSON;
    y: Attribute.JSON;
  };
}

export interface ChartSingleStat extends Schema.Component {
  collectionName: 'components_chart_single_stats';
  info: {
    displayName: 'SingleStat';
    description: '';
  };
  attributes: {
    value: Attribute.Float;
    unit: Attribute.String;
    prefix: Attribute.String;
    diff: Attribute.Float;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'chart.bar-chart': ChartBarChart;
      'chart.single-stat': ChartSingleStat;
    }
  }
}
