import * as React from 'react';

export interface AreaChartProps {
  dataHook?: string;
  className?: string;
}

export interface IDatasetItem {
  value: number;
  label: string;
}

export default class AreaChart extends React.PureComponent<AreaChartProps>{}
