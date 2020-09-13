import {
  baseUniDriverFactory,
  findByHook,
  countByHook,
} from '../../test/utils/unidriver';
import { dataHooks } from './constants';
import { buttonDriverFactory } from '../Button/Button.uni.driver';
import { tooltipDriverFactory } from '../Tooltip/Tooltip.uni.driver';
import { PopoverMenuDriver } from '../PopoverMenu/PopoverMenu.uni.driver';
import { consoleErrors } from 'wix-ui-test-utils/jest-setup';

export const tableActionCellUniDriverFactory = (base, body) => {
  // const getVisibleActionsWrapper = async () =>
  //   await findByHook(base, dataHooks.tableActionCellVisibleActions);

  const getPrimaryActionButtonDriver = () =>
    buttonDriverFactory(
      findByHook(base, dataHooks.tableActionCellPrimaryAction),
    );

  // const getVisibleActionTooltipDriver = actionIndex =>
  //   tooltipDriverFactory({
  //     element: getVisibleActionsWrapper().querySelectorAll(
  //       `[data-hook="${dataHooks.tableActionCellVisibleActionTooltip}"]`,
  //     )[actionIndex],
  //     eventTrigger,
  //   });
  //
  // const getVisibleActionByDataHookTooltipDriver = dataHook =>
  //   tooltipDriverFactory({
  //     element: getVisibleActionsWrapper().querySelector(
  //       `[data-hook="${dataHook}"]`,
  //     ),
  //     eventTrigger,
  //   });
  //
  // const getVisibleActionButtonDriver = actionIndex =>
  //   buttonDriverFactory(
  //     getVisibleActionsWrapper().querySelectorAll('button')[actionIndex],
  //   );

  // const getVisibleActionByDataHookButtonDriver = dataHook =>
  //   buttonDriverFactory(findByHook(getVisibleActionsWrapper(), dataHook));

  const getHiddenActionsPopoverMenuDriver = () =>
    PopoverMenuDriver(findByHook(base, dataHooks.tableActionCellPopoverMenu));

  return {
    ...baseUniDriverFactory(base, body),

    /** Get the driver of the primary action <Button/> from the action column */
    getPrimaryActionButtonDriver,

    /** Click the primary action button from the action column */
    clickPrimaryActionButton: async () =>
      await getPrimaryActionButtonDriver().click(),

    /** Get whether the primary action button is disabled */
    getIsPrimaryActionButtonDisabled: async () =>
      await getPrimaryActionButtonDriver().isButtonDisabled(),

    /** Get the number of the visible secondary actions */
    getVisibleActionsCount: () =>
      countByHook(base, dataHooks.tableActionCellVisibleAction),

    /** Get the number of hidden secondary actions (in the <PopoverMenu/>, requires it to be open) */
    getHiddenActionsCount: () =>
      getHiddenActionsPopoverMenuDriver().childrenCount(),
    // /** Get the driver of a specific visible secondary action <Tooltip/> */
    // getVisibleActionTooltipDriver,
    // /** Get the driver of a specific visible secondary action <Tooltip/> by its specified dataHook */
    // getVisibleActionByDataHookTooltipDriver,
    // /** Get the driver of a specific visible secondary action <Button/> */
    // getVisibleActionButtonDriver,
    // /** Get the driver of a specific visible secondary action <Button/> by its specified dataHook */
    // getVisibleActionByDataHookButtonDriver,
    /** Get the driver of the hidden secondary action <PopoverMenu/> */
    getHiddenActionsPopoverMenuDriver,
    // /** Click an a visible secondary action */
    // clickVisibleAction: actionIndex =>
    //   getVisibleActionButtonDriver(actionIndex).click(),
    // /** Click an a visible secondary action by its specified dataHook  */
    // clickVisibleActionByDataHook: actionDataHook =>
    //   getVisibleActionByDataHookButtonDriver(actionDataHook).click(),
    // /** Click on the hidden secondary actions <PopoverMenu/> */
    // clickPopoverMenu: () =>
    //   getHiddenActionsPopoverMenuDriver()
    //     .getTriggerElement(dataHooks.triggerElement)
    //     .click(),
    /** Click on a hidden secondary action (requires the <PopoverMenu/> to be open) */
    clickHiddenAction: actionIndex =>
      getHiddenActionsPopoverMenuDriver().clickAtChild(actionIndex),
    clickHiddenActionByDataHook: actionDataHook =>
      getHiddenActionsPopoverMenuDriver().clickAtChildByDataHook(
        actionDataHook,
      ),
  };
};
