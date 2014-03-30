//Function that meand I don't have to type getElementById all the time!!
function _(el) {
    return document.getElementById(el);
}

function searchAJAX(str) {
  if (str.length==0)
      {
        document.getElementById("collectInfo").innerHTML ="Please enter a product name";
        document.getElementById("collectInfo").style.border="0px";
        return;
      }
    var xhr = new XMLHttpRequest();
    var target = document.getElementById("collectInfo");
    changeListener = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
       json(xhr.responseText, target, str);
    }
  };
  xhr.open("GET", "SQL/searchDatabaseSQL.php?str="+str, true);
  xhr.onreadystatechange = changeListener;
  xhr.send();
}

function pageLoaded(str) {
  var fetchbutton = document.getElementById("searchBox");

  if(fetchbutton){
    fetchbutton.addEventListener("focus", searchAJAX(str));
  }
}
function json(jsonObj, target, str) {

  target.innerHTML = "";
  var json_output = JSON.parse(jsonObj);

  //Starts the loop
  for( var i=0; i < json_output.length; i++) {

    var output 	= 	"<div id='item"					+ json_output[i].id 			+"' class='item'>"	+
            '<h2> Product Name: ' 			+ json_output[i].name			+ '</h2>'		+
            "<p><img src='../CMS/Images/" 	+ json_output[i].name 			+ ".jpg'> </p>" +
            '<p> Product Quantity: ' 		+ json_output[i].quantity 		+ '</p>' 		+
            '<p> Product Description: ' 	+ json_output[i].description  	+ '</p>' 		+
            '<p> Product Category: ' 		+ json_output[i].category 		+ '</p>' 		+
            '<p> Product Price: £' 			+ json_output[i].price 			+ '</p>'		+
            "<p> Delete Product? <input type='button' class='delete' value='Delete'/> </p>" +
            "<p> Update Product? <input type='button' class='modify' value='Modify'/> </p>" +
            "</div>";

            //This outputs the array
            target.innerHTML += output;
            getButtons(str, target);
  }
}
//This function collects the buttons for Deleting and Modiying a product.
function getButtons(str, target){
  //Gets the button that says 'Remove'
  var fetchRemoveButton = document.getElementsByClassName("delete");
  //Gets the button that says 'Modify'
  var fetchModifyButton = document.getElementsByClassName("modify");
    for (var i = 0, j = fetchRemoveButton.length; i < j; i++) {
          fetchRemoveButton[i].addEventListener("click", function() {
      //Bubbles up and finds the ID of the product they want to modify
      var e = event.target;
      while (e.id.indexOf('item') == -1) {
          e = e.parentNode;
      }
      var productID = e.id;
      var newID = productID.replace(/[^0-9.]/g, "");
      ajaxDelete(newID, str);
    });
  }
  for (var i = 0, j = fetchModifyButton.length; i < j; i++) {
          fetchModifyButton[i].addEventListener("click", function (event) {
    //Bubbles up and finds the ID of the product they want to modify
    var e = event.target;
    while (e.id.indexOf('item') == -1) {
        e = e.parentNode;
    }
    var productID = e.id;
    var newID = productID.replace(/[^0-9.]/g, "");
    ajaxModify(newID, str, target);
  });
}
}
