import { Ng4StompDemoPage } from './app.po';

describe('ng4-stomp-demo App', () => {
  let page: Ng4StompDemoPage;

  beforeEach(() => {
    page = new Ng4StompDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
