import { FindPhoneModelDemoPage } from './app.po';

describe('find-phone-model-demo App', () => {
  let page: FindPhoneModelDemoPage;

  beforeEach(() => {
    page = new FindPhoneModelDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
