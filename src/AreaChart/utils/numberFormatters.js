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
  return scaled.toFixed(precision) + suffix;
};

export { formatToCompactNumber };
