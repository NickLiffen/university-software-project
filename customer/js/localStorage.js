//--------------------------BASKET STORING - LOCAL STORAGE ----------------------
//Sets the start value of the basket to Local Storage total -- ON PAGE LOAD
function setBasketTotal() {
    var localStorageLength = localStorage.length;
    basketTotal.innerHTML = localStorageLength;
}
//Checks when the user clicks on the Add To Basket Button and validates the product quantity input.
function basketButtonLoad(product_id, productTotalInDB, focusTarget) {
    var basketButton = _("addToBasketButton");
    if (basketButton) {
        basketButton.addEventListener("click", function () {
            var productQuantity = +_('numberQuantityForProduct').value;
            var errors = 0;
            //Validation to see if input is greater then 0.
            if (productQuantity < 1) {
                var productQuantityError = _('numberValidate');
                productQuantityError.style.color = "red";
                productQuantityError.innerHTML = 'Please enter a quantity number';
                errors = errors + 1;
            } else {
                var productQuantityError = _('numberValidate');
                productQuantityError.innerHTML = '';
            }
            //Validates if there is enough in Stock.
            if (productQuantity > productTotalInDB) {
                var productQuantityErrorinDB = _('numberValidateInDB');
                productQuantityErrorinDB.style.color = "red";
                productQuantityErrorinDB.innerHTML = 'Sorry Not Enough in Stock.';
                errors = errors + 1;
            } else {
                var productQuantityErrorinDB = _('numberValidateInDB');
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
    var xhr, changeListener;
    var data = product_id;
    var productNo = productQuantity;
    xhr = new XMLHttpRequest();
    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            storeItemInLocalStorage(xhr.responseText, focusTarget);
        }
    };
    xhr.open("GET", "SQL/collectProductsBasketSQL.php?data=" + data + "&productNo=" + productNo, true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}
//Stores the JSON object in Local Storage
function storeItemInLocalStorage(jsonObj, focusTarget) {
    //Collects the product ID which I use as a key
    var json_output_parse = JSON.parse(jsonObj);
    for (var i = 0; i < json_output_parse.length; i++) {
        var product_id = json_output_parse[i].id;
    }
    //Actually Stores it in local storage
    var json_output_string = JSON.stringify(json_output_parse, null, '\t');
    localStorage.setItem("item" + product_id, json_output_string);
    increaseBasketNumber(focusTarget)
}
//Increase the basket number so it doesn't update only on load
function increaseBasketNumber(focusTarget) {
    var localStorageLength = localStorage.length;
    basketTotal.innerHTML = localStorageLength;
    if(focusTarget){
    focusTarget.innerHTML = "";
  }
    pageLoaded("");
    listAllItems();
}

window.addEventListener("load", setBasketTotal());
