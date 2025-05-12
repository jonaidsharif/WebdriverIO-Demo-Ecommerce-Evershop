const signupActions = require("../login/loginActions")
const loginActions= require("../pages/login/loginActions");
const utility = require("../utilities/utility");

var email = "";
var fullName = "";
var password = "";

describe("Demo evershop site product purchase journey", () => {
    it("Should able to successfully register", async () => {
        await loginActions.clickOnProfileIcon();
        await signupActions.clickOnCreateAccount();
        fullName = await utility.createRandomString(5);
        email = fullName + "@gmail.com";
        password = await utility.createRandomString(8);
        await signupActions.enterFullName(fullName);
        await loginActions.enterEmail(email);
        await loginActions.enterEmail(password);
        await loginActions.clickOnSignButton();
        await browser.pause(3000);
    });

    it("Should able to successfully logout", async () => {
        await loginActions.clickOnProfileIcon();
        await signupActions.enterFullName(fullName);
        await browser.pause(5000);
    });

    it("Should able to successfully login", async () => {
        await loginActions.clickOnProfileIcon();
        await browser.pause(5000);
        await loginActions.enterEmail(email);
        await loginActions.enterEmail(password);
        await loginActions.clickOnSubmitButton();
    });
});