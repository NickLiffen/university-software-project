//Function that meand I don't have to type getElementById all the time!!
function _(el) {
    return document.getElementById(el);
}
//AJAX function that sends the ONKEYUP letters.
function searchAJAX(str) {
  if (str.length==0)
      {
        document.getElementById("collectInfo").innerHTML ="";
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
//This function sends through the letters to the AJAC function.
function pageLoaded(str) {
  var fetchbutton = document.getElementById("searchBox");
  if(fetchbutton){
    fetchbutton.addEventListener("focus", searchAJAX(str));
  }
}
function json(jsonObj, target, str) {
  //Sets the page content to nothing so we don't see multiple of the same products on screen.
  target.innerHTML = "";
  var json_output = JSON.parse(jsonObj);
  //Checks to see if anything has come back from the search. If nothing has. Prints out message.
  if(isEmpty(json_output)){
    target.innerHTML = "<div class='noResults'><p>No Items where found, Sorry!<p></div>";
  }
  else{
  //Starts the loop
  for( var i=0; i < json_output.length; i++) {

    var output 	= 	"<div id='item"					+ json_output[i].id 			+"' class='item'>"	+
            '<h2> Product Name: ' 			+ json_output[i].name			+ '</h2>'		+
            "<p><img src='../CMS/Images/" 	+ json_output[i].id 			+ ".jpg'></p>" +
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
//This function collects the buttons for Deleting and Modiying a product.
function getButtons(str, target){
  //Gets the button that says 'Remove'
  var fetchRemoveButton = document.getElementsByClassName("delete");
  //Gets the button that says 'Modify'
  var fetchModifyButton = document.getElementsByClassName("modify");
    //Remove Button.
    for (var i = 0, j = fetchRemoveButton.length; i < j; i++) {
          fetchRemoveButton[i].addEventListener("click", function() {
      //Bubbles up and finds the ID of the product they want to modify
      var e = event.target;
      while (e.id.indexOf('item') == -1) {
          e = e.parentNode;
      }
      var productID = e.id;
      //Removes everything but the numbers.
      var newID = productID.replace(/[^0-9.]/g, "");
      ajaxDelete(newID, str);
    });
  }
  //Modify Button.
  for (var i = 0, j = fetchModifyButton.length; i < j; i++) {
          fetchModifyButton[i].addEventListener("click", function (event) {
    //Bubbles up and finds the ID of the product they want to modify
    var e = event.target;
    while (e.id.indexOf('item') == -1) {
        e = e.parentNode;
    }
    var productID = e.id;
    //Removes everything but the numbers.
    var newID = productID.replace(/[^0-9.]/g, "");
    ajaxModify(newID, str, target);
  });
}
}