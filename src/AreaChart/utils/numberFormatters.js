import uniq from 'lodash/uniq';

const SI_SYMBOL = ['', 'K', 'M', 'B'];

const formatToCompactNumber = (value = 0, precision = 0) => {
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
  const isRounded = !(scaled % 1);
  return isRounded
    ? scaled.toFixed() + suffix
    : scaled.toFixed(precision) + suffix;
};

const calcPrecision = (values, maxPrecision = 4) => {
  let precision = 0;
  while (precision < maxPrecision) {
    const compactValues = (values || []).map(v =>
      formatToCompactNumber(v, precision).toLocaleLowerCase(),
    );

    if (compactValues.length === uniq(compactValues).length) {
      return precision;
    }
    precision += 1;
  }
};
export { formatToCompactNumber, calcPrecision };
