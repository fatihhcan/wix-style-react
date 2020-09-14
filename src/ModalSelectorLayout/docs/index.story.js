import React from 'react';

import {
  header,
  tabs,
  tab,
  description,
  playground,
  api,
  testkit,
  importExample,
  divider,
  example as baseExample,
  title,
} from 'wix-storybook-utils/Sections';

import * as examples from './examples';

import allComponents from '../../../stories/utils/allComponents';

import { storySettings } from './storySettings';

import ModalSelectorLayout from '..';
import Text from '../../Text';

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: ModalSelectorLayout,
  componentPath: '..',
  componentProps: {
    dataHook: 'storybook-modal-selector-layout',
    height: '540px',
    onClose: () => {},
    onCancel: () => {},
    itemsPerPage: 4,
    imageSize: 'large',
    withSearch: true,
    searchDebounceMs: 150,

    dataSource: examples.DATA_SOURCE,
  },

  exampleProps: {
    onOk: data => {
      const isArray = Array.isArray(data);
      const view = i => ({ id: i.id, title: i.title, subtitle: i.substitle });

      return JSON.stringify(isArray ? data.map(view) : view(data));
    },

    onCancel: () => 'canceled',

    title: [
      {
        label: 'default title',
        value: ModalSelectorLayout.defaultProps.title,
      },
      {
        label: 'BOLD title',
        value: (
          <Text key={0} weight="bold">
            BOLD title
          </Text>
        ),
      },
    ],

    subtitle: [{ label: 'simple text', value: 'A list of items go below' }],
  },

  sections: [
    header({}),
    tabs([
      tab({
        title: 'Description',
        sections: [
          description(
            ' Modal Selector is a modal pattern that enable the user to select one or multiple elements from a list, as well as the ability to search in the list in order to select a specific option.',
          ),

          importExample("import { AddItem } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Type',
            text: 'single select / Multi-select',
            source: examples.type,
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
