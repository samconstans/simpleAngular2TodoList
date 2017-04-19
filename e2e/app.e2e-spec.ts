import { TODOAngular2Page } from './app.po';

describe('todoangular2 App', function() {
  let page: TODOAngular2Page;

  beforeEach(() => {
    page = new TODOAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
