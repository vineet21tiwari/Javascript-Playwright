import {test, expect} from '@playwright/test';

test('TC01 -Verify OrangeHRM login page', async({ page }) => {
    await page.goto ('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page).toHaveTitle(/OrangeHRM/);
    await expect(page).toHaveURL(/auth\/login/);
    await expect(page.getByRole('button',{name : 'Login'})).toBeVisible();
});

test('login to OrangeHRM', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name : 'Login'}).click();

    await expect(page.getByText('Dashboard').first()).toBeVisible();


});