import {test,expect} from '@playwright/test';

const loginUrl = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test('Verify OrangeHRM login page title/URL', async ({page})=>{
    await page.goto(loginUrl);
    await expect(page).toHaveTitle(/OrangeHRM/);
        
        await expect(page).toHaveURL(/auth\/login/);
    });
    test ('Verify Dashboard URL after successful login', async ({page})=>{
        await page.goto(loginUrl);


     await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    await page.getByRole('button', {name : 'Login'}).click();

    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
    });
    test ('Verify Admin URL after successful login', async ({page})=>{
        await page.goto(loginUrl);
    
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
    
        await page.getByRole('button', {name : 'Login'}).click();
    
         await page.getByRole('link', { name: 'Admin' }).click();
    
        await expect(page).toHaveURL(/admin/i);
        await expect(page.getByRole('heading', { name: 'System Users'})).toBeVisible();
   
    });

test('Verify Add button', async ({page}) => {
    await page.goto(loginUrl);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();

    await page.getByRole('link', {name: 'Admin'}).click();
    await expect(page.getByRole('button', {name: 'Add'})).toBeVisible();
});

test('Verify Reset button', async ({page}) => {
    await page.goto(loginUrl);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();

    await page.getByRole('link', {name: 'Admin'}).click();
    await expect(page.getByRole('button', {name: 'Reset'})).toBeVisible();
});

test('Verify Search button', async ({page}) => {
    await page.goto(loginUrl);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();

    await page.getByRole('link', {name: 'Admin'}).click();
    await expect(page.getByRole('button', {name: 'Search'})).toBeVisible();
});