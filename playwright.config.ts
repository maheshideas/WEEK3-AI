import { defineConfig, devices } from '@playwright/test';
import env from './utils/env';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI
    ? [['list'], ['json', { outputFile: 'test-results/report.json' }], ['html', { outputFolder: 'test-results/html-report', open: 'never' }]]
    : [['html', { open: 'on-failure' }]],
  use: {
    baseURL: env.baseURL,
    trace: 'on',
    screenshot: 'on',
    headless: true,
    video: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
}); 