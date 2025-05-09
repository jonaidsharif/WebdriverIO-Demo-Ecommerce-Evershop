class SearchLocators(
    get searchIcon() {
        return $("//a[@class='search-icon']");
    }

    get searchInputField(){
        return $("//input[@placeholder='Search']");
    }
)

module.exports = new SearchLocators();