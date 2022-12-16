const {default: AppTestID} = require('../AppTestID');

describe('Parallel 2', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should increase count', async () => {
    await element(by.id(AppTestID.incrementButton)).tap();
    await expect(element(by.id(AppTestID.countLabel))).toHaveText('1');
  });
});
