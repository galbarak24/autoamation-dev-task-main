export class LoginPage {
    constructor(page) {
        this.page = page;

        this.email = page.locator('input[name="email"]')
        this.password = page.locator('input[name="password"]')
        this.logInButton = page.getByRole('button', { name: 'Login' })

    }
    visit = async () => {
        await this.page.goto('/')
    }

    signIn = async () => {
        const email = 'admin@example.com';
        const password = 'password';

        await this.email.waitFor();
        await this.email.fill(email);
        await this.password.waitFor();
        await this.password.fill(password);
        await this.logInButton.waitFor();
        await this.logInButton.click();
    }

    isLoggedIn = async () => {
        await this.page.waitForURL(/\/admin/, { timeout: 3000 });

    }




}

