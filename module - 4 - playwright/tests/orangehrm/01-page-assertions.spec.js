import {test,expect} from '@playwright/test';
 
const logURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
const DashURL ="https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"

test('TC01 - Verify OrangeHRM login page', async ({page})=>{
    await page.goto(logURL);

    await expect(page).toHaveTitle(/OrangeHRM/);
    // /pattern/
    await expect(page).toHaveURL(/auth\/login/)
});

test('T02 verify Dashboard URL after sucessful login', async ({page})=>{

    await page.goto(logURL);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //Clink on login button
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL(/dashboard/);
    await page.goto(DashURL)
    await page.waitForTimeout(5000);
});


test('T03 verify Dashboard URL after UNsucessful login with wrong password', async ({page})=>{

    await page.goto(logURL);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123123');

    //Clink on login button
    await page.locator('button[type="submit"]').click();
    await page.waitForTimeout(5000);
    await expect(page.getByRole('alert')).toHaveText('Invalid credentials');
});
