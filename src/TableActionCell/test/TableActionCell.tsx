import * as React from 'react';
import TableActionCell from '..';
import { tableActionCellTestkitFactory } from '../../../testkit';
import { tableActionCellTestkitFactory as tableActionCellEnzymeTestkitFactory } from '../../../testkit/enzyme';
import * as enzyme from 'enzyme';

function tableActionCellWithMandatoryProps() {
  return <TableActionCell />;
}

function tableActionCellWithAllProps() {
  return (
    <TableActionCell
      alwaysShowSecondaryActions
      dataHook="hook"
      numOfVisibleSecondaryActions={2}
      popoverMenuProps={{}}
      popoverMenuButtonSize="medium"
      primaryAction={{
        disabled: true,
        onClick: () => {},
        text: 'text',
        skin: 'standard',
        size: 'medium',
      }}
      secondaryActions={[
        {
          dataHook: 'hook',
          disabledDescription: 'You are not allowed for this action',
          tooltipProps: {
            maxWidth: 250,
            textAlign: 'start',
          },
          disabled: true,
          icon: <div />,
          onClick: () => {},
          text: 'text',
          size: 'medium',
        },
      ]}
    />
  );
}

async function testkits() {
  const testkit = tableActionCellTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = tableActionCellEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });
}
