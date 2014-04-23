
function getCategories(){
  var target;
  target = _("deleteTroughCategory");
  ajaxGet("SQL/collectCategoriesSQL.php", jsonCategories, target, null);
}

function jsonCategories(jsonObj, target){
  var json_output, output
  json_output = JSON.parse(jsonObj);
  //Starts the loop
  //target.innerHTML += "Search by Category";
  for (var i = 0; i < json_output.length; i++) {
      output = "<div id='categoryContent" + json_output[i].category + "' class='categoryContent'>" +
          "<p><a href = ''>"+ json_output[i].category + '</a></p>' +
          "</div>";
      target.innerHTML += output;
  }
  collectIndividualCategories(target);
}

function collectIndividualCategories(target){
  var e, data, newData;
  target.addEventListener("click", function (event) {
    event.preventDefault();
      e = event.target;
      while (e.id.indexOf('categoryContent') == -1) {
          e = e.parentNode;
      }
      data = e.id;
      newData = data.replace("categoryContent","");
      ajaxGet("SQL/deleteCategorySQL.php?id=" + newData, deleteMessage, '', null);

    });
}


window.addEventListener("load", getCategories());
