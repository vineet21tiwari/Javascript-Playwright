import {test,expect} from '@playwright/test';
 
const logURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
const DashURL ="https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"

// getByRole()
test('TC01 - Locate login button', async ({page}) =>{

    await page.goto(logURL)

   const loginButton =  page.getByRole('button', {name : 'Login'});
   const forgotPassword = page.getByText('Forgot your password?')
   const username =  page.getByPlaceholder('Username');
   const password =  page.getByPlaceholder('Password');


   await expect(loginButton).toBeVisible();
   await expect(forgotPassword).toBeVisible();
   await expect(username).toBeVisible();
   await expect(password).toBeVisible();
});

