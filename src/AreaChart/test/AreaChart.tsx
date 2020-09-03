import * as React from 'react';
import AreaChart from '..';
import { areaChartTestkitFactory } from '../../../testkit';
import { areaChartTestkitFactory as areaChartEnzymeTestkitFactory } from '../../../testkit/enzyme';
import { areaChartTestkitFactory as areaChartPuppeteerTestkitFactory } from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function areaChartWithMandatoryProps() {
  return <AreaChart />;
}

function areaChartWithAllProps() {
  return (
    <AreaChart
      dataHook="dataHook"
      className="className"
    />
  );
}

async function testkits() {
  const testkit = areaChartTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = areaChartEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await areaChartPuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}
