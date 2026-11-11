import {test,expect} from '@playwright/test';
 
const logURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
const DashURL ="https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"


test('TC01 - Locate ',async({page})=>{
    await page.goto(logURL)
    const loginButton = page.getByRole('button',{name : 'Login'});
      const Username = page.getByRole('textbox',{name : 'Username'});
        const Password = page.getByRole('textbox',{name : 'Password'});

    await expect(loginButton).toBeVisible();
    
    // await page.waitForTimeout(3000);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

     await expect(Username).toBeVisible();
      await expect(Password).toBeVisible();

    //Clink on login button
    await page.locator('button[type="submit"]').click();
    //await page.waitForTimeout(3000);
    //await expect(page).toHaveURL(/dashboard/);
    await page.goto(DashURL)
    await page.waitForTimeout(5000);
});