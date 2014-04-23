//--------------------------BASKET STORING - LOCAL STORAGE ----------------------
//Sets the start value of the basket to Local Storage total -- ON PAGE LOAD
function setBasketTotal() {
  var localStorageLength;
    localStorageLength = localStorage.length;
    basketTotal.innerHTML = localStorageLength;
}
//Checks when the user clicks on the Add To Basket Button and validates the product quantity input.
function basketButtonLoad(product_id, productTotalInDB, focusTarget) {
  var basketButton;
    basketButton = _("addToBasketButton");
    if (basketButton) {
        basketButton.addEventListener("click", function () {
          var productQuantity, errors, productQuantityError, productQuantityErrorinDB;
            productQuantity = +_('numberQuantityForProduct').value;
            errors = 0;
            //Validation to see if input is greater then 0.
            if (productQuantity < 1) {
                productQuantityError = _('numberValidate');
                productQuantityError.style.color = "red";
                productQuantityError.innerHTML = 'Please enter a quantity number';
                errors = errors + 1;
            } else {
                productQuantityError = _('numberValidate');
                productQuantityError.innerHTML = '';
            }
            //Validates if there is enough in Stock.
            if (productQuantity > productTotalInDB) {
                productQuantityErrorinDB = _('numberValidateInDB');
                productQuantityErrorinDB.style.color = "red";
                productQuantityErrorinDB.innerHTML = 'Sorry Not Enough in Stock.';
                errors = errors + 1;
            } else {
                productQuantityErrorinDB = _('numberValidateInDB');
                productQuantityErrorinDB.innerHTML = '';
            }
            //If no errors are found
            if (errors > 0) {
                //
            } else {
                basketAjax(product_id, productQuantity, focusTarget);
            }
        });
    }
}
//Ajax Request that fires off to find product information to store in local storage.
function basketAjax(product_id, productQuantity, focusTarget) {
    ajaxGet("SQL/collectProductsBasketSQL.php?data=" + product_id + "&productNo=" + productQuantity, storeItemInLocalStorage, focusTarget, null);

}
//Stores the JSON object in Local Storage
function storeItemInLocalStorage(jsonObj, focusTarget) {
  var json_output_parse, product_id, json_output_string;
    //Collects the product ID which I use as a key
    json_output_parse = JSON.parse(jsonObj);
    for (var i = 0; i < json_output_parse.length; i++) {
        product_id = json_output_parse[i].id;
    }
    //Actually Stores it in local storage
    json_output_string = JSON.stringify(json_output_parse, null, '\t');
    localStorage.setItem("item" + product_id, json_output_string);
    increaseBasketNumber(focusTarget)
}
//Increase the basket number so it doesn't update only on load
function increaseBasketNumber(focusTarget) {
  var localStorageLength;
    localStorageLength = localStorage.length;
    basketTotal.innerHTML = localStorageLength;
    if(focusTarget){
    focusTarget.innerHTML = "";
  }
    pageLoaded("");
    listAllItems();
}

window.addEventListener("load", setBasketTotal());
