import { Page } from '@playwright/test';
import { Logger } from '../utils/logger';
import brands from '../fixtures/brands.json';
import ENV from '../utils/env';

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getTitle() {
    const pageTitle = await this.page.title();
    Logger.Info(`Page Title: ${pageTitle}`);
  }

  async navigateToHomePage(brandName: string) {
    if (brands.hasOwnProperty(brandName.toLowerCase())) {
      const url = brands[brandName.toLowerCase()][ENV.ENVIRONMENT];
      await Logger.Info(`Navigating to ${url}`);
      await this.page.goto(url);
      await Logger.Success(`Successfully navigated to ${url}.`);
      return url;
    }
  }
}
