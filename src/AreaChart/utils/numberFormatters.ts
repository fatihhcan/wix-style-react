import { getCurrencyByKey } from '@wix/locale-dataset-javascript';

enum Units {
  COUNT = 'COUNT',
  PERCENT = 'PERCENT',
  MONEY = 'MONEY',
}

const SI_SYMBOL = ['', 'K', 'M', 'B'];

const numberFormater = new Intl.NumberFormat();

const formatNumberToPrecision = (
  value: number | string = 0,
  precision: number = 0,
) =>
  numberFormater.format(
    parseFloat(typeof value === 'number' ? value.toFixed(precision) : value),
  );

const formatToCompactNumber = (
  value: number = 0,
  precision: number = 0,
): string => {
  const tier = Math.min(
    (Math.log10(Math.abs(value)) / 3) | 0,
    SI_SYMBOL.length - 1,
  );
  if (tier === 0) {
    return value.toFixed().toString();
  }
  const suffix = SI_SYMBOL[tier];
  const scale = Math.pow(10, tier * 3);
  const scaled = value / scale;
  return scaled.toFixed(precision) + suffix;
};

const formatToPercent = (value: number | string = 0) => {
  const formatedValue =
    typeof value === 'number' ? formatNumberToPrecision(value, 0) : value;

  return `${formatedValue}%`;
};

const formatToMoney = (value: number | string = 0, currencyKey: string) => {
  const formatedValue =
    typeof value === 'number' ? formatNumberToPrecision(value, 0) : value;
  const currency = getCurrencyByKey(currencyKey);

  return currency
    ? `${currency.symbol}${formatedValue}`
    : `${currencyKey} ${formatedValue}`;
};

const formatValueToUnitString = (
  value: number | string,
  unit?: Units | string,
  currency?: string,
  precision?: number,
) => {
  const formatedValue = formatNumberToPrecision(value, precision);

  if (unit === Units.PERCENT) {
    return formatToPercent(formatedValue);
  }

  if (unit === Units.MONEY) {
    return formatToMoney(formatedValue, currency);
  }

  return formatedValue;
};

const formatCompactValueToUnitString = (
  value: string,
  unit?: Units | string,
  currency?: string,
) => {
  if (unit === Units.PERCENT) {
    return formatToPercent(value);
  }

  if (unit === Units.MONEY) {
    return formatToMoney(value, currency);
  }

  return value;
};

const countPercentageFromBase = (
  base: number,
  chunk: number,
  precision?: number,
): number => {
  if (chunk === 0 || base === 0) {
    return 0;
  }
  if (precision === undefined) {
    return (chunk * 100) / base;
  }
  if (precision < 0 || precision % precision) {
    throw new Error('Precision should be integer');
  }
  return Number(((chunk * 100) / base).toFixed(precision));
};

export {
  formatNumberToPrecision,
  formatToCompactNumber,
  formatToMoney,
  formatToPercent,
  formatValueToUnitString,
  formatCompactValueToUnitString,
  countPercentageFromBase,
  Units,
};
