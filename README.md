# Playwright + TypeScript Automation Framework

## Features
- Page Object Model (POM) with TypeScript
- Environment config via `utils/env.ts`
- Playwright config with HTML/JSON reporters
- Test runner with `@playwright/test`
- GitHub Actions CI with report artifacts

## Project Structure
```
├── pages/
│   ├── LoginPage.ts
│   └── DashboardPage.ts
├── tests/
│   └── login.spec.ts
├── utils/
│   └── env.ts
├── playwright.config.ts
├── package.json
├── tsconfig.json
├── .github/
│   └── workflows/
│       └── playwright.yml
```

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```
2. Install Playwright browsers:
   ```sh
   npx playwright install
   ```

## Usage
- Run all tests:
  ```sh
  npm test
  ```
- Show HTML report:
  ```sh
  npm run test:report
  ```
- Run tests for CI (HTML + JSON reporters):
  ```sh
  npm run test:ci
  ```

## Environment Configuration
Edit `utils/env.ts` to set base URLs and credentials for different environments. Use `NODE_ENV` or `--project` to select environment.

## CI/CD
- On every push, GitHub Actions will run tests and upload HTML/JSON reports as artifacts.

---

**Happy Testing!** 