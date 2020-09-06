import React from 'react';
import PropTypes from 'prop-types';
import { Line, defaults } from 'react-chartjs-2';
import throttle from 'lodash/throttle';

import { formatToCompactNumber } from './utils/numberFormatters';

import {
  DATASET_PROPS,
  GRIDLINE_PROPS,
  OPTIONS_PROPS,
  TOOLTIP_PROPS,
  Y_AXES_TICKS_PROPS,
} from './chartOptions';

import { st, classes, stVars } from './AreaChart.st.css';

defaults.global.defaultFontFamily = 'Madefor';

/** An area chart is a way of plotting data points on a line. Often, it is used to show trend data */
class AreaChart extends React.PureComponent {
  cursorLine = null;

  handleHover = (_, activeItems) => {
    const tooltipItem = activeItems[0];

    if (tooltipItem) {
      const providedTooltipItem = this.props.data[tooltipItem._index];
      const { onTooltipShow } = this.props;
      onTooltipShow && onTooltipShow(providedTooltipItem);
    }
  };

  handleHoverThrottled = throttle(this.handleHover, 100);

  onMouseMove = tooltip => {
    if (tooltip.y < 0) {
      tooltip.y =
        tooltip.y + tooltip.height + tooltip.caretSize + tooltip.xPadding;
      tooltip.yAlign = 'top';
    }

    if (tooltip.opacity) {
      this.cursorLine.style.opacity = '1';
      this.cursorLine.style.left = `${tooltip.caretX}px`;

      return;
    }

    this.cursorLine.style.opacity = '0';
  };

  render() {
    const { data, xTickGap, tooltipContent, dataHook, className } = this.props;
    const labels = (data || []).map(i => i.label);
    const dataset = (data || []).map(i => i.value);

    return (
      <section
        className={st(classes.lineChart, className)}
        data-hook={dataHook}
      >
        <Line
          redraw
          data={{
            labels,
            datasets: [
              {
                ...DATASET_PROPS,
                data: dataset,
              },
            ],
          }}
          options={{
            ...OPTIONS_PROPS,
            scales: {
              xAxes: [
                {
                  gridLines: { ...GRIDLINE_PROPS, tickMarkLength: 0 },
                  ticks: {
                    padding: 5,
                    fontColor: stVars.gridLineZeroLineColor,
                    maxRotation: 0,
                    callback(value, index, values) {
                      if (
                        values.length > xTickGap &&
                        index !== values.length - 1 &&
                        index % xTickGap
                      ) {
                        return '';
                      }

                      return value;
                    },
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    ...Y_AXES_TICKS_PROPS,
                    fontColor: stVars.gridLineZeroLineColor,
                    callback(value, index, values) {
                      if (index === values.length - 1) {
                        return;
                      }
                      return formatToCompactNumber(value).toLocaleLowerCase();
                    },
                  },
                  gridLines: {
                    tickMarkLength: -1,
                    ...GRIDLINE_PROPS,
                  },
                },
              ],
            },
            tooltips: {
              ...TOOLTIP_PROPS,
              custom: this.onMouseMove,
              callbacks: {
                title: () => '',
                label: tooltipItem => {
                  return tooltipContent(
                    [...data][tooltipItem.index],
                    tooltipItem.index,
                  );
                },
              },
            },
            onHover: this.handleHoverThrottled,
          }}
        />
        <div
          ref={line => (this.cursorLine = line)}
          className={classes.lineChartCursor}
        />
      </section>
    );
  }
}
AreaChart.displayName = 'AreaChart';

AreaChart.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,
};

AreaChart.defaultProps = {
  xTickGap: 1,
};

export default AreaChart;
