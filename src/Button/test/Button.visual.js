import React from 'react';
import AddChannel from 'wix-ui-icons-common/AddChannel';
import Button from '../Button';
import { SIZES, SKINS } from '../constants';
import { visualize, story, snap } from 'storybook-snapper';

import {
  getSkinBackground,
  renderButtonBlock,
} from '../../utils/ButtonHelpers';
import Box from '../../Box';

const defaultProps = {
  children: 'Button',
};

const skins = Object.values(SKINS).reduce((output, skin) => {
  return [...output, { skin, background: getSkinBackground(skin) }];
}, []);

const sizes = Object.values(SIZES);

const blockOfTests = [
  {
    it: 'Primary Skins',
    render: () => renderButtonBlock({ Component: Button, skins }),
  },
  {
    it: 'Secondary Skins',
    render: () =>
      renderButtonBlock({
        Component: Button,
        props: { priority: 'secondary' },
        skins,
      }),
  },
];

visualize('Button', () => {
  blockOfTests.forEach(({ it, render }) => {
    snap(it, render);
  });

  story('Size and Affix', () => {
    snap('Size and Affix', () => (
      <Box direction="vertical">
        {sizes.map(size => (
          <Box margin={1}>
            <Button {...defaultProps} size={size} />
            <Box marginLeft={1}>
              <Button
                {...defaultProps}
                size={size}
                suffixIcon={<AddChannel />}
                prefixIcon={<AddChannel />}
              />
            </Box>
          </Box>
        ))}
      </Box>
    ));
  });
});
