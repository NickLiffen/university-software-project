//Function that meand I don't have to type getElementById all the time!!
function _(el) {
    return document.getElementById(el);
}
//------------------------ Home Screen Printout ----------------------
var pageLoaded;
pageLoaded = function () {
    var xhr, target, changeListener;
    target = _("collectInfo");
    xhr = new XMLHttpRequest();
    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json(xhr.responseText, target);
        }
    };
    xhr.open("GET", "ajax/sql/collectProductsSQL.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();

};
//Parses the JSON Object created and formats it to the way I like
function json(jsonObj, target) {
    var json_output = JSON.parse(jsonObj);
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
        var output = "<div id='item" + json_output[i].id + "' class='item'>" +
            "<h2> Product Name: " + json_output[i].name + '</h2>' +
            "<p><img src='../CMS/Images/" + json_output[i].name + ".jpg'> </p>" +
            "<p> Amount in Stock: " + json_output[i].quantity + '</p>' +
            "<p> Product Description: " + json_output[i].description + '</p>' +
            "<p> Product Category: " + json_output[i].category + '</p>' +
            "<p> Product Price: £" + json_output[i].price + '</p>' +
            "</div>";
        //This outputs the array
        target.innerHTML += output;
    }
};
//------------------------ MODAL ----------------------
/*This sets the liseteners for the modal - it checks the positioning of the modal
and then bubles up to the id of the modal- this means the user can click anywhwere
on the product and not one small space */
function setListeners() {
    var itemsContainer = _("collectInfo");
    itemsContainer.addEventListener("click", function (event) {
        var e = event.target;
        while (e.id.indexOf('item') == -1) {
            e = e.parentNode;
        }
        var data = e.id;
        modalAjax(data);
    }, false);

}
//Sends off the AJAX Request to look for product clicked on in database.
function modalAjax(data) {
    //Creates AJAX request
    var xhr, changeListener;
    var data = data;
    xhr = new XMLHttpRequest();
    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            jsonModal(xhr.responseText);
        }
    };
    xhr.open("GET", "ajax/sql/collectProductsModalSQL.php?data=" + data, true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
};
//Formatting the way it is outputting - PARSE the JSON Object
function jsonModal(jsonObj) {
    var json_output = JSON.parse(jsonObj);
    //Loops through the parsed object.
    for (var i = 0; i < json_output.length; i++) {
        //Collects the products ID -- (THIS IS FOR THE BASKET!!)
        var product_id = json_output[i].id;
        //Collects the product quantity -- (THIS IS FOR THE BASKET!!)
        var productTotalInDB = +json_output[i].quantity;
        //This is for the MODAL
        var output = "<div id='item" + json_output[i].id + "' class='itemModal'>" +
            "<h2> Product Name: " + json_output[i].name + "</h2>" +
            "<p><img src='../CMS/Images/" + json_output[i].name + ".jpg'></p>" +
            "<div id='pmodal'>" +
            "<p><span class='bold'>Amount in Stock:</span> " + json_output[i].quantity + "</p>" +
            "<p><span class='bold'>Description:</span> " + json_output[i].description + "</p>" +
            "<p><span class='bold'>Category:</span> " + json_output[i].category + "</p>" +
            "<p><span class='bold'>Price: £</span> " + json_output[i].price + "</p>" +
            "<p><span class='bold'>How many would you like: </span><input type ='number' id ='numberQuantityForProduct'> <p><span id='numberValidate'></span></p><p><span id='numberValidateInDB'></span></p></p>" +
            "<p><input type='button' value='Add to Basket!' id='addToBasketButton'><p>" +
            "</div>" +
            "</div>";

        injectIntoModal(product_id, productTotalInDB, output);
    }
};
//Injects product information into Modal
function injectIntoModal(product_id, productTotalInDB, data) {
    var modal = document.querySelector(".modal");
    modal.innerHTML = data;
    toggleModal(modal);
    basketButtonLoad(product_id, productTotalInDB, modal);
}
//Toggles the Modal
function toggleModal(modal) {
    modal.classList.toggle('modal--hidden');
    closeModal(modal);
}
//Closes the Modal using the ESC key
function closeModal(modal) {
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            modal.classList.toggle('modal--hidden');
        }
    }
};

//--------------------------BASKET STORING----------------------
//Sets the start value of the basket to Local Storage total -- ON PAGE LOAD
function setBasketTotal() {
    var localStorageLength = localStorage.length;
    basketTotal.innerHTML = localStorageLength;
}
//Checks when the user clicks on the Add To Basket Button and validates the product quantity input.
function basketButtonLoad(product_id, productTotalInDB, modal) {
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
                basketAjax(product_id, productQuantity, modal);
            }
        });
    }
}
//Ajax Request that fires off to find product information to store in local storage.
function basketAjax(product_id, productQuantity, modal) {
    var xhr, changeListener;
    var data = product_id;
    var productNo = productQuantity;
    xhr = new XMLHttpRequest();
    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            storeItemInLocalStorage(xhr.responseText, modal);
        }
    };
    xhr.open("GET", "ajax/sql/collectProductsBasketSQL.php?data=" + data + "&productNo=" + productNo, true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}
//Stores the JSON object in Local Storage
function storeItemInLocalStorage(jsonObj, modal) {
    //Collects the product ID which I use as a key
    var json_output_parse = JSON.parse(jsonObj);
    for (var i = 0; i < json_output_parse.length; i++) {
        var product_id = json_output_parse[i].id;
    }
    //Actually Stores it in local storage
    var json_output_string = JSON.stringify(json_output_parse, null, '\t');
    localStorage.setItem("item" + product_id, json_output_string);
    increaseBasketNumber(modal)
}
//Increase the basket number so it doesn't update only on load
function increaseBasketNumber(modal) {
    var localStorageLength = localStorage.length;
    basketTotal.innerHTML = localStorageLength;
    closeModalOnProductComplete(modal)
    listAllItems();
}
//When the user adds the product to there basket it disappears
function closeModalOnProductComplete(modal) {
    if (modal) {
        modal.classList.toggle('modal--hidden');
    }
}

//------------------BASKET GETTING AND MODIFYING ---------------
/* This function prints everything out when the user hovers over the basket. This function doesnt actually do the hovering but it injects it into a DIV. When the user hovers over the basket this is shown.*/
function listAllItems() {
  var target = _('basketTotalOnHover');
  //This clears the basket. Every time they hover over it it starts off empty and not what they saw last time.
  target.innerHTML = "";
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
the amount of a certain product they have got in the basket */
function changesInBasket(productTotalInDB) {
    //Gets the button that says 'Remove'
    var getRemoveButton = document.getElementsByClassName("removeProductFromBasket");
    //Gets the button that says 'Modify'
    var getModifyButton = document.getElementsByClassName("modifyQuantity");
    //Delete Local Storage.
    for (var i = 0, j = getRemoveButton.length; i < j; i++) {
        getRemoveButton[i].addEventListener("click", function (event) {
            //Bubbles up and finds the ID, then deletes it.
            var e = event.target;
            while (e.id.indexOf('item') == -1) {
                e = e.parentNode;
            }
            var data = e.id;
            console.log("Delete Product ID: " + data);
            //This removes the product from local storage
            localStorage.removeItem(data);
            //This shows the message saying the product has been deleted
            var showDelete = _("productDeleteShow").style.display = 'block';
            //This sets the timeout that makes the message disapear after 3 seconds.
            window.setTimeout(vanishText, 1000);
        }, false);
    }
    //Modify Local Storage
    for (var i = 0, j = getModifyButton.length; i < j; i++) {
            getModifyButton[i].addEventListener("click", function (event) {
            var newQuantity = document.getElementsByClassName("modifyQuantityInLocalStorage");
            for(var i = 0;i < newQuantity.length;i++){
                var finalNumber = newQuantity[i].value;
                }
            //Bubbles up and finds the ID of the product they want to modify
            var e = event.target;
            while (e.id.indexOf('item') == -1) {
                e = e.parentNode;
            }
            var data = e.id;
            var totalinDB = productTotalInDB;
            console.log("Modify Product ID: " + data);
            console.log("Amount in DB: " + totalinDB);
            console.log("Basket Quantity: " + finalNumber);
            //Checks to see if there is enough in stock, if not then it fails.
            if (finalNumber > totalinDB) {
                var textHere = _("changeQuantityInBasketFail");
                textHere.innerHTML = "<h1>Not enough in Stock - Maxium:" + totalinDB + "</h1>";
                textHere.style.display = 'block';
                window.setTimeout(notLoad, 4000);
            } else {
                basketAjax(data, finalNumber)
                var showModify = _("productModifyShow").style.display = 'block';
                window.setTimeout(vanishText, 1000);
            }
        });
    }
}
function notLoad(){
  var showModify = _("changeQuantityInBasketFail").style.display = 'none';
}
//Makes the text that comes up saying 'Product Deleted' display none.
function vanishText() {
    var showDelete = _("productDeleteShow").style.display = 'none';
    var showDelete = _("productModifyShow").style.display = 'none';
    increaseBasketNumberAfterRemove();
}

function increaseBasketNumberAfterRemove() {
    var localStorageLength = localStorage.length;
    basketTotal.innerHTML = localStorageLength;
    listAllItems();
}
//-------------------EVENT LISTENERS-----------
window.addEventListener("load", setBasketTotal());
window.addEventListener("load", pageLoaded);
window.addEventListener("load", setListeners());
window.addEventListener("load", listAllItems());
