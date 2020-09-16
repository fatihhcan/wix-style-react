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
        value: 1170,
        label: '12/9',
      },
      {
        value: 2030,
        label: '11/8',
      },
      {
        value: 3000,
        label: 'hi',
      },
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
              value: 1170,
              label: '12/9',
            },
            {
              value: 2030,
              label: '11/8',
            },
            {
              value: 3000,
              label: 'hi',
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
