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
            "<p> Delete Product? <input type='button' id='delete' value='Delete'/> </p>" +
            "<p> Update Product? <input type='button' id='modify' value='Modify'/> </p>" +
            "</div>";

            //This outputs the array
            target.innerHTML += output;
            getButtons(str);
  }
}

function getButtons(str){
  var fetchDeleteButton = document.getElementById("delete");
  var fetchModifyButton = document.getElementById("modify");
    if(fetchDeleteButton) {
        fetchDeleteButton.addEventListener("click", function(){
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
  if(fetchModifyButton) {
      fetchModifyButton.addEventListener("click", function(){
    //Bubbles up and finds the ID of the product they want to modify
    var e = event.target;
    while (e.id.indexOf('item') == -1) {
        e = e.parentNode;
    }
    var productID = e.id;
    var newID = productID.replace(/[^0-9.]/g, "");
    ajaxModify(newID, str);
  });
}
}

function ajaxDelete(productID, str){
  var xhr, id
  xhr = new XMLHttpRequest();
  id= productID;

  changeListener = function () {
  if(xhr.readyState == 4 && xhr.status == 200) {
    deleteMessage(xhr.responseText, str);
  }
};

xhr.open("GET", "SQL/deleteProductNewSQL.php?id="+id, true);
xhr.onreadystatechange = changeListener;
xhr.send();
}

function ajaxModify(productID, str){
  var xhr, id
  xhr = new XMLHttpRequest();
  id= productID;

  changeListener = function () {
  if(xhr.readyState == 4 && xhr.status == 200) {
    updateProduct(xhr.responseText, str);
  }
};
xhr.open("GET", "SQL/updateProductNewSQL.php?id="+id, true);
xhr.onreadystatechange = changeListener;
xhr.send();
}

function updateProduct(jsonObj, str) {
  var json_output = JSON.parse(jsonObj);
  var target = document.getElementById("collectInfo").innerHTML="";
  var newTarget = document.getElementById("modifyResult");

  //Starts the loop
  for( var i=0; i < json_output.length; i++) {

    var output 	= 	"<fieldset><legend><span>Would you like to Update a product?</span></legend>"+
            "<form method='post' id = 'Form' name='Form' onsubmit='return false;'>" +
            "<br />"+
            "<input type = 'hidden'  id='idUpdate' name = 'id' value = " + json_output[i].id + " > "+
            "<p>Please Update the Product Name: *<input type='text' id='nameUpdate' name='nameUpdate' value = " + json_output[i].name + " > </p>"+
            "<p>Please Update the Product Quantity: *<input type='text' id='quantityUpdate' name='quantityUpdate' value = " + json_output[i].quantity + " > </p>"+
            "<p>Please Update the Product Description: *<input type='text' id='descriptionUpdate' name='descriptionUpdate' value = " + json_output[i].description + " > </p>"+
            "<p>Please Update the Product Category: *<input type='text' id='categoryUpdate' name='categoryUpdate' value = " + json_output[i].category + " > </p>"+
            "<p>Please Update the Product Price: *<input type='text' id='priceUpdate' name='priceUpdate' value = " + json_output[i].price + " > </p>"+
            "<br />"+
            "<input name='submitNew' id='submitNew' type='button' value='Update Product'  onclick='fetchUpdate()'/>" +
            "</form>"+
            "<div id='statusUpdate'></div>"+
            "</fieldset>";
            //This outputs the array
            newTarget.innerHTML += output;
          }
          finalUpdate(str);
  }

function finalUpdate(str){
var fetchSubmitButton = document.getElementById("submitNew");
  if(fetchSubmitButton) {
      fetchSubmitButton.addEventListener("click", function(){

        var xhr, idUpdate, nameUpdate, quantityUpdate, descriptionUpdate, categoryUpdate, priceUpdate, target;

        xhr = new XMLHttpRequest();

        target = document.getElementById("statusUpdate");

        idUpdate = document.getElementById("idUpdate").value;
        nameUpdate = document.getElementById("nameUpdate").value;
        quantityUpdate = document.getElementById("quantityUpdate").value;
        descriptionUpdate = document.getElementById("descriptionUpdate").value;
        categoryUpdate = document.getElementById("categoryUpdate").value;
        priceUpdate = document.getElementById("priceUpdate").value;

        var vars = "idUpdate="+idUpdate+"&nameUpdate="+nameUpdate+"&quantityUpdate="+quantityUpdate+"&descriptionUpdate="+descriptionUpdate+"&categoryUpdate="+categoryUpdate+"&priceUpdate="+priceUpdate;
          changeListener = function () {
          if(xhr.readyState == 4 && xhr.status == 200) {
             modifyMessage(str);
          }
        };
        xhr.open("POST", "SQL/updatedProductInfoNewSQL.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = changeListener;
        xhr.send(vars);
      });
    }
}

function modifyMessage(str){
  var hide = _("modifyResult").style.display = "none";
  var messsage = _("productModifyShow").style.display = "block";
  window.setTimeout(vanishText, 1000);
  searchAJAX(str);
}

function deleteMessage(object, str){
  var messsage = _("productDeleteShow").style.display = "block";
  window.setTimeout(vanishText, 1000);
  searchAJAX(str);
}
function vanishText(str){
  var messsage = _("productModifyShow").style.display = 'none';
  var messsage = _("productDeleteShow").style.display = 'none';
}
