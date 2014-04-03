//Function that meand I don't have to type getElementById all the time!!
function _(el) {
    return document.getElementById(el);
}

function searchAJAX(str) {
    if (str.length == 0) {
        document.getElementById("collectInfo").innerHTML = "";
        document.getElementById("collectInfo").style.border = "0px";
        return;
    }
    xhr = new XMLHttpRequest();
    target = document.getElementById("collectInfo");
    changeListener = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            json(xhr.responseText, target);
        }
    };

    var price = _("price").value;
    var minPrice = _("minPrice").value;
    var maxPrice = _("maxPrice").value;
    var minStock = _("stockRemain").value;

    xhr.open("GET", "SQL/searchDatabaseSQL.php?str=" + str + "&price=" + price + "&minPrice=" + minPrice + "&maxPrice=" + maxPrice + "&minStock=" + minStock, true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}

function pageLoaded(str) {
    var price = _("price");
    var fetchbutton = _("searchBox");
    var priceButton = _("priceButton");
    var minStock = _("stockButton");

    if (fetchbutton) {
        fetchbutton.addEventListener("focus", searchAJAX(str));
    }

    if (price) {
        price.addEventListener("change", searchAJAX(str));
    }

    if (priceButton) {
        priceButton.addEventListener("click", searchAJAX(str));
    }

    if (minStock) {
        minStock.addEventListener("click", searchAJAX(str));
    }

}

function json(jsonObj, target) {
    console.log(jsonObj);
    //Sets the page content to nothing so we don't see multiple of the same products on screen.
    target.innerHTML = "";
    var json_output = JSON.parse(jsonObj);
    //Checks to see if anything has come back from the search. If nothing has. Prints out message.
    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>No Items where found, Sorry!<p></div>";
    } else {
        //Starts the loop
        //Starts the loop
        for (var i = 0; i < json_output.length; i++) {

            var output = "<div id='item" + json_output[i].id + "' class='item'>" +
                '<h3> Product Name: ' + json_output[i].name + '</h3>' +
                "<p><img src='../CMS/Images/" + json_output[i].id + ".jpg'> </p>" +
                '<p> Product Quantity: ' + json_output[i].quantity + '</p>' +
                '<p> Product Description: ' + json_output[i].description + '</p>' +
                '<p> Product Category: ' + json_output[i].category + '</p>' +
                '<p> Product Price: £' + json_output[i].price + '</p>' +
                "</div>";

            //This outputs the array
            target.innerHTML += output;
        }
    }
}

//Checks to see if JSON Object is Empty
function isEmpty(obj) {
    // null and undefined are "empty"
    if (obj == null) return true;
    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
