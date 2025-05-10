class CheckoutLocators {
    get subTotal() {
        return $("//div[contains(text(), 'Sub total')]/following-sibling::div");
    }

    get grandTotal() {
        return $("//div[(@class= 'grand-total-value')]");
    }

    get checkoutButton() {
        return $("//a[contains(@href, '/checkout')]");

    }
}

module.exports = new CheckoutLocators();




// //div[@class = 'text-right'] Sub Total XPath is not good practice
// or 
//div[contains(text(), 'Sub total')]/following-sibling::div is the good practice