//Function that collects the total number of products which are selling
function totalProducts() {
    var targetOne;
    targetOne = _("totalProducts");
    ajaxGet("../CMS/SQL/totalProductsSQL.php", totalProductsOutput, targetOne, null);
}
function totalProductsOutput(jsonObjOne, targetOne){
        var json_output = JSON.parse(jsonObjOne);
        if (isEmpty(json_output)) {
            targetOne.innerHTML = "You have no products for Sale!";
        } else {
            for (var i = 0; i < json_output.length; i++) {
                  var output = json_output[i].id;
                    targetOne.innerHTML += output;
            }
        }
   totalSold();
}

//Function that collects the total number of products which have sold.
function totalSold() {
    var targetTwo;
    targetTwo = _("totalSoldProducts");
    ajaxGet("SQL/totalSoldProductsSQL.php", totalSoldOutput, targetTwo, null);

}
function totalSoldOutput(jsonObjTwo, targetTwo){
        var json_output = JSON.parse(jsonObjTwo);
        if (isEmpty(json_output)) {
            targetTwo.innerHTML = "You have no stock!";
        } else {
            for (var i = 0; i < json_output.length; i++) {
                  var output = json_output[i].id;
                    targetTwo.innerHTML += output;
            }
        }
    countOpenOrders();
}

//Counts the total number of open orders.
function countOpenOrders() {
    var targetThree;
    targetThree = _("countOpenOrders");
    ajaxGet("SQL/countOpenOrdersSQL.php", countOpenOrdersOutput, targetThree, null);
}
function countOpenOrdersOutput(jsonObjTwo, targetThree){
        var json_output = JSON.parse(jsonObjTwo);
        if (isEmpty(json_output)) {
            targetThree.innerHTML = "You have no open orders!";
        } else {
            for (var i = 0; i < json_output.length; i++) {
                  var output = json_output[i].id;
                    targetThree.innerHTML += output;
            }
        }
    lowStockRemaining();
}

//Function that collects the products left with
function lowStockRemaining() {
    var targetFour;
    targetFour = _("countFewStock");
    ajaxGet("SQL/FewStockSQL.php", countLowStockOutput, targetFour, null);
}
function countLowStockOutput(jsonObjTwo, targetFour){
        var json_output = JSON.parse(jsonObjTwo);
        if (isEmpty(json_output)) {
            targetFour.innerHTML = "You have no stock in this bracket!";
        } else {
            for (var i = 0; i < json_output.length; i++) {
                  var output = json_output[i].id;
                    targetFour.innerHTML += output;
            }
        }
    noStockRemaining();
}

//Function that collects all the stock with 0 left.
function noStockRemaining() {
    var targetFive;
    targetFive = _("countNoStock");
    ajaxGet("SQL/noStock.php", countNoStockOutput, targetFive, null);
}
function countNoStockOutput(jsonObjTwo, targetFive){
        var json_output = JSON.parse(jsonObjTwo);
        if (isEmpty(json_output)) {
            targetFive.innerHTML = "You have no products with 0 stock left!";
        } else {
            for (var i = 0; i < json_output.length; i++) {
                  var output = json_output[i].id;
                    targetFive.innerHTML += output;
            }
        }
}

window.addEventListener("load", totalProducts());
