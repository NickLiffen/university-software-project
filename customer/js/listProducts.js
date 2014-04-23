//------------------------ Home Screen Printout ----------------------
function pageLoaded() {
    var target, title;
    target = _("collectInfo");
    target.innerHTML = "";
    target.style.display = 'block';
    title = _("disapearOnCheckout");
    title.style.display = 'block';
    ajaxGet("SQL/collectProductsSQL.php", json, target, null);
};
//Parses the JSON Object created and formats it to the way I like
function json(jsonObj, target) {
  var json_output, output;
    json_output = JSON.parse(jsonObj);
    if (isEmpty(json_output)) {
        target.innerHTML = "<div class='noResults'><p>No Products where found, Sorry!<p></div>";
    }
    else {
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
        output = "<div id='item" + json_output[i].id + "' class='item'>" +
            "<h2> Product Name: " + json_output[i].name + '</h2>' +
            "<p><img src='../CMS/images/" + json_output[i].id + ".jpg'> </p>" +
            "<p> Amount in Stock: " + json_output[i].quantity + '</p>' +
            "<p> Product Description: " + json_output[i].description + '</p>' +
            "<p> Product Category: " + json_output[i].category + '</p>' +
            "<p> Product Price: £" + json_output[i].price + '</p>' +
            "</div>";
        target.innerHTML += output;
    }
  }
};
window.addEventListener("load", pageLoaded());
