const {default: AppTestID} = require('../AppTestID');

describe('Parallel 1', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show initial count', async () => {
    await expect(element(by.id(AppTestID.countLabel))).toHaveText('0');
  });
});
