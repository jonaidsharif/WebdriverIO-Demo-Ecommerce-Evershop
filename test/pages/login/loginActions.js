const loginLocators = require("./loginLocators");

class LoginActions {
    async clickOnProfileIcon() {
        await loginLocators.profileIcon.click();
    }

    async enterEmail(email) {
        await loginLocators.loginEmailInput.setValue(email);
    }

    async enterPassword(password) {
        await loginLocators.loginPasswordInput.setValue(password);
    }

    async clickOnSignButton() {
        await loginLocators.loginButton.click();
    }

    async clickOnLogoutLink() {
        await loginLocators.logoutLink.click();
    }
 }

module.exports = new LoginActions();

