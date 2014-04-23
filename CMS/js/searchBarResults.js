
//AJAX function that sends the ONKEYUP letters.
function searchAJAX(str) {
  var target;
    if (str.length == 0) {
        _("collectInfo").innerHTML = "";
        _("collectInfo").style.border = "0px";
        return;
    }
    target = _("collectInfo");
    ajaxGet("SQL/searchDatabaseSQL.php?str=" + str, json, target, str);
}
//This function sends through the letters to the AJAC function.
function pageLoaded(str) {
  var fetchbutton;
    fetchbutton = _("searchBox");
    if (fetchbutton) {
        fetchbutton.addEventListener("focus", searchAJAX(str));
    }
}

function json(jsonObj, target, str) {
  var json_output, output;
    //Sets the page content to nothing so we don't see multiple of the same products on screen.
    target.innerHTML = "";
    json_output = JSON.parse(jsonObj);
    //Checks to see if anything has come back from the search. If nothing has. Prints out message.
    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>No Items where found for " + str + " Sorry!<p></div>";
    } else {
        //Starts the loop
        for (var i = 0; i < json_output.length; i++) {
            output = "<div id='item" + json_output[i].id + "' class='item'>" +
                '<h2> Product Name: ' + json_output[i].name + '</h2>' +
                "<p><img src='../CMS/Images/" + json_output[i].id + ".jpg'></p>" +
                '<p> Product Quantity: ' + json_output[i].quantity + '</p>' +
                '<p> Product Description: ' + json_output[i].description + '</p>' +
                '<p> Product Category: ' + json_output[i].category + '</p>' +
                '<p> Product Price: £' + json_output[i].price + '</p>' +
                "<p> Delete Product? <input type='button' class='delete' value='Delete'/> </p>" +
                "<p> Update Product? <input type='button' class='modify' value='Modify'/> </p>" +
                "</div>";

            //This outputs the array
            target.innerHTML += output;
            getButtons(str, target);
        }
    }
}

//This function collects the buttons for Deleting and Modiying a product.
function getButtons(str, target) {
  var fetchRemoveButton, fetchModifyButton;
    //Gets the button that says 'Remove'
    fetchRemoveButton = _c("delete");
    //Gets the button that says 'Modify'
    fetchModifyButton = _c("modify");
    //Remove Button.
    for (var i = 0, j = fetchRemoveButton.length; i < j; i++) {
        fetchRemoveButton[i].addEventListener("click", function () {
          var e, productID, newID;
            //Bubbles up and finds the ID of the product they want to modify
            e = event.target;
            while (e.id.indexOf('item') == -1) {
                e = e.parentNode;
            }
            productID = e.id;
            //Removes everything but the numbers.
            newID = productID.replace(/[^0-9.]/g, "");
            ajaxDelete(newID, str);
        });
    }
    //Modify Button.
    for (var i = 0, j = fetchModifyButton.length; i < j; i++) {
        fetchModifyButton[i].addEventListener("click", function (event) {
          var e, productID, newID;
            //Bubbles up and finds the ID of the product they want to modify
            e = event.target;
            while (e.id.indexOf('item') == -1) {
                e = e.parentNode;
            }
            productID = e.id;
            //Removes everything but the numbers.
            newID = productID.replace(/[^0-9.]/g, "");
            ajaxModify(newID, str, target);
        });
    }
}

function getSearchBar(){
    var getSearch;
    getSearch = _("searchBox");
    if(getSearch){
      getSearch.addEventListener("keyup", function(){
        getSearch.addEventListener("focus", searchAJAX(this.value));
      });
  }
}
window.addEventListener("load", getSearchBar());
