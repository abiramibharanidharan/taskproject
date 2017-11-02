import { TaskcalanderPage } from './app.po';

describe('taskcalander App', function() {
  let page: TaskcalanderPage;

  beforeEach(() => {
    page = new TaskcalanderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
