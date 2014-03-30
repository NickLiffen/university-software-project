var fetch, pageLoaded;

fetch = function () {

  var xhr, name, target;

  xhr = new XMLHttpRequest();

  target = document.getElementById("status");

  name = document.getElementById("name").value;


    changeListener = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {

      json(xhr.responseText, target);

    }
  };

  xhr.open("GET", "SQL/updateProductSQL.php?name="+name, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = changeListener;
  xhr.send();


}

pageLoaded = function() {
  var fetchbutton = document.getElementById("submit");
    if(fetchbutton) {
      fetchbutton.addEventListener("click", fetch);
    }
}



function json(jsonObj, target) {

  var json_output = JSON.parse(jsonObj);

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
            target.innerHTML += output;

          }
  }

window.addEventListener("load", pageLoaded);
