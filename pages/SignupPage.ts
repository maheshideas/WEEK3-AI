import { Page, Locator, expect } from '@playwright/test';

export class SignupPage {
  readonly page: Page;
  readonly signupLoginLink: Locator;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly signupButton: Locator;
  readonly errorMessage: Locator;
  readonly form: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
    this.signupButton = page.getByRole('button', { name: 'Signup' });
    this.errorMessage = page.getByText('Email Address already exist!');
    this.form = page.locator('#form');
  }

  async goto() {
    try {
      await this.page.goto('https://automationexercise.com/');
    } catch (error) {
      throw error;
    }
  }

  async openSignup() {
    try {
      await this.signupLoginLink.click();
    } catch (error) {
      throw error;
    }
  }

  async fillSignupForm(name: string, email: string) {
    try {
      await this.nameInput.click();
      await this.nameInput.fill(name);
      await this.nameInput.press('Tab');
      await this.emailInput.fill(email);
    } catch (error) {
      throw error;
    }
  }

  async submitSignup() {
    try {
      await this.signupButton.click();
    } catch (error) {
      throw error;
    }
  }

  async assertEmailExistsError() {
    try {
      await this.form.waitFor();
      await expect(this.form).toContainText('Email Address already exist!');
    } catch (error) {
      throw error;
    }
  }
} 