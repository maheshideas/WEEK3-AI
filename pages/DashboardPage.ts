import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly welcomeMessage: Locator;
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.getByTestId('welcome-message');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  async isLoaded() {
    await this.welcomeMessage.waitFor({ state: 'visible' });
  }

  async logout() {
    await this.logoutButton.click();
  }
} 