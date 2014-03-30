var pageLoaded, pageLoadedOne, pageLoadedTwo, pageLoadedThree, pageLoadedFour;

function _(el){
  return document.getElementById(el);
}

pageLoadedOne = function () {

  // declare the two variables that will be used
  var xhr, target, changeListener;

  // find the element that should be updated
  target = _("results");

  // create a request object
  xhr = new XMLHttpRequest();

  changeListener = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // add the retrieved content to it using
      // the innerHTML property
      target.innerHTML = xhr.responseText;
    } else {
      target.innerHTML = "<p>Something went wrong.</p>";
    }
  };

  // initialise a request, specifying the HTTP method
  // to be used and the URL to be connected to.
  xhr.open("GET", "SQL/totalProductsSQL.php", true);
  xhr.onreadystatechange = changeListener;
  xhr.send();

};

pageLoadedTwo = function () {

  // declare the two variables that will be used
  var xhr, target, changeListener;

  // find the element that should be updated
  target = _("results");

  // create a request object
  xhr = new XMLHttpRequest();

  changeListener = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // add the retrieved content to it using
      // the innerHTML property
      target.innerHTML = xhr.responseText;
    } else {
      target.innerHTML = "<p>Something went wrong.</p>";
    }
  };

  // initialise a request, specifying the HTTP method
  // to be used and the URL to be connected to.
  xhr.open("GET", "SQL/totalStockSQL.php", true);
  xhr.onreadystatechange = changeListener;
  xhr.send();

};

pageLoadedThree = function () {

  // declare the two variables that will be used
  var xhr, target, changeListener;

  // find the element that should be updated
  target = _("results");

  // create a request object
  xhr = new XMLHttpRequest();

  changeListener = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // add the retrieved content to it using
      // the innerHTML property
      target.innerHTML = xhr.responseText;
    } else {
      target.innerHTML = "<p>Something went wrong.</p>";
    }
  };

  // initialise a request, specifying the HTTP method
  // to be used and the URL to be connected to.
  xhr.open("GET", "SQL/maxStockSQL.php", true);
  xhr.onreadystatechange = changeListener;
  xhr.send();

};

pageLoadedFour = function () {

  // declare the two variables that will be used
  var xhr, target, changeListener;

  // find the element that should be updated
  target = _("results");

  // create a request object
  xhr = new XMLHttpRequest();

  changeListener = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // add the retrieved content to it using
      // the innerHTML property
      target.innerHTML = xhr.responseText;
    } else {
      target.innerHTML = "<p>Something went wrong.</p>";
    }
  };

  // initialise a request, specifying the HTTP method
  // to be used and the URL to be connected to.
  xhr.open("GET", "SQL/minStock.php", true);
  xhr.onreadystatechange = changeListener;
  xhr.send();

};

noStock= function () {

  // declare the two variables that will be used
  var xhr, target, changeListener;

  // find the element that should be updated
  target = _("noStock");

  // create a request object
  xhr = new XMLHttpRequest();

  changeListener = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // add the retrieved content to it using
      // the innerHTML property

      var json = JSON.parse(xhr.responseText);

      if(isEmpty(json)){
        target.innerHTML = " No items with 0 stock, WOW!!! ";

      }else{
        outputItem(json, target);
      }

    }
    }

  // initialise a request, specifying the HTTP method
  // to be used and the URL to be connected to.
  xhr.open("GET", "SQL/noStockSQL.php", true);
  xhr.onreadystatechange = changeListener;
  xhr.send();

};


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

            //This outputs the array
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


pageLoaded = function() {
    var fetchbutton = _("totalProdcts");
    if(fetchbutton) { fetchbutton.addEventListener("click", pageLoadedOne); }


    var fetchbuttonOne = _("totalStock");
    if(fetchbuttonOne) { fetchbuttonOne.addEventListener("click", pageLoadedTwo); }


    var fetchbuttonTwo = _("maxStock");
    if(fetchbuttonTwo) { fetchbuttonTwo.addEventListener("click", pageLoadedThree); }


    var fetchbuttonThree = _("minStock");
    if(fetchbuttonThree) { fetchbuttonThree.addEventListener("click", pageLoadedFour); }
      }


window.addEventListener("load", noStock);

window.addEventListener("load", pageLoaded);
