export class UserManagementPage {
    constructor(page){
        this.page = page;

        this.userOption = page.getByText('Users',{exact: true})


        this.systemUsersHeading = page.getByRole('heading',{name: 'System Users'});

        // this.usernameInput = page.getByRole('textbox',{name: 'Username'});

        // Input fields
        this.usernameInput = page.getByRole('textbox').first();
        this.employeeNameInput = page.getByPlaceholder('Type for hints...');

        //dropdowns
        this.userRoleDropdown = page.locator('.oxd-select-text').first();
        this.statusDropdown = page.locator('.oxd.select-text').nth(1)

        //buttons
        this.searchButton = page.getByRole('button',{ name: 'Search'});
        this.resetButton = page.getByRole('button',{ name: 'Reset'});
        this.addButton = page.getByRole('button',{ name: 'Add'});

        this.recordsFound = page.getByText(/\(\d+\) Records Found/);

        this.rows = page.locator('.oxd-table-body .oxd-table-card');

    }

    async openUsers(){
        await this.userOption.click();
    }

    async enterUsername(username){
        await this.usernameInput.fill(username);
    }

    async enterEmployeeName(employeeName){
        await this.employeeNameInput.fill(employeeName);
    }

    async clickSearch(){
        await this.searchButton.click();
    }

    async clickReset(){
        await this.resetButton.click();
    }

    async clickAdd(){
        await this.addButton.click();
    }

    async getRowCount(){
        return await this.rows.count();
    }

    getRow(index){
        return this.rows.nth(index);
    }

}