import { MyDatacmpAppPage } from './app.po';

describe('my-datacmp-app App', () => {
  let page: MyDatacmpAppPage;

  beforeEach(() => {
    page = new MyDatacmpAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
