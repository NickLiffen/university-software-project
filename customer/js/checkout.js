//This function collects the content for what I want to be in the checkout page
function getContent(clearScreen){
  //Gets the div where everything is going to be put.
  var target = _("checkout");
  target.style.display ='block';
  target.innerHTML = " ";
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
          "<p>First Line of Address: *<input type='text' name ='firstLineAddressValue' id='firstLineAddressValue' placeholder='Enter Here'/><span id='errorOne'></span></p>"+
          "<p>Second Line of Address: *<input type='text' name='secondLineAddressValue' id='secondLineAddressValue' placeholder='Enter Here'/></p>"+
          "<p>County: *<input type='text' id='countyNumber' name='countyNumber' placeholder='Enter Here'/><span id='errorTwo'></span></p>"+
          "<p>PostCode: *<input type='text' id='postCodeValue' name='postCodeValue' placeholder='Enter Here'/><span id='errorThree'></span></p>"+
          "<p>Contact Number: *<input type='text' id='contactNumberValue' name='contactNumberValue' placeholder='Enter Here'/><span id='errorFour'></span></p>"+
          "<br />"+
          "</form>"+
          "<div id='statusUpdate'></div>"+
          "</fieldset>";
          //This outputs the form above
          target.innerHTML += outputNew;

          target.innerHTML += "<p class='floatLeftAndStyle'>Please make sure that all the information is correct and the address you have ordered is correct.</p>"

          target.innerHTML += "<div id='finalCheckout'><input type ='button' id='finalCheckout' value='Checkout'/></div>"
          //This runs the AJAX request for POSTING the address information to the database.
          validateAddress(target, clearScreen);
}
//Validates the Form that allows the user to enter a product to the database.
function validateAddress(target, clearScreen) {
  var finalButton = _("finalCheckout");
  if(finalButton){
    finalButton.addEventListener("click",function(){
  //Sets errors to 0
  var errors = 0;
 //Checks the name value of the form is entered.
  var a=document.forms["Form"]["firstLineAddressValue"].value;
    if (a==null || a=="")
      {
        var errorOne = _('errorOne')
        errorOne.style.color ='red';
        errorOne.innerHTML="Please enter an address";
        errors = errors + 1;
      }
  //Checks the description part is entered.
  var c=document.forms["Form"]["countyNumber"].value;
    if (c==null || c=="")
      {
        var errorTwo = _('errorTwo');
        errorTwo.style.color='red';
        errorTwo.innerHTML="Please enter a county";
        errors = errors + 1;
      }
  //Checks to see if a category has been entered.
  var d=document.forms["Form"]["postCodeValue"].value;
    if (d==null || d=="")
      {
        var errorThree = _('errorThree')
        errorThree.style.color = "red";
        errorThree.innerHTML="Please enter a PostCode";
        errors = errors + 1;
      }
  //Checks to see if the price has been entered.
  var e=document.forms["Form"]["contactNumberValue"].value;
    if (e==null || e=="")
      {
        var errorFour = _('errorFour');
        errorFour.style.color = "red";
        errorFour.innerHTML = "Please enter a number";
        errors = errors + 1;
      }
      //If there are any errors are found it returns false but if not it proccedds.
      if(errors > 0){
        return false;
      }
      else {
        runAJAX(target, clearScreen);
      }
});
}
}
//This actually runs the ajax request
function runAJAX(target, clearScreen){

    //Creates Varaibles.
    var addressLineOne, addressLineTwo, county, postCode, contatNumber, noOfProducts, xhr;

    xhr = new XMLHttpRequest();

    noOfProducts = localStorage.length;
    console.log(noOfProducts);

    //All the files brought in from the form.
    addressLineOne = _("firstLineAddressValue").value;
    addressLineTwo = _("secondLineAddressValue").value;
    county = _("countyNumber").value;
    postCode = _("postCodeValue").value;
    contactNumber = _("contactNumberValue").value

    var vars = "addressLineOne="+addressLineOne+"&addressLineTwo="+addressLineTwo+"&county="+county+"&postCode="+postCode+"&contactNumber="+contactNumber+"&noOfProducts="+noOfProducts;

    changeListener = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
           printMessage(xhr.responseText, target, clearScreen);
        }
      };

      xhr.open("POST", "SQL/checkoutSQL.php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = changeListener;
      xhr.send(vars);
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
