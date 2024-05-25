


export class PostPage {
    constructor(page) {
        this.page = page;

        this.postFolder = page.getByRole('link', { name: 'Post' });
        this.newButtonPost = page.getByRole('link', { name: 'Create new' });
        this.hamburgerMenu = page.locator('section:nth-child(2) > section > section > .sc-kFuwaP > svg');
        this.happyFolder = page.locator('a').filter({ hasText: 'Happy Folder' });
        this.titlePost = page.getByLabel('Title');
        this.content = page.getByLabel('Content');
        this.statusBar = page.getByTestId('property-edit-status').locator('div').filter({ hasText: 'Select...' }).nth(3);
        this.dorpDawonStatus = page.locator('.css-s6708v-indicatorContainer').first();
        this.activeStatus = page.getByText('ACTIVE', { exact: true });
        this.removeStatus = page.getByText('REMOVED');
        this.chooseStatus = page.getByTestId('property-edit-status').locator('svg');
        this.publishCheckbox = page.getByTestId('property-edit-published').locator('a');
        this.choosePublisher = page.getByTestId('property-edit-publisher').locator('svg').nth(1);
        this.saveButton = page.getByTestId('button-save');

        this.editMenuPostPage = page.getByTestId('actions-dropdown');
        this.editActionButton = page.getByTestId('action-edit');
        this.stastusVerifcation = page.getByTestId('property-list-status');





    }





    createPost = async () => {

        await this.hamburgerMenu.waitFor();
        await this.hamburgerMenu.click();
        await this.happyFolder.waitFor();
        await this.happyFolder.click();
        await this.postFolder.waitFor();
        await this.postFolder.click();
        await this.newButtonPost.waitFor();
        await this.newButtonPost.click();
        await this.titlePost.fill('title');
        await this.content.waitFor();
        await this.content.fill('gal');
        await this.dorpDawonStatus.waitFor();
        await this.dorpDawonStatus.click();
        await this.activeStatus.waitFor();
        await this.activeStatus.click();
        await this.publishCheckbox.click();
        await this.choosePublisher.waitFor();
        await this.choosePublisher.click();
        await this.saveButton.click('button');







    }
    editePost = async () => {
        await this.page.waitForURL(/\/admin\/resources\/Post/, { timeout: 10000 });

        await this.editMenuPostPage.waitFor();
        await this.editMenuPostPage.click();
        await this.editActionButton.waitFor();
        await this.editActionButton.click();
        await this.dorpDawonStatus.waitFor();
        await this.dorpDawonStatus.click();

        await this.removeStatus.click();
        await this.saveButton.click('button', { timeout: 5000 });
        await expect(this.stastusVerifcation).toHaveText('REMOVED');

    }

}

