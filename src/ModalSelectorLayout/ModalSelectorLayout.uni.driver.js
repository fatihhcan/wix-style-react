import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { loaderUniDriverFactory } from '../Loader/Loader.uni.driver';
import { selectorUniDriverFactory } from '../Selector/Selector.uni.driver';
import { searchUniDriverFactory } from '../Search/Search.uni.driver';
import { customModalLayoutDriverFactory } from '../CustomModalLayout/CustomModalLayout.uni.driver';
import { dataHooks } from './ModalSelectorLayout.helpers';
import { checkboxUniDriverFactory } from '../Checkbox/Checkbox.uni.driver';
import { textUniDriverFactory } from '../Text/Text.uni.driver';

export const modalSelectorLayoutUniDriverFactory = (base, body) => {
  const findInModalByDataHook = dataHook => base.$(`[data-hook="${dataHook}"]`);
  const mainLoaderDriver = () =>
    loaderUniDriverFactory(
      base.$(`[data-hook="${dataHooks.mainLoader}"]`),
      body,
    );
  const nextPageLoaderDriver = () =>
    loaderUniDriverFactory(
      base.$(`[data-hook="${dataHooks.nextPageLoader}"]`),
      body,
    );
  const cancelButtonDriver = async () =>
    await customModalLayoutDriverFactory(base).getSecondaryButtonDriver();
  const okButtonDriver = async () =>
    await customModalLayoutDriverFactory(base).getPrimaryButtonDriver();
  const subtitleTextDriver = () =>
    textUniDriverFactory(base.$(`[data-hook="${dataHooks.subtitle}"]`), body);
  const searchDriver = () =>
    searchUniDriverFactory(base.$(`[data-hook="${dataHooks.search}"]`), body);
  const getList = () => findInModalByDataHook(dataHooks.list);
  const getModalBody = () => findInModalByDataHook(dataHooks.modalBody);
  const getSelectors = () =>
    getList().$$(`[data-hook="${dataHooks.selector}"]`);
  const selectorDriverAt = i => selectorUniDriverFactory(getSelectors().get(i));
  const emptyState = () => findInModalByDataHook(dataHooks.emptyState);
  const noResultsFoundState = () =>
    findInModalByDataHook(dataHooks.noResultsFoundState);
  const footerSelector = checkboxUniDriverFactory(
    base.$('[data-hook=footer-selector]', body),
  );

  return {
    ...baseUniDriverFactory(base),

    /**
     * Gets main loader driver.
     * @returns {LoaderUniDriver}
     */
    mainLoaderDriver,
    /**
     * Gets next page loader driver.
     * @returns {LoaderUniDriver}
     */
    nextPageLoaderDriver,
    /**
     * Gets cancel button driver.
     * @returns {Promise<ButtonUniDriver>}
     */
    cancelButtonDriver,
    /**
     * Gets ok button driver.
     * @returns {Promise<ButtonUniDriver>}
     */
    okButtonDriver,
    /**
     * Gets search driver.
     * @returns {SearchUniDriver}
     */
    searchDriver,
    /**
     * Gets subtitle text driver.
     * Will be deprecated, use getSubtitleText and subtitleExists instead.
     * @returns {TextUniDriver}
     */
    subtitleTextDriver,
    /**
     * Gets title text.
     * @returns {Promise<string>}
     */
    getTitle: async () =>
      await customModalLayoutDriverFactory(base).getTitleText(),
    /**
     * Clicks "x" button.
     * @returns {Promise<void>}
     */
    clickOnClose: async () =>
      await customModalLayoutDriverFactory(base).clickCloseButton(),
    /**
     * Gets subtitle text.
     * @returns {Promise<string>}
     */
    getSubtitleText: async () =>
      await customModalLayoutDriverFactory(base).getSubtitleText(),
    /**
     * Checks weather subtitle exists.
     * @returns {Promise<boolean>} True if subtitle exists; false otherwise.
     */
    subtitleExists: async () =>
      await customModalLayoutDriverFactory(base).childExists(
        dataHooks.subtitle,
      ),
    /**
     * Checks weather empty state is shown.
     * @returns {Promise<boolean>} True if empty state is shown; false otherwise.
     */
    showsEmptyState: () => emptyState().exists(),
    /**
     * Gets empty state.
     * @returns {Promise<HTMLElement>}
     */
    getEmptyState: () => emptyState()._prop('firstChild'),
    /**
     * Checks weather no results found state is shown.
     * @returns {Promise<boolean>} True if no results found state is shown; false otherwise.
     */
    showsNoResultsFoundState: () => noResultsFoundState().exists(),
    /**
     * Gets no results found state.
     * @returns {Promise<HTMLElement>}
     */
    getNoResultsFoundState: () => noResultsFoundState()._prop('firstChild'),
    /**
     * Checks weather the list exists.
     * @returns {Promise<boolean>} True if list exists; false otherwise.
     */
    listExists: () => getList().exists(),
    /**
     * Returns the number of items in the list.
     * @returns {Promise<number>}
     */
    numberOfItemsInList: () => getSelectors().count(),
    /**
     * Gets the selector driver of the item at the passed index.
     * @param {number} i Item index
     * @returns {SelectorUniDriver} The selector driver.
     */
    getSelectorDriverAt: i => selectorDriverAt(i),
    /**
     * Triggers "scroll" event on the list.
     * @returns {Promise<boolean>}.
     */
    scrollDown: async () =>
      // eslint-disable-next-line no-restricted-properties
      (await getModalBody().getNative()).dispatchEvent(new Event('scroll')),
    /**
     * Gets footer selector's driver.
     * @returns {CheckboxUniDriver}
     */
    footerSelector: () => footerSelector,
  };
};
