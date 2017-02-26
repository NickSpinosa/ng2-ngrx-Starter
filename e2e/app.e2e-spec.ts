import { EportalPage } from './app.po';

describe('eportal App', () => {
  let page: EportalPage;

  beforeEach(() => {
    page = new EportalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
