//This function sends through the letters to the AJAC function.
function pageLoaded(str) {
    var fetchbutton = _("searchForProducts");
    if (fetchbutton) {
        fetchbutton.addEventListener("focus", validateNumber(str));
    }
}
//Checks to see if the input is number or not.
function validateNumber(str) {
    //Checks to see if it a number and the users input is greater then 0
    if (str.length > 0 && isNumber(str)) {
        _("searchStockTarget").style.display = 'block';
        _("hide").style.display = 'none';
        _("searchBarValidate").innerHTML = '';
        searchBar(str);
    }
    //Checks to see if the unders input is equeals to 0. This is needed otherwise the 'Must be a number would print' when it was emoty
    else if (str.length == 0) {
        _("hide").style.display = 'block';
        _("searchStockTarget").style.display = 'none';
        _("searchBarValidate").innerHTML = '';
    }
    //If it is not a number is prints this message
    else {
        _("hide").style.display = 'block';
        _("searchStockTarget").style.display = 'none';
        var error = _("searchBarValidate");
        error.style.color = 'red';
        error.innerHTML = 'Must be a number';
        return false;
    }
}
//Runs a search on the users input.
function searchBar(str) {
    var target;
    target = document.getElementById("searchStockTarget");
    ajaxGet("SQL/searchDatabaseSQL.php?str=" + str, searchResults, target, str);
}
//Outputs the items the way I want it.
function searchResults(jsonObj, target, str) {
    target.innerHTML = "";
    var json_output = JSON.parse(jsonObj);
    //Checks to see if anything has come back from the search. If nothing has. Prints out message.
    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>You have no stock with less then " + str + " remaining!<p></div>";
    } else {
        //Starts the loop
        for (var i = 0; i < json_output.length; i++) {

            var output = "<div id='item" + json_output[i].id + "' class='item'>" +
                '<h2> Product Name: ' + json_output[i].name + '</h2>' +
                "<p><img src='../CMS/Images/" + json_output[i].id + ".jpg'></p>" +
                "<p class='bold'> Product Quantity: " + json_output[i].quantity + '</p>' +
                '<p> Product Description: ' + json_output[i].description + '</p>' +
                '<p> Product Category: ' + json_output[i].category + '</p>' +
                '<p> Product Price: £' + json_output[i].price + '</p>' +
                "</div>";

            //This outputs the array
            target.innerHTML += output;
        }
    }
}
//Sets the load listeners
function setListeners() {
    lowStock();
}

window.addEventListener("load", setListeners());
