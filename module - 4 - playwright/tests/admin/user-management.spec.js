import {test, expect} from '@playwright/test'
import { AdminPage } from '../../pages/admin/AdminPage';
import { UserManagementPage } from '../../pages/admin/userManagementPage';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Admin - User Manangement',()=>{
        let loginPage;
        let adminPage;
        let userManagementPage;

    test.beforeEach(async ({page})=>{

        loginPage = new LoginPage(page);
        adminPage = new AdminPage(page);
        userManagementPage = new UserManagementPage(page);

        //Login
        await loginPage.open();
        await loginPage.login('Admin','admin123')
        await expect(page).toHaveURL(/dashboard/)
        await adminPage.openAdmin();
        await expect(page).toHaveURL(/admin/)
    });

    test('TC01 - Verify page Elements', async () =>{
        await expect(userManagementPage.searchButton).toBeVisible();
        await expect(userManagementPage.resetButton).toBeVisible();
        await expect(userManagementPage.addButton).toBeVisible();
        await expect(userManagementPage.systemUsersHeading).toBeVisible();
    });

    test('TC02 - Search User by username', async () =>{
        await userManagementPage.enterUsername('Admin');
        await userManagementPage.clickSearch();
        await expect(userManagementPage.recordsFound).toBeVisible();
    });

    test('TC03 - Search User by status', async () =>{
        
    });

    test('TC04 - Search User by multiple filters', async () =>{
        
    });

    test('TC05 - verify Reset functionality', async () =>{
    
    });

    test('TC06 - Verify add button navigates to add user page', async () =>{
        
    });
})