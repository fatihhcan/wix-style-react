import React from 'react';
import { storiesOf } from '@storybook/react';
import AreaChart from '../AreaChart';

const commonProps = {
  // use for repeated props across the tests (e.g. {buttonText: 'example'})
};

const tests = [
  {
    describe: 'sanity', // prop name (e.g. size)
    its: [
      {
        it: 'default', // prop variation (e.g. small)
        props: {
          // the simulation (e.g. {size: "small"})
        },
      },
    ],
  },
];

tests.forEach(({ describe, its }) => {
  its.forEach(({ it, props }) => {
    storiesOf(
      `${AreaChart.displayName}${describe ? '/' + describe : ''}`,
      module,
    ).add(it, () => <AreaChart {...commonProps} {...props} />);
  });
});