import { test } from '@playwright/test';
import { ApiFunction } from './api';
import *  as nodeFetch from "node-fetch"

const LoginPage = require('../pages/loginPage');
const PostPage = require('../pages/postPage');


let publisherId;
let postId;

test.describe('Test 2: CRUD using API', () => {
    test.beforeAll(async () => {
        // Create Publisher via API
        await ApiFunction.createPublisher('Test Publisher');

        // Create Post via API
        ApiFunction.createPost('Test Post', 'This is a test post.', publisherId);
    });


    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.visit();
        await loginPage.signIn();
    });

    test('should edit post status via UI and verify status', async ({ page }) => {
        const postPage = new PostPage(page);

        // Navigate to Post section
        await postPage.navigateToPostSection();

        // Edit Post status
        await postPage.editPost('Test Post', 'Removed');

        // Verify Post Status
        await postPage.verifyPostStatus('Test Post', 'Removed');
    });

    test('should edit post status via API and verify via UI', async ({ page }) => {
        const postPage = new PostPage(page);

        // Edit Post status via API
        await editPost(postId, 'removed');

        // Navigate to Post section to verify
        await postPage.navigateToPostSection();

        // Verify Post Status
        await postPage.verifyPostStatus('Test Post', 'Removed');
    });
});
