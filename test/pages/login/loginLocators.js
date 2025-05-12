class Login {
    get profileIcon() {
        return $("//a[contains(@href= 'https://demo.evershop.io/account/login')]");
    }

    get loginEmailInput() {
        return $("//input[@name = 'email']");
    }

    get loginPasswordInput() {
        return $("//button[@type = 'submit']");
    }

    get logoutLink() {
        return $("//a[contains(text(), 'Logout')]");
    }
}

module.exports = new Login();
// Compare this snippet from test/pages/login/loginLocators.js:


// //button[@class = 'button primary'] or 

// //button[@type = 'submit']