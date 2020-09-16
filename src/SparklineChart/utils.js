export const COLORS = ['#3370FB', '#7852D2', '#17B0E2', '#C53E99'];

export function classSelector(className) {
  return `.${className}`;
}

export function getDatasetMax(dataSet) {
  return {
    max: Math.max(
      ...dataSet.map(set => {
        const { values } = set;
        return Math.max(...values);
      }),
    ),
    min: Math.min(
      ...dataSet.map(set => {
        const { values } = set;
        return Math.min(...values);
      }),
    ),
  };
}

export function getColorByIndex(d, i) {
  return COLORS[i % COLORS.length];
}
