const signupLocators = require("./signupLocators");

class SignupActions extends loginActions {
    async enterFullName(fullName) {
        await signupLocators.fullNameInputField.setValue(fullName);
    }

    async clickOnCreateAccount() {
        await signupLocators.createAcountLink.click();
    }
}

module.exports = new SignupLocators();