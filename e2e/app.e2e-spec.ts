import { BarChartAppPage } from './app.po';

describe('bar-chart-app App', () => {
  let page: BarChartAppPage;

  beforeEach(() => {
    page = new BarChartAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
