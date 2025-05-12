const searchLocatos = require("./searchLocatos");

class SearchActions {
    async clickOnSearchIcon(){
        await searchLocators.searchIcon.click();
    }

    async enterSearchItermName(productName){
        await searchLocators.searchInputField.setVlaue(productName);
    }

    async searchproductName() {
        await this.clickOnSearchIcon();
        await this.enterSearchItermName(productName);
    }

    async selectedProduct(num) {
        await searchLocators.getList(num).getText();
    }
}

module.exports = new SearchActions();