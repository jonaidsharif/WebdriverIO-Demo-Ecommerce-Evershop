class AddToCartLocators {
    async productFromList(productName){
        return $(`//a[contains(@href,'146')]/span[contains(text(),'${productName}')]`)
    }

    get productSize(){
        return $("//a[@href='#' and contains(text(), 'M')]");
    }
    
    get productColor(){
        return $("//a[@href='#' and contains(text(), 'Black')]");
    }

    get productOtyField(){
        return $("//input[@name='qty']");
    }
    
    get buttonAddToCart(){
        return $("//button[@class='button primary outline']");
    }

    get buttonViewCartFromModal(){
        return $("//a[@class='add-cart-popup-button']");
    }
}

module.exports = new AddToCartLocators();