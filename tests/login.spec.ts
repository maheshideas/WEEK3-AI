import { test, expect } from '@playwright/test';
import config from '../utils/env';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';

test.describe('Login Flow', () => {
  test('should login and see dashboard', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await page.goto(config.baseURL + '/login');
    await loginPage.login(config.username, config.password);
    await dashboardPage.isLoaded();
    await expect(dashboardPage.welcomeMessage).toBeVisible();
  });
}); 