import {test,expect} from '@playwright/test';

const loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test('TC01 - Verify OrangeHRM login page title/URL', async ({page})=>{
    await page.goto(loginUrl);

    await expect(page).toHaveTitle(/OrangeHRM/);
    // /pattern/
    await expect(page).toHaveURL(/auth\/login/);
});
test ('TC02 - Verify Dashboard URL after successful login', async ({page})=>{
    await page.goto(loginUrl);

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name : 'Login'}).click();

    await expect(page).toHaveURL(/dashboard/);


});
test ('TC03 - Verify login failure message', async ({page})=>{
    await page.goto(loginUrl);

    await page.getByPlaceholder('Username').fill('InvalidAdmin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name : 'Login'}).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();
});