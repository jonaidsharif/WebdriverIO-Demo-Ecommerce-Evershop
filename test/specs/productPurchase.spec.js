const searchActions = require("..pages/search/searchActions");
const addToCartActions = require("../pages/addToCart/addToCartActions");
const checkoutActions = require("../pages/checkout/checkoutActions");
const utility = require("../utilities/utility");

// const productName = "Nike air zoom pegasus 35";
const productName = "";
var productQty;
var singleProductPrice;

describe("Demo evershop site product purchase journey", () => {
    it("Should able to successfully search product", async () => {
        const number = await utility.randomNumber(4, 1);
        await searchActions.selectProduct(number);
        await searchActions.getProductList();
        await searchActions.clickOnSearchIcon();
        await searchActions.enterSearchItemName(productName);
        await browser.keys("Enter");
    });

    it("Should able to successfully add product on the cart", async () => {
        await addToCartActions.clickOnProductFromList(productName);
        const number = await utility.randomNumber(2, 1);
        await addToCartActions.selectProductSize(number);
        await addToCartActions.selectColor();
        productQty = await utility.randomNumber(10, 1);
        console.log("productQty", productQty);
        await addToCartActions.enterProductQty(productQty);
        singleProductPrice = await addToCartActions.getSingleProductPrice();   
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
