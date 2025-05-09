const searchLocatos = require("./searchLocatos");

class SearchActions {
    async clickOnSearchIcon(){
        await searchLocators.searchIcon.click();
    }

    async enterSearchItermName(productName){
        await searchLocators.searchInputField.setVlaue(productName);
    }
}

module.exports = new SearchActions();