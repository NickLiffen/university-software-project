var totalProducts, totalStock, mostStock, leastStock, noStock;

function _(el){
  return document.getElementById(el);
}
//Runs a function that goes and collects the total number of products in the database
totalProducts = function () {
  var xhr, target, changeListener;
  // find the element that should be updated
  target = _("totalProdctsNew");
  xhr = new XMLHttpRequest();

  changeListener = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      target.innerHTML = xhr.responseText;
    } else {
      target.innerHTML = "<p>Something went wrong.</p>";
    }
  };

  xhr.open("GET", "SQL/totalProductsSQL.php", true);
  xhr.onreadystatechange = changeListener;
  xhr.send();
};
//Runs a function that goes and collects the total number stock
totalStock = function () {
  var xhr, target, changeListener;
  // find the element that should be updated
  target = _("totalStockNew");
  xhr = new XMLHttpRequest();

  changeListener = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      target.innerHTML = xhr.responseText;
    } else {
      target.innerHTML = "<p>Something went wrong.</p>";
    }
  };

  xhr.open("GET", "SQL/totalStockSQL.php", true);
  xhr.onreadystatechange = changeListener;
  xhr.send();
};
//Runs a function that goes and collects the procut with the most stock
mostStock = function () {
  var xhr, target, changeListener;
  target = _("maxStockNew");
  xhr = new XMLHttpRequest();

  changeListener = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      target.innerHTML = xhr.responseText;
    } else {
      target.innerHTML = "<p>Something went wrong.</p>";
    }
  };

  xhr.open("GET", "SQL/maxStockSQL.php", true);
  xhr.onreadystatechange = changeListener;
  xhr.send();
};
//Runs and collects the products with the least amount of stock
leastStock = function () {
  var xhr, target, changeListener;
  target = _("minStockNew");
  xhr = new XMLHttpRequest();

  changeListener = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      target.innerHTML = xhr.responseText;
    } else {
      target.innerHTML = "<p>Something went wrong.</p>";
    }
  };

  xhr.open("GET", "SQL/minStock.php", true);
  xhr.onreadystatechange = changeListener;
  xhr.send();
};
//This is a function that collects all different products that have 0 stock reamaining.
noStock= function () {
  var xhr, target, changeListener;
  target = _("noStock");
  xhr = new XMLHttpRequest();

  changeListener = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var json = JSON.parse(xhr.responseText);
      if(isEmpty(json)){
        target.innerHTML = "You have no items with 0 Stock Remaining";
      }else{
        outputItem(json, target);
      }
    }
    }
  xhr.open("GET", "SQL/noStockSQL.php", true);
  xhr.onreadystatechange = changeListener;
  xhr.send();
};
//Outputs the items that have 0 stock.
function outputItem(json, target) {
  //Starts the loop
  for( var i=0; i < json.length; i++) {
    var item = json[i];
    var output 	= 	"<div class='item'>"+
            '<h3> Product Name: ' + item.name			+ '</h3>'+
            '<p> Product Quantity: ' + item.quantity 	+ '</p>' +
            '<p> Product Description: ' + item.description  + '</p>' +
            '<p> Product Category: ' + item.category 	+ '</p>' +
            '<p> Product Price: ' + item.price 		+ '</p>'+
            "</div>";
            //This outputs the Object
            target.innerHTML += output;
  }
}
//Checks to see if JSON Object is Empty
function isEmpty(obj) {
    // null and undefined are "empty"
    if (obj == null) return true;
    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;
    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
//Set up the Event Listeners.
window.addEventListener("load", totalProducts);
window.addEventListener("load", totalStock);
window.addEventListener("load", mostStock);
window.addEventListener("load", leastStock);
window.addEventListener("load", noStock);
