//------------------------ Focus ----------------------
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
        focusAjax(data);
    }, false);

}
//Sends off the AJAX Request to look for product clicked on in database.
function focusAjax(data) {
    ajaxGet("SQL/collectProductsModalSQL.php?data=" + data, jsonFocus, null);
};
//Formatting the way it is outputting - PARSE the JSON Object
function jsonFocus(jsonObj) {
    var json_output = JSON.parse(jsonObj);
    //Loops through the parsed object.
    for (var i = 0; i < json_output.length; i++) {
        //Collects the products ID -- (THIS IS FOR THE BASKET!!)
        var product_id = json_output[i].id;
        //Collects the product quantity -- (THIS IS FOR THE BASKET!!)
        var productTotalInDB = +json_output[i].quantity;
        //This is for the MODAL
        var output = "<input type='button' id='backButtonPress' value ='Back'/>" +
            "<div id='item" + json_output[i].id + "' class='itemModal'>" +
            "<h2> Product Name: " + json_output[i].name + "</h2>" +
            "<p><img src='../CMS/Images/" + json_output[i].id + ".jpg'></p>" +
            "<div id='pmodal'>" +
            "<p><span class='bold'>Amount in Stock:</span> " + json_output[i].quantity + "</p>" +
            "<p><span class='bold'>Description:</span> " + json_output[i].description + "</p>" +
            "<p><span class='bold'>Category:</span> " + json_output[i].category + "</p>" +
            "<p><span class='bold'>Price: £</span> " + json_output[i].price + "</p>" +
            "<p><span class='bold'>How many would you like: </span><input type ='number' id ='numberQuantityForProduct'> <p><span id='numberValidate'></span></p><p><span id='numberValidateInDB'></span></p></p>" +
            "<p><input type='button' value='Add to Basket!' id='addToBasketButton'><p>" +
            "</div>" +
            "</div>";

        injectIntoFocus(product_id, productTotalInDB, output);
    }
};
//Injects product information into Modal
function injectIntoFocus(product_id, productTotalInDB, data) {
    //This is here becuase if they are on the page where they 'search' for products, it sets the sarch features display to nothing. More focus on products.
    var searchFeatures = _("disapearOnCheckout");
    if(searchFeatures){
      searchFeatures.style.display = 'none';
    }
    var oldTarget =   _("collectInfo");
    var focusTarget = _("focusProduct");
    oldTarget.innerHTML = "";
    focusTarget.innerHTML = data;
    basketButtonLoad(product_id, productTotalInDB, focusTarget);
    backButton(focusTarget);
    closeFocus(focusTarget);
}
//Closes the Focus through pressing the back button.
function backButton(focusTarget){
  var backButtonPressed = _("backButtonPress");
  if(backButtonPressed){
  backButtonPressed.addEventListener("click", function() {
    focusTarget.innerHTML = "";
    pageLoaded("");
  });
}
}
//Closes the Focus using the ESC key
function closeFocus(focusTarget) {
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            focusTarget.innerHTML = "";
            pageLoaded("");
        }
    }
};

window.addEventListener("load", setListeners());
