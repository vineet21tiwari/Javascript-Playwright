import { test, expect } from '@playwright/test';

const loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

async function login(page) {
  await page.goto(loginUrl);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
}

test('Verify OrangeHRM login page title and URL', async ({ page }) => {
  await page.goto(loginUrl);

  await expect(page).toHaveTitle(/OrangeHRM/i);
  await expect(page).toHaveURL(/auth\/login/i);
});

test('Verify Dashboard URL after successful login', async ({ page }) => {
  await login(page);

  await expect(page).toHaveURL(/dashboard/i);
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('Verify Admin page loads after login', async ({ page }) => {
  await login(page);

  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(page).toHaveURL(/admin/i);
  await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
});

test('Verify Add button is visible on Admin page', async ({ page }) => {
  await login(page);

  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
});

test('Verify Reset button is visible on Admin page', async ({ page }) => {
  await login(page);

  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible();
});

test('Verify Search button is visible on Admin page', async ({ page }) => {
  await login(page);

  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
});

test('Verify Job menu is available in Admin section', async ({ page }) => {
  await login(page);

  await page.getByRole('link', { name: 'Admin' }).click();

  await expect(page.getByText('Job')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
});