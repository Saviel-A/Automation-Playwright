import { expect, test } from '@playwright/test';
import { HomePage } from '../../../pages/homepage';
import { Brand } from '../../../models/brand';
import { userFactory } from '../../../factories/userFactory';
import { User } from '../../../models/user';
import { Logger } from '../../../utils/logger';

test.describe('Fortrade Homepage', () => {
  test('Navigate to Fortrade', async ({ page }) => {
    const user = await userFactory.getUser();

    Logger.Info(user.firstName);
    Logger.Info(user.lastName);
    Logger.Info(user.email);
    const homepage = new HomePage(page);
    const currentUrl = await homepage.navigateToHomePage(Brand.Fortrade);
    const expectedUrl = await page.url();
    await expect(currentUrl).toEqual(expectedUrl);
  });
});

test.describe('Kapitalrs Homepage', () => {
  test('Navigate to Kapitalrs', async ({ page }) => {
    //userFactory.getUser();
    const homepage = new HomePage(page);
    const currentUrl = await homepage.navigateToHomePage(Brand.Kapitalrs);
    const expectedUrl = await page.url();
    await expect(currentUrl).toEqual(expectedUrl);
  });
});

test.describe('Gcmasia Homepage', () => {
  test('Navigate to Gcmasia', async ({ page }) => {
    await userFactory.getUser();
    const homepage = new HomePage(page);
    const currentUrl = await homepage.navigateToHomePage(Brand.GcmAsia);
    const expectedUrl = await page.url();
    await expect(currentUrl).toEqual(expectedUrl);
  });
});

test.describe('Pro Homepage', () => {
  test('Navigate to Pro', async ({ page }) => {
    //await userFactory.getUser();
    //const user = userFactory.getUser();
    const user = new User('savi', 'a', 'savi9695@mailinator.com');
    console.log(user);

    console.log(user);
    //console.log(user);
    const homepage = new HomePage(page);
    const currentUrl = await homepage.navigateToHomePage(Brand.Pro);
    const expectedUrl = await page.url();
    await expect(currentUrl).toEqual(expectedUrl);
  });
});
