
function getCategories(){
  var target;
  target = _("categoriesLoadInto");
  ajaxGet("SQL/collectCategoriesSQL.php", jsonCategories, target, null);
}

function jsonCategories(jsonObj, target){
  var json_output = JSON.parse(jsonObj);
  //Starts the loop
  //target.innerHTML += "Search by Category";
  for (var i = 0; i < json_output.length; i++) {
      var output = "<div id='item" + json_output[i].category + "' class='item'>" +
          "<p><a href = ''>"+ json_output[i].category + '</a></p>' +
          "</div>";
      target.innerHTML += output;
  }
  collectIndividualCategories();
}

function collectIndividualCategories(){
  var categoryContainer = _("categoriesLoadInto");
  categoryContainer.addEventListener("click", function (event) {
    event.preventDefault();
      var e = event.target;
      while (e.id.indexOf('item') == -1) {
          e = e.parentNode;
      }
      var data = e.id;
      var newData = data.replace("item","");
      ajaxGet("SQL/searchCategoriesDatabaseSQL.php?str=" + newData, jsonCategoriesOutput, null, null);
    });

}

function jsonCategoriesOutput(jsonObj){
var targetOld, target;
target = _("collectInfo");
target.innerHTML = "";
var json_output = JSON.parse(jsonObj);


if (isEmpty(json_output)) {
    target.innerHTML = "<div class='noResults'><p>No Catergoies where found, Sorry!<p></div>";
} else {
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
        var output = "<div id='item" + json_output[i].id + "' class='item'>" +
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
}




window.addEventListener("load", getCategories());
