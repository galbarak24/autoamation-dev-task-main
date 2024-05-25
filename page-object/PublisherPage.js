export class PublisherPage {
    constructor(page) {
        this, page = page

        this.happyFolder = page.locator('a').filter({ hasText: 'Happy Folder' });
        this.publisherFolder = page.getByRole('link', { name: 'Publisher' });
        this.profeilFolder = page.getByRole('link', { name: 'Profile' });
        this.createPublisher = page.getByRole('button', { name: 'Create first record' });
        this.newButton = page.getByTestId('action-new');
        this.nameField = page.getByLabel('Name');
        this.emailfield = page.getByLabel('Email');
        this.buttonSave = page.getByTestId('button-save')
        this.hamburgerMnew = page.locator('section:nth-child(2) > section > section > .sc-kFuwaP > svg')
        this.editMenu = page.getByTestId('actions-dropdown');
        this.deleteOption = page.getByTestId('action-delete');
        this.deleteConfirm = page.getByRole('button', { name: 'Confirm' });
    }


    createNewPublisher = async () => {
        const name = 'Gal Barak';
        const email = "galbarak24@gmail.com"
        await this.hamburgerMnew.waitFor();
        await this.hamburgerMnew.click();
        await this.happyFolder.waitFor();
        await this.happyFolder.click();
        await this.publisherFolder.waitFor();
        await this.publisherFolder.click();
        await this.newButton.waitFor();
        await this.newButton.click();
        await this.nameField.waitFor();
        await this.nameField.fill(name);
        await this.emailfield.waitFor();
        await this.emailfield.fill(email);
        await this.buttonSave.waitFor();
        await this.buttonSave.click();



    }


    deletePublisher = async () => {
        await this.hamburgerMnew.waitFor();
        await this.hamburgerMnew.click();
        await this.happyFolder.waitFor();
        await this.happyFolder.click();
        await this.publisherFolder.waitFor();
        await this.publisherFolder.click();
        await this.editMenu.waitFor();
        await this.editMenu.click();
        await this.deleteOption.waitFor();
        await this.deleteOption.click();
        await this.deleteConfirm.waitFor();
        await this.deleteConfirm.click();

    }



}