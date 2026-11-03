import {test,expect} from '@playwright/test';


test('verify title', async ({page}) =>{
    await page.goto('https://playwright.dev/')

    await expect(page).toHaveTitle(/end-to-end/)
    // Testing Git
});
