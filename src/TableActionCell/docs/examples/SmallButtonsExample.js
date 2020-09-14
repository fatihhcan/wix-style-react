import React from 'react';
import Star from 'wix-ui-icons-common/Star';
import Download from 'wix-ui-icons-common/Download';
import Duplicate from 'wix-ui-icons-common/Duplicate';
import Print from 'wix-ui-icons-common/Print';

import { classes } from '../TableActionCell.story.st.css';

import { TableActionCell } from 'wix-style-react';

const Example = () => (
  <div className={classes.exampleRow}>
    <TableActionCell
      size="small"
      dataHook="story-small-buttons"
      alwaysShowSecondaryActions
      primaryAction={{
        text: 'Edit',
        skin: 'inverted',
        size: 'small',
        onClick: () => window.alert('Primary action was triggered!'),
      }}
      secondaryActions={[
        {
          text: 'Star',
          icon: <Star />,
          size: 'small',
          onClick: () => window.alert('Star action was triggered.'),
        },
        {
          text: 'Download',
          icon: <Download />,
          size: 'small',
          onClick: () => window.alert('Download action was triggered.'),
        },
        {
          text: 'Duplicate',
          icon: <Duplicate />,
          onClick: () => window.alert('Duplicate action was triggered.'),
        },
        {
          text: 'Print',
          icon: <Print />,
          onClick: () => window.alert('Print action was triggered.'),
        },
      ]}
      numOfVisibleSecondaryActions={2}
    />
  </div>
);

export default Example;
