//This function collects the content for what I want to be in the checkout page
function getContent(clearScreen){
  //Gets the div where everything is going to be put.
  var target = _("checkout");
  target.innerHTML = "<h2>Checkout</h2>";
  target.innerHTML += "<h2>Your Items</h2>";
  for (var a in localStorage) {
      var json_output = JSON.parse(localStorage[a]);
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
  target.innerHTML += "<h2>Please Enter Your Address:</h2>";
  //This outputs the form that allows the user to enter there address.
  var outputNew 	= 	"<fieldset><legend><span>Please Enter your Address?</span></legend>"+
          "<form method='post' id = 'Form' name='Form' onsubmit='return false;'>" +
          "<br />"+
          "<p>First Line of Address: *<input type='text' id='firstLineAddressValue' placeholder='Enter Here'/></p>"+
          "<p>Second Line of Address: *<input type='text' id='secondLineAddressValue' placeholder='Enter Here'/></p>"+
          "<p>County: *<input type='text' id='countyNumber' placeholder='Enter Here'/> </p>"+
          "<p>PostCode: *<input type='text' id='postCodeValue' placeholder='Enter Here'/> </p>"+
          "<p>Contact Number: *<input type='text' id='contactNumberValue' placeholder='Enter Here'/> </p>"+
          "<br />"+
          "</form>"+
          "<div id='statusUpdate'></div>"+
          "</fieldset>";
          //This outputs the array
          target.innerHTML += outputNew;

          target.innerHTML += "<p class='floatLeftAndStyle'>Please make sure that all the information is correct and the address you have ordered is correct.</p>"

          target.innerHTML += "<div id='finalCheckout'><input type ='button' id='finalCheckout' value='Checkout'/></div>"
          //This runs the AJAX request for POSTING the address information to the database.
          runAJAX(target, clearScreen);
}
//This actually runs the ajax request
function runAJAX(target, clearScreen){
  var finalButton = _("finalCheckout");
  if(finalButton){
    finalButton.addEventListener("click",function(){

    //Creates Varaibles.
    var addressLineOne, addressLineTwo, county, postCode, contatNumber, xhr;

    xhr = new XMLHttpRequest();

    //All the files brought in from the form.
    addressLineOne = _("firstLineAddressValue").value;
    addressLineTwo = _("secondLineAddressValue").value;
    county = _("countyNumber").value;
    postCode = _("postCodeValue").value;
    contactNumber = _("contactNumberValue").value

    var vars = "addressLineOne="+addressLineOne+"&addressLineTwo="+addressLineTwo+"&county="+county+"&postCode="+postCode+"&contactNumber="+contactNumber;

    changeListener = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
           printMessage(xhr.responseText, target, clearScreen);
        }
      };

      xhr.open("POST", "SQL/checkoutSQL.php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = changeListener;
      xhr.send(vars);
    });
  }
}
//This prints the message saying that the order is being prossed. Ans sets the previous page back to visible.
function printMessage(JSONobj, target, clearScreen){
  target.style.display = 'none';
  localStorage.clear();
  var checkoutFinished = _("checkoutComplete").style.display ='block';
  window.setTimeout(textVanish, 3000);
  updateBasket(clearScreen);
}
function textVanish() {
    var checkoutFinished = _("checkoutComplete").style.display ='none';
}
//Update the basket length.
function updateBasket(clearScreen) {
    var localStorageLength = localStorage.length;
    basketTotal.innerHTML = localStorageLength;
    runFinal(clearScreen);
}
//Loads the first function in listproducts.js
function runFinal(clearScreen){
  clearScreen.style.display ='block';
  _("disapearOnCheckout").style.display ='block';
      pageLoaded("");
}
