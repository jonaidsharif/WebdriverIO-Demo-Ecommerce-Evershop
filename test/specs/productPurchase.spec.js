const searchActions = require("..pages/search/searchActions");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const checkoutActions = require("../pages/checkout/checkoutActions");
const utility = require("../Utilitys/utility");

const productName = "Nike air zoom pegasus 35";
var productQty;

describe("Demo evershop site product purchase journey", () => {
    it("Should able to successfully search product", async () => {
        await searchActions.clickOnSearchIcon();
        await searchActions.enterSearchItemName(productName);
        await browser.keys("Enter");
    });

    it("Should able to successfully add product on the cart", async () => {
        await addToCartActions.clickOnProductFromList(productName);
        await addToCartActions.selectProductSize();
        await addToCartActions.selectColor();
        productQty = await utility.randomNumber(10, 1);
        await addToCartActions.enterProductQty(productQty);   
        await addToCartActions.clickOnAddToCartButton();    
        await addToCartActions.clickOnViewCartButton(); 
    });

    it("Should successful verify total amount and grand total amount", async () => {
        const singleProductPrice = await addToCartActions.getSingleProductPrice();
        const expectTotalPrice = productQty * singleProductPrice;

        const actualSubTotal = await checkoutActions.getSubTotalAmout();
        const actualGrandTotal = await checkoutActions.getGrandTotalAmount();
        expect(expectTotalPrice).toEqual(actualSubTotal);
        expect(expectTotalPrice).toEqual(actualGrandTotal);
    });
});
