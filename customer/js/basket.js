//------------------BASKET GETTING AND MODIFYING ---------------
/* This function prints everything out when the user hovers over the basket. This function doesnt actually do the hovering but it injects it into a DIV. When the user hovers over the basket this is shown.*/
function listAllItems() {
  var target = _('basketTotalOnHover');
  //This clears the basket. Every time they hover over it it starts off empty and not what they saw last time.
  target.innerHTML = "";
  target.innerHTML = "Basket..."
    for (var a in localStorage) {
        var json_output = JSON.parse(localStorage[a]);
        for (var i = 0; i < json_output.length; i++) {
            var productTotalInDB = +json_output[i].quantity;
            var output =
                "<div id='item" + json_output[i].id + "'>" +
                "<h3><span class='bold'>Product Name:</span> " + json_output[i].name + '</h3>' +
                "<p><span class='bold'>Product Price: £</span>" + json_output[i].price + '</p>' +
                "<p><span class='bold'>Quantity In Basket:</span> <input type='number' class='modifyQuantityInLocalStorage' value ='" + json_output[i].BasketTotal + "'</p>" +
                "<p><span class='bold'>Total Cost: £</span>" + (json_output[i].price * json_output[i].BasketTotal) + '</p>' +
                "<p><span class='centre'><input type='button' class='removeProductFromBasket' value='Remove'/><input type='button' class='modifyQuantity' value='Modify'/></span></p>" +
                "</div>";

                target.innerHTML += output;
        }
    }
    target.innerHTML += "<input type='button' id='clearBasket' value='Empty'/><input type='button' id='checkoutBasket' value='Checkout'/>";
    basketOnHoverLoad(productTotalInDB, target);
}
/* This function waits and sees when the user hovers over the basket, when they do, a DIV is made visible. When the user hovers away from the basket the div is hidden. This function also allows the user to hover over the div to
amend there product information.*/
function basketOnHoverLoad(productTotalInDB, target) {
    var getBasket = document.getElementsByClassName("basketSurrounding");
    //When the user hovers over the basket and div showing prodict information
    for (var i = 0, j = getBasket.length; i < j; i++) {
        getBasket[i].addEventListener("mouseover", function () {
            if (localStorage.length == 0) {
                target.style.display = 'none';
            } else {
                target.style.display = 'block';
            }
            /*This adds the event listener to the div showing the product information, the reason this is here is
            becuase this div should only be accesible from when the user is hovering over the basket*/
            test.addEventListener("mouseover", function () {
                if (localStorage.length == 0) {
                    target.style.display = 'none';
                } else {
                    test = _('basketTotalOnHover')
                    target.style.display = 'block';
                }
            })
        });
    }
    //This makes the basket hidden when the user hovers away from the div showing the basket content
    var test = _('basketTotalOnHover');
    test.addEventListener("mouseout", function () {
        test.style.display = 'none';
    });
    //This makes the basket hidden then the user hovers away from the basket image
    for (var i = 0, j = getBasket.length; i < j; i++) {
        getBasket[i].addEventListener("mouseout", function () {
            var test = _('basketTotalOnHover');
            test.style.display = 'none';
        });
    }
    changesInBasket(productTotalInDB);
}
/*This function removes a product once the user has clicked on the 'remove button' and also modifies
the amount of a certain product they have got in the basket. I tried to use getElementByID but that
didn't work. When i do the classes it workes for delete but not for modify. It isn't getting the
correct values for old and new quantity. */
function changesInBasket(productTotalInDB) {
    //Gets the button that says 'Remove'
    var getRemoveButton = document.getElementsByClassName("removeProductFromBasket");
    //Gets the button that says 'Modify'
    var getModifyButton = document.getElementsByClassName("modifyQuantity");
    //Gets the Clear Baskt Button.
    var getModifyButton = _("clearBasket");
    //Gets the Checkout Basket Button.
    var getCheckoutButton = _("checkout");

    //Delete Local Storage.
    for (var i = 0, j = getRemoveButton.length; i < j; i++) {
        getRemoveButton[i].addEventListener("click", function (event) {
            //Bubbles up and finds the ID, then deletes it.
            var e = event.target;
            while (e.id.indexOf('item') == -1) {
                e = e.parentNode;
            }
            var data = e.id;
            //This removes the product from local storage
            localStorage.removeItem(data);
            //This shows the message saying the product has been deleted
            var showDelete = _("productDeleteShow").style.display = 'block';
            //This sets the timeout that makes the message disapear after 3 seconds.
            window.setTimeout(vanishText, 1000);
        }, false);
    }

    //Modify Local Storage --- BUG HERE ----
    for (var i = 0, j = getModifyButton.length; i < j; i++) {
            getModifyButton[i].addEventListener("click", function (event) {
              //Bubbles up and finds the ID of the product they want to modify
              var e = event.target;
              while (e.id.indexOf('item') == -1) {
                  e = e.parentNode;
              }
              var product_id = e.id;

              //Loops through to collect the value of the new quantity. THINK THIS IS WRONG
              var newQuantity = document.getElementsByClassName("modifyQuantityInLocalStorage");
                for(var i = 0, j = newQuantity.length; i < j; i++){
                  var newValue = newQuantity[i].value;
                  console.log(newValue);
                }

            var totalinDB = productTotalInDB;
            console.log("Product ID: " + product_id);
            console.log("Amount in DB: " + totalinDB);
            console.log("Amount in Basket: " + newValue);
            //Checks to see if there is enough in stock, if not then it fails.
            if (newValue > totalinDB) {
                var textHere = _("changeQuantityInBasketFail");
                textHere.innerHTML = "<h1>Not enough in Stock - Maxium:" + totalinDB + "</h1>";
                textHere.style.display = 'block';
                window.setTimeout(notLoad, 4000);
            } else {
                basketAjax(product_id, newValue)
                var showModify = _("productModifyShow").style.display = 'block';
                window.setTimeout(vanishText, 1000);
            }
        });
    }
    //Clears Local Storage.
    if(getModifyButton){
      getModifyButton.addEventListener("click", function(){
        localStorage.clear();
        var basketEmpty = _("basketEmptied").style.display ='block';
        window.setTimeout(vanishText, 1000);
      });
    }
    if(checkoutBasket){
      checkoutBasket.addEventListener("click", function(){
        //Clears the screen of anything not needed.
        var clearScreen = _("collectInfo");
        clearScreen.innerHTML = "";
        var clearTitle = _("disapearOnCheckout").style.display = "none";
        //This function is found in checkout.js
        getContent(clearScreen);
      });
    }
}
function notLoad(){
  var showModify = _("changeQuantityInBasketFail").style.display = 'none';
}
//Makes the text that comes up saying 'Product Deleted' display none.
function vanishText() {
    var showEmpty  = _("basketEmptied").style.display ="none";
    var showDelete = _("productDeleteShow").style.display = 'none';
    var showDelete = _("productModifyShow").style.display = 'none';
    increaseBasketNumberAfterRemoveorModify();
}
//Increases the basket total after remove or modification
function increaseBasketNumberAfterRemoveorModify() {
    var localStorageLength = localStorage.length;
    basketTotal.innerHTML = localStorageLength;
    listAllItems();
}
window.addEventListener("load", listAllItems());
