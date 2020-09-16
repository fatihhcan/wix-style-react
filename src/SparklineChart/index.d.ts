import * as React from 'react';

export interface SparklineChartProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class SparklineChart extends React.PureComponent<SparklineChartProps>{}
