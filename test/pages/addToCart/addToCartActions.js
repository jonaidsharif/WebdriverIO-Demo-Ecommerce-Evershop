const addToCartLocators = require('./addToCartLocators');

class AddToCartActions {
    async clickOnProductFromList(productName) {
         await addToCartLocators.productFromList(productName).click();
    }

    async selectProductSize() {
        await addToCartLocators.productSize.click();
        await browser.pause(3000);
    }

    async selectColor() {
        await addToCartLocators.productColor.click();
        await browser.pause(3000);
    }

    async enterProductQty(qty) {
        await addToCartLocators.inputQtyField(qty);
    }

    async clickOnAddToCartButton() {
        await addToCartLocators.buttonAddToCart.click();
    }

    async clickOnViewCartButton() {
        await addToCartLocators.buttonViewCartFromModal.click();
    }

    async getSingleProductPrice() {
        const productPrice = await addToCartLocators.priceFromProductPage.getText();
        const grandTotalNumber = await utility.covertTextToNumber(productPrice);
        return grandTotalNumber;

        // const productPriceIntoNumber = parseFloat(productPrice.replacce(/[$,]/g, ""));
        // return productPriceIntoNumber;
    }
}

module.exports = new AddToCartActions();