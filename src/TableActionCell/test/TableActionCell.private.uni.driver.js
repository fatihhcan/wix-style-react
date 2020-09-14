import { dataHooks } from '../constants';
import { findByHook } from '../../../test/utils/unidriver';
import { tableActionCellUniDriverFactory as publicDriverFactory } from '../TableActionCell.uni.driver';
import { iconButtonDriverFactory } from '../../IconButton/IconButton.uni.driver';

export const tableActionCellPrivateUniDriverFactory = base => {
  const primaryActionPlaceholderDriver = iconButtonDriverFactory(
    findByHook(base, dataHooks.placeholder),
  );

  return {
    ...publicDriverFactory(base),

    /** Whether the primary action placeholder exists */
    primaryActionPlaceholderExists: primaryActionPlaceholderDriver.exists,

    clickSecondaryActions: () =>
      findByHook(base, dataHooks.triggerElement).click(),
  };
};
