export class AdminPage{
    constructor(page){
        this.page=page;

        this.adminMenu = page.getByRole('link',{name: 'Admin'});

        this.userManangementMenu = page.getByText('User Management', {exact: true});
        this.jobMenu = page.getByText('Job', {exact: true});
        this.organizationMenu = page.getByText('Organization', {exact: true});
        this.qualificationMenu = page.getByText('Qualifications', {exact: true});
         this.nationalitiesMenu = page.getByText('Nationalities', {exact: true});
        this.corporateBrandingMenu = page.getByText('Corporate Branding', {exact: true});
        this.configurationMenu = page.getByText('Configuration', {exact: true});
    }

     async openAdmin(){
            await this.adminMenu.click();
        }
    
    async openUserManagementMenu(){
        await this.userManangementMenu.click();
    }
    async openJobMenu(){
        await this.jobMenu.click();
    }
    async openOrganizationMenu(){
        await this.organizationMenu.click();
    }
    async openQualificationsenu(){
        await this.qualificationMenu.click();
    }
    async openNationalitiesMenu(){
        await this.nationalitiesMenu.click();
    }
    async openCorporateBrandingMenu(){
        await this.corporateBrandingMenu.click();
    }
    async openConfigurationMenu(){
        await this.configurationMenu.click();
    }

}