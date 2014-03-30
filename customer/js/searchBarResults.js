//Function that meand I don't have to type getElementById all the time!!
function _(el) {
    return document.getElementById(el);
}

function searchAJAX(str) {
  if (str.length==0)
      {
        document.getElementById("collectInfo").innerHTML="";
        document.getElementById("collectInfo").style.border="0px";
        return;
      }
    xhr = new XMLHttpRequest();
    target = document.getElementById("collectInfo");
    changeListener = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
       json(xhr.responseText, target);
    }
  };
  var price = document.getElementById("price").value;
  xhr.open("GET", "SQL/searchDatabaseSQL.php?str="+str+"&price="+price, true);
  xhr.onreadystatechange = changeListener;
  xhr.send();
}
function pageLoaded(str) {
  var price = document.getElementById("price");
  var fetchbutton = document.getElementById("searchBox");

  if(fetchbutton){
    fetchbutton.addEventListener("focus", searchAJAX(str));
  }

  if(price){
    price.addEventListener("change", searchAJAX(str));
  }
}
function json(jsonObj, target) {

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
            "</div>";

            //This outputs the array
            target.innerHTML += output;
  }
}
