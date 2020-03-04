describe('RepoContainer', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('RepoContainer'))).toBeVisible();
  });

  it('Should show custom header', async () => {
    await expect(element(by.id('header'))).toBeVisible();
    await expect(element(by.id('searchBar'))).toBeVisible();
  });

  it('Should show spinner', async () => {
    await expect(element(by.id('spinner'))).toNotExist();
  });

  it('Should show Detail screen on list item tap', async () => {
    await expect(element(by.id('listItem0'))).toBeVisible();
    await element(by.id('listItem0')).tap();
    await element(by.id('share')).tap();
  });

  it('Should search', async () => {
    await expect(element(by.id('searchBar'))).toBeVisible();
    element(by.id('searchBar')).typeText('free');
  });
});
