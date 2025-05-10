const checkoutLocators = require('./checkoutLocators');
const utility = require('../../Utilitys/utility');

class CheckoutActions {
    async getSubTotalAmout() {
        const subTotal = await CheckoutLocators.subTotal.getText();
        const subTotalIntoNumber = await utility.covertTextToNumber(subTotal);
        return subTotalIntoNumber;
        }

    async getGrandTotalAmount() {
        const grandTotal = await checkoutLocators.grandTotal.getText();
        const grandTotalIntoNumber = await utility.covertTextToNumber(grandTotal);
        return grandTotalIntoNumber;
    }

    async clickOnCheckoutButton() {
        await checkoutLocators.checkoutButton.click();
    }
}

module.exports = new CheckoutActions();