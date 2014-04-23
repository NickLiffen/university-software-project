//AJAX functions that collects athe onkeyup search bar.
function searchAJAX(str) {
  var price, minPrice, maxPrice, xhr, target;
    if (str.length == 0) {
        _("collectInfo").innerHTML = "";
        _("collectInfo").style.border = "0px";
        return;
    }
    xhr = new XMLHttpRequest();
    target = _("collectInfo");
    target.style.display = 'block';
    changeListener = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            json(xhr.responseText, target, str);
        }
    };

    price = _("price").value;
    minPrice = _("minPrice").value;
    maxPrice = _("maxPrice").value;

    xhr.open("GET", "SQL/searchDatabaseSQL.php?str=" + str + "&price=" + price + "&minPrice=" + minPrice + "&maxPrice=" + maxPrice, true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}

function pageLoaded(str) {
  var searchFeatures, price, priceButton;
  //This is here becuase if they are on the page where they 'search' for products, it sets the sarch features display to nothing. More focus on products.
  searchFeatures = _("disapearOnCheckout");
  if(searchFeatures){
    searchFeatures.style.display = 'block';
  }
    price = _("price");
    priceButton = _("priceButton");

}

function json(jsonObj, target, str) {
  console.log()
  var json_output, output;
    //Sets the page content to nothing so we don't see multiple of the same products on screen.
    target.innerHTML = "";
    json_output = JSON.parse(jsonObj);
    //Checks to see if anything has come back from the search. If nothing has. Prints out message.
    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>No Items where found under " + str + ", Sorry!<p></div>";
    } else {
        //Starts the loop
        //Starts the loop
        for (var i = 0; i < json_output.length; i++) {
            output = "<div id='item" + json_output[i].id + "' class='item'>" +
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
