import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import AreaChart from '../AreaChart';
import { areaChartPrivateDriverFactory } from './AreaChart.private.uni.driver';

describe(AreaChart.displayName, () => {
  const render = createRendererWithUniDriver(areaChartPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<AreaChart />);

    expect(await driver.exists()).toBe(true);
  });

  it('should increment', async () => {
    const { driver } = render(<AreaChart />);

    await driver.clickButtonTimes(2);

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<AreaChart buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
