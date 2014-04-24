
function getCategories(){
  var target;
  target = _("categoriesLoadInto");
  ajaxGet("SQL/collectCategoriesSQL.php", jsonCategories, target, null);
}

function jsonCategories(jsonObj, target){
  var json_output, output
  json_output = JSON.parse(jsonObj);
  //Starts the loop
  //target.innerHTML += "Search by Category";
  if (isEmpty(json_output)) {
      target.innerHTML = "<div class='noResults'><p>No Categories where found, Sorry!<p></div>";
  }
  else {
  for (var i = 0; i < json_output.length; i++) {
      output = "<div id='categoryContent" + json_output[i].category + "' class='categoryContent'>" +
          "<p><a href = ''>"+ json_output[i].category + '</a></p>' +
          "</div>";
      target.innerHTML += output;
  }
  collectIndividualCategories();
}
}

function collectIndividualCategories(){
  var categoryContainer, e, data, newData;
  categoryContainer = _("categoriesLoadInto");
  categoryContainer.addEventListener("click", function (event) {
    event.preventDefault();
      e = event.target;
      while (e.id.indexOf('categoryContent') == -1) {
          e = e.parentNode;
      }
      data = e.id;
      newData = data.replace("categoryContent","");
      ajaxGet("SQL/searchCategoriesDatabaseSQL.php?str=" + newData, jsonCategoriesOutput, null, null);
    });

}

function jsonCategoriesOutput(jsonObj){
	console.log(jsonObj);
var target, json_output, output;
target = _("collectInfo");
target.innerHTML = "";
json_output = JSON.parse(jsonObj);

if (isEmpty(json_output)) {
    target.innerHTML = "<div class='noResults'><p>No Catergoies where found, Sorry!<p></div>";
} else {
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
}
window.addEventListener("load", getCategories());
