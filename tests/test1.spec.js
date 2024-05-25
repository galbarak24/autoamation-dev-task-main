import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-object/LoginPage.js";
import { PublisherPage } from "../page-object/PublisherPage.js";
import { PostPage } from "../page-object/PostPage.js";







let loginPage;
let publisherPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    publisherPage = new PublisherPage(page);

    await loginPage.visit();
    await loginPage.signIn();
    await loginPage.isLoggedIn();
    await expect(page).toHaveURL(/\/admin/);

    const isNewPublisherExists = await page.locator('css=Publisher-list-id').isVisible();
    if (isNewPublisherExists) {
        await publisherPage.deletePublisher();
    }
});

test('Create publisher', async () => {
    await publisherPage.createNewPublisher();

});

test('Create and Edit  Post', async ({ page }) => {

    const postPage = new PostPage(page);

    await postPage.createPost();
    await postPage.editePost();




});





























