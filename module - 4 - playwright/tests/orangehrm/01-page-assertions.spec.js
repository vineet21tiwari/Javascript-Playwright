import {test,expect} from '@playwright/test';

test('TC01 - Verify OrangeHRM login page', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle(/OrangeHRM/);
    // /pattern/
    await expect(page).toHaveURL(/auth\/login/)
});