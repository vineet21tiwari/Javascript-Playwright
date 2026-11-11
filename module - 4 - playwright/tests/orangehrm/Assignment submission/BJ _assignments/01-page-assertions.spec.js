import {test,expect} from '@playwright/test';

const loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test('TC01 - Verify OrangeHRM login page title/URL', async ({page})=>{
    await page.goto(loginUrl);

    await expect(page).toHaveTitle(/OrangeHRM/);
    // /pattern/
    await expect(page).toHaveURL(/auth\/login/);
});
test ('TC05 - Verify Dashboard URL after successful login', async ({page})=>{
    await page.goto(loginUrl);

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name : 'Login'}).click();

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();

});



test ('TC07 - Verify Admin URL after successful login', async ({page})=>{
    await page.goto(loginUrl);

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name : 'Login'}).click();

     await page.getByRole('link', { name: 'Admin' }).click();

    await expect(page).toHaveURL(/Admin/i);
    await expect(page.getByRole('heading', {name: 'Admin'})).toBeVisible();

});


test ('TC08 - Verify PIM URL after successful login', async ({page})=>{
    await page.goto(loginUrl);

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name : 'Login'}).click();

     await page.getByRole('link', { name: 'PIM' }).click();


    await expect(page).toHaveURL(/PIM/i);
    await expect(page.getByRole('heading', {name: 'PIM'})).toBeVisible();
});

test ('TC07 - Verify login failure message', async ({page})=>{
    await page.goto(loginUrl);

   // await page.getByPlaceholder('Username').fill('Admin1');
    await page.locator('input[name="Username"]').fill('Adminn');
  //  await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRoles('textbox', {name : 'Password'}).fill('admin1234')

    await page.getByRole('button', {name : 'Login'}).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();
});


test('TC10- unsuccessful title assertion failure', async ({page}) =>{
await page.goto(loginUrl);
await expect(page).toHaveTitle(/Selenium/)
await expect (page).toHaveTitle(/OrangeHRM/)
});
