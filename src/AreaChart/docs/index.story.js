import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import AreaChart from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: AreaChart,
  componentPath: '..',

  componentProps: {
    data: [
      {
        value: 5675,
        label: 'April',
      },
      {
        value: 1170,
        label: 'May',
      },
      {
        value: 4678,
        label: '15/9',
      },
      {
        value: 2030,
        label: '22/9',
      },
      {
        value: 3000,
        label: '26/9',
      },
      {
        value: 3000,
        label: '2/10',
      },
      {
        value: 5932,
        label: '9/10',
      },
      {
        value: 1256,
        label: '16/10',
      },
      {
        value: 2324,
        label: '23/10',
      },
      {
        value: 234,
        label: '30/10',
      },
      {
        value: 223,
        label: '6/11',
      },
      {
        value: 992,
        label: '13/11',
      },
      {
        value: 3684,
        label: '20/11',
      },
    ],
    tooltipContent: (item, index) => [
      `${item.label}`,
      `${item.value}$ from your orders`,
    ],
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${AreaChart.displayName}/`,
      component: (
        <AreaChart
          data={[
            {
              value: 5697,
              label: '12/9',
            },
            {
              value: 1170,
              label: '13/9',
            },
            {
              value: 4678,
              label: '14/9',
            },
            {
              value: 2030,
              label: '15/9',
            },
            {
              value: 3000,
              label: '16/9',
            },
          ]}
          tooltipContent={(item, index) => {
            return [`${item.label}`, `${item.value}$ from your orders`];
          }}
        />
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: `<AreaChart  data={[
            {
              value: 1170,
              label: "12/9",
            },
            {
              value: 2030,
              label: "11/8",
            },
            {
              value: 3000,
              label: "hi",
            },
          ]}
          tooltipContent={(item, index) =>  index}
          />`,
          }),

          code({
            title: 'Full Interactive Preview',
            description: 'A non compact version of same code example as above',
            source: `<AreaChart  data={[
            {
              value: 1170,
              label: "12/9",
            },
            {
              value: 2030,
              label: "11/8",
            },
            {
              value: 3000,
              label: "hi",
            },
            
          ]}           
          tooltipContent={(item, index) =>  index}
          />`,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
