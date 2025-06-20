import { test } from '@playwright/test';
import { SignupPage } from '../pages/SignupPage';
import { randomName, randomEmail } from '../utils/testData';

test('Signup with random data and expect error for existing email', async ({ page }) => {
  const signupPage = new SignupPage(page);
  const name = randomName();
  const email = randomEmail(); // Use a known existing email for error, or use randomEmail() for new
  console.log(`Generated test data: name=${name}, email=${email}`);

  await signupPage.goto();
  await signupPage.openSignup();
  await signupPage.fillSignupForm(name, email);
  await signupPage.submitSignup();
  await signupPage.assertEmailExistsError();
}); 