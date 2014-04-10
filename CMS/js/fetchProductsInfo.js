var totalProducts, totalStock, mostStock, leastStock, noStock;

//Runs a function that goes and collects the total number of products in the database
totalProducts = function () {
    var targetOne;
    targetOne = _("totalProdctsNew");
    ajaxGet("SQL/totalProductsSQL.php", totalProductsOutput, targetOne);
};
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
   totalStock();
}

//Runs a function that goes and collects the total number stock
function totalStock() {
    var targetTwo;
    targetTwo = _("totalStockNew");
    ajaxGet("SQL/totalStockSQL.php", totalStockOutput, targetTwo);
};
function totalStockOutput(jsonObjTwo, targetTwo){
        var json_output = JSON.parse(jsonObjTwo);
        if (isEmpty(json_output)) {
            targetTwo.innerHTML = "You have no stock!";
        } else {
            for (var i = 0; i < json_output.length; i++) {
                  var output = json_output[i].id;
                    targetTwo.innerHTML += output;
            }
        }
    mostStock();
}

//Runs a function that goes and collects the procut with the most stock
function mostStock() {
    var targetThree;
    targetThree = _("maxStockNew");
    ajaxGet("SQL/maxStockSQL.php", mostStockOutput, targetThree);
};
function mostStockOutput(jsonObjThree, targetThree){
        var json_output = JSON.parse(jsonObjThree);
        if (isEmpty(json_output)) {
            targetThree.innerHTML = "You have no products so nothing with a maximum stock stock";
        } else {
            for (var i = 0; i < json_output.length; i++) {
                  var output = json_output[i].id;
                    targetThree.innerHTML += output;
            }
        }
  leastStock();
}
//Runs and collects the products with the least amount of stock
function leastStock() {
    var targetFour
    targetFour = _("minStockNew");
    ajaxGet("SQL/minStock.php", leastStockOutput, targetFour);
};
function leastStockOutput(jsonObjFour, targetFour){
      var json_output = JSON.parse(jsonObjFour);
      if (isEmpty(json_output)) {
          targetFour.innerHTML = "You have no products so nothing with a minimum stock!";
      } else {
          for (var i = 0; i < json_output.length; i++) {
                var output = json_output[i].id;
                  targetFour.innerHTML += output;
          }
      }
  noStock();
}

//This is a function that collects all different products that have 0 stock reamaining.
function noStock() {
    var targetFive
    targetFive = _("noStock");
    ajaxGet("SQL/noStockSQL.php", outputItems, targetFive);
};
function outputItems(jsonObjFive, targetFive) {
  var json_output = JSON.parse(jsonObjFive);
  //Checks to see if anything has come back from the search. If nothing has. Prints out message.
  if (isEmpty(json_output)) {
      targetFive.innerHTML = "No products with 0 stock remaining.";
  } else {
      for (var i = 0; i < json_output.length; i++) {
          var output = "<div id='item" + json_output[i].id + "' class='item'>" +
              '<h2> Product Name: ' + json_output[i].name + '</h2>' +
              "<p><img src='../CMS/Images/" + json_output[i].id + ".jpg'></p>" +
              '<p> Product Quantity: ' + json_output[i].quantity + '</p>' +
              '<p> Product Description: ' + json_output[i].description + '</p>' +
              '<p> Product Category: ' + json_output[i].category + '</p>' +
              '<p> Product Price: £' + json_output[i].price + '</p>' +
              "</div>";

          //This outputs the array
          targetFive.innerHTML += output;
      }
  }
}
//Set up the Event Listener.
window.addEventListener("load", totalProducts);
