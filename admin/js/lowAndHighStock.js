//Functions that collects all products low on stock.
function lowStock() {
    var target;
    target = _("lowStockTarget");
    ajaxGet("SQL/collectLowStockSQL.php", jsonLowStock, target, null);
}
//Function that outputs the JSON Object.
function jsonLowStock(jsonObj, target) {
  var json_output, output;
    target.innerHTML = "";
    json_output = JSON.parse(jsonObj);
    //Checks to see if anything has come back from the search. If nothing has. Prints out message.
    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>No stock in this bracket!<p></div>";
    } else {
        //Starts the loop
        for (var i = 0; i < json_output.length; i++) {
            output = "<div id='item" + json_output[i].id + "' class='item'>" +
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
    highStock();
}
//Function that collects all products with high stock.
function highStock() {
    var target;
    target = _("highStockTarget");
    ajaxGet("SQL/collectHighStockSQL.php", jsonHighStock, target, null);
}
//Function that outputs the JSON Object.
function jsonHighStock(jsonObj, target) {
  var json_output, output;
    target.innerHTML = "";
    json_output = JSON.parse(jsonObj);
    //Checks to see if anything has come back from the search. If nothing has. Prints out message.
    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>No stock in this bracket!<p></div>";
    } else {
        //Starts the loop
        for (var i = 0; i < json_output.length; i++) {
            output = "<div id='item" + json_output[i].id + "' class='item'>" +
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
