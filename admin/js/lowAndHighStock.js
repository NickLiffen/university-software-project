//Function that meand I don't have to type getElementById all the time!!
function _(el) {
    return document.getElementById(el);
}

function lowStock() {
    var xhr, target, changeListener;
    target = _("lowStockTarget");
    xhr = new XMLHttpRequest();

    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json(xhr.responseText, target);
        }
    };

    xhr.open("GET", "SQL/collectLowStockSQL.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}

function highStock() {
    var xhr, target, changeListener;
    target = _("highStockTarget");
    xhr = new XMLHttpRequest();

    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json(xhr.responseText, target);
        }
    };

    xhr.open("GET", "SQL/collectHighStockSQL.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}

function json(jsonObj, target) {
    target.innerHTML = "";
    var json_output = JSON.parse(jsonObj);
    //Checks to see if anything has come back from the search. If nothing has. Prints out message.
    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>No stock in this bracket!<p></div>";
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
