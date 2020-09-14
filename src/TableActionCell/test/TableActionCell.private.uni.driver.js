import { dataHooks } from '../constants';
import { findByHook } from '../../../test/utils/unidriver';
import { tableActionCellUniDriverFactory as publicDriverFactory } from '../TableActionCell.uni.driver';
import { iconButtonDriverFactory } from '../../IconButton/IconButton.uni.driver';

export const tableActionCellPrivateUniDriverFactory = base => {
  const primaryActionPlaceholder = () =>
    findByHook(base, dataHooks.placeholder);

  const primaryActionPlaceholderDriver = iconButtonDriverFactory(
    primaryActionPlaceholder(),
  );

  return {
    ...publicDriverFactory(base),

    /** Whether the primary action placeholder exists */
    primaryActionPlaceholderExists: primaryActionPlaceholderDriver.exists,

    clickSecondaryActions: () =>
      findByHook(base, dataHooks.triggerElement).click(),
  };
};
