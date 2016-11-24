import { EmployeeTrackerWebappPage } from './app.po';

describe('employee-tracker-webapp App', function() {
  let page: EmployeeTrackerWebappPage;

  beforeEach(() => {
    page = new EmployeeTrackerWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
