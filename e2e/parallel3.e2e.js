const {default: AppTestID} = require('../AppTestID');

describe('Parallel 3', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should decrease count', async () => {
    await element(by.id(AppTestID.decrementButton)).tap();
    await expect(element(by.id(AppTestID.countLabel))).toHaveText('-1');
  });
});
