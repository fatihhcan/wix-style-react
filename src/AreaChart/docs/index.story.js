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
        value: 5677,
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
              label: "12/10",
            },
            {
              value: 1500,
              label: "Nov",
            },
          ]}
          tooltipContent={(item, index) =>  'tooltip ' + item.label}
          />`,
          }),
          example({
            title: 'Collapsed values',
            text:
              'A simple example of collapsed values (hover on a point between some x labels)',
            source: `<AreaChart  data={[
            {
              value: 1170,
              label: "1",
            },
            {
              value: 2030,
              label: "2",
            },
            {
              value: 1500,
              label: "3",
            },
              {
              value: 1170,
              label: "4",
            },
            {
              value: 2030,
              label: "5",
            },
            {
              value: 1500,
              label: "6",
            },
             {
              value: 1170,
              label: "7",
            },
            {
              value: 2030,
              label: "8",
            },
            {
              value: 1500,
              label: "9",
            },
              {
              value: 1170,
              label: "10",
            },
            {
              value: 2030,
              label: "11",
            },
            {
              value: 1500,
              label: "12",
            },
             {
              value: 1170,
              label: "13",
            },
            {
              value: 2030,
              label: "14",
            },
            {
              value: 1500,
              label: "15",
            },
              {
              value: 1170,
              label: "16",
            },
            {
              value: 2030,
              label: "17",
            },
            {
              value: 1500,
              label: "18",
            },
             {
              value: 1500,
              label: "19",
            },
              {
              value: 1170,
              label: "20",
            },
            {
              value: 2030,
              label: "21",
            },
            {
              value: 1500,
              label: "22",
            },
             {
              value: 1500,
              label: "23",
            },
              {
              value: 1170,
              label: "24",
            },
            {
              value: 2030,
              label: "25",
            },
            {
              value: 1500,
              label: "26",
            },
             {
              value: 1170,
              label: "27",
            },
            {
              value: 2030,
              label: "28",
            },
            {
              value: 1500,
              label: "29",
            },
            {
              value: 1170,
              label: "30",
            },
            {
              value: 2030,
              label: "31",
            },
            {
              value: 1500,
              label: "32",
            },
             {
              value: 1500,
              label: "33",
            },
              {
              value: 1170,
              label: "34",
            },
            {
              value: 2030,
              label: "35",
            },
            {
              value: 1500,
              label: "36",
            },
             {
              value: 1170,
              label: "37",
            },
            {
              value: 2030,
              label: "38",
            },
            {
              value: 1500,
              label: "39",
            },
            {
              value: 1170,
              label: "40",
            },
            {
              value: 2030,
              label: "41",
            },
            {
              value: 1500,
              label: "42",
            },
             {
              value: 1500,
              label: "43",
            },
              {
              value: 1170,
              label: "44",
            },
            {
              value: 2030,
              label: "45",
            },
            {
              value: 1500,
              label: "46",
            },
             {
              value: 1170,
              label: "47",
            },
            {
              value: 2030,
              label: "48",
            },
            {
              value: 1500,
              label: "49",
            },
         
          ]}
          tooltipContent={(item, index) =>  'tooltip ' + item.label}
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
              label: "12/10",
            },
            {
              value: 1500,
              label: "Nov",
            },
            
          ]}           
          tooltipContent={(item, index) =>  'tooltip ' + item.label}
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
