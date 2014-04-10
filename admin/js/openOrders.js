//Function that counts the number of open orders
function countOpenOrders() {
    var xhr, target, changeListener;
    target = _("totalOrders");
    xhr = new XMLHttpRequest();

    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            checkInput(xhr.responseText, target);
        }
    };

    xhr.open("GET", "SQL/countOpenOrdersSQL.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}
//Function that checks the number and tells the webiste what to do with it
function checkInput(jsonObj, target) {
    var newTarget = _("openOrdersTarget");
    var toNumber = +jsonObj;
    target.innerHTML = toNumber;
    if (toNumber < 1) {
        newTarget.innerHTML = "You have no products in the open order status";
    } else {
        collectOpenOrders(newTarget);
    }
}
//If number is greater then 0 it collects them products
function collectOpenOrders(newTarget) {
    var xhr, target, changeListener;
    xhr = new XMLHttpRequest();

    changeListener = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            json(xhr.responseText, newTarget);
        }
    };

    xhr.open("GET", "SQL/openOrdersSQL.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}
//Outputs it the way I want it.
function json(jsonObj, newTarget) {
    newTarget.innerHTML = "";
    var json_output = JSON.parse(jsonObj);

    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {

        var output = "<div id='item" + json_output[i].id + "' class='item'>" +
            '<p> Address Line One: ' + json_output[i].addressLineOne + '</p>' +
            "<p> Address Line Two: " + json_output[i].addressLineTwo + '</p>' +
            '<p> County: ' + json_output[i].county + '</p>' +
            '<p> Post Code: ' + json_output[i].postCode + '</p>' +
            '<p> Contact Number: ' + json_output[i].contactNumber + '</p>' +
            '<p> Number of products in sale: ' + json_output[i].noOfProducts + '</p>' +
            "</div>";

        //This outputs the array
        newTarget.innerHTML += output;
    }
}
//Set the listeners
function setListeners() {
    countOpenOrders();
}

window.addEventListener("load", setListeners());
