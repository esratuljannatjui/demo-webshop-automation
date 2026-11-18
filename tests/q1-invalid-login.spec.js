const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Q1: Invalid login shows error and user is not logged in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('invalid_user@test.com', 'WrongPass123');

  const message = await loginPage.getErrorMessage();
  expect(message).toContain('Login was unsuccessful');

  await expect(loginPage.logoutLink).toBeHidden();
  await expect(loginPage.loginLink).toBeVisible();
});