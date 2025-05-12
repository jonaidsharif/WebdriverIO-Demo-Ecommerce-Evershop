class SearchLocators(
    get searchIcon() {
        return $("//a[@class='search-icon']");
    }

    get searchInputField(){
        return $("//input[@placeholder='Search']");
    }

    productList() {
        return $("(//div[contains(@class, 'product-name')])[${number}]");
    }
)

module.exports = new SearchLocators();

// ul[contains(@class, 'variant-option-list')]/li/a

// (//ul[contains(@class, 'variant-option-list')]/li/a)[1] productSize firstOption
// (//ul[contains(@class, 'variant-option-list')]/li/a)[2] productSize secondOption