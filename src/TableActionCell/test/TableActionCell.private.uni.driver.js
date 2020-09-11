import { dataHooks } from '../constants';
import { findByHook } from '../../../test/utils/unidriver';
import { tableActionCellUniDriverFactory as publicDriverFactory } from '../TableActionCell.uni.driver';

export const tableActionCellPrivateUniDriverFactory = base => {
  const getPrimaryActionPlaceholder = () =>
    findByHook(base, dataHooks.tableActionCellPlaceholder);

  return {
    ...publicDriverFactory(base),

    /** Whether the primary action placeholder exists */
    primaryActionPlaceholderExists: () => !!getPrimaryActionPlaceholder(),

    clickSecondaryActions: () =>
      findByHook(base, dataHooks.triggerElement).click(),
  };
};
