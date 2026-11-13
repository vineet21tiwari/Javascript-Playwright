export class UserManagementPage {
    constructor(page){
        this.page = page;

        this.userOption = page.getByText('Users',{exact: true})


        this.systemUsersHeading = page.getByRole('heading',{name: 'System Users'});

        // this.usernameInput = page.getByRole('textbox',{name: 'Username'});

        this.usernameInput = page.getByRole('textbox').first();

        this.employeeNameInput = page.getByPlaceholder('Type for hints...');

        this.userRoleDropdown = page.locator('.oxd-select-text').first();
        this.statusDropdown = page.locator('.oxd.select-text').nth(1)

    }
}