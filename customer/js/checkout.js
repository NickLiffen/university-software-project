//This function collects the content for what I want to be in the checkout page
function getContent(clearScreen) {
    var target, outputNew, targetAddress, output, json_output, postData, dataToSend;
    //Gets the div where everything is going to be put.
    target = _("checkout");
    targetAddress = _("checkoutAddress");
    target.style.display = 'block';
    targetAddress.style.display = 'block';
    target.innerHTML = " ";
    targetAddress.innerHTML = " ";

    target.innerHTML = "<h2 class='middle'>Checkout</h2>";
    target.innerHTML += "<h2 class='middle'>Your Items</h2>";

    for (var a in localStorage) {
        json_output = JSON.parse(localStorage[a]);
        for (var i = 0; i < json_output.length; i++) {
            output = "<div id='item" + json_output[i].id + "' class='item'>" +
                "<h2> Product Name: " + json_output[i].name + '</h2>' +
                "<p><img src='../CMS/images/" + json_output[i].id + ".jpg'> </p>" +
            	"<p> Product Price: £" + json_output[i].price + '</p>' +
                "<p> Product Description: " + json_output[i].description + '</p>' +
                "<p> Quantity In Basket: " + json_output[i].BasketTotal +  '</p>' +
                "<p> Total Cost: £" + (json_output[i].price * json_output[i].BasketTotal) + '</p>' +
                "</div>";
            target.innerHTML += output;
            dataToSend= [{
                          id: json_output[i].id,
                          quantity: json_output[i].BasketTotal
                      }]
                      console.log(test);
        }
    }
    targetAddress.innerHTML += "<div class ='paddingBottom'></div>";
    targetAddress.innerHTML += "<h2>Please Enter Your Address:</h2>";
    //This outputs the form that allows the user to enter there address.
    outputNew = "<fieldset><legend><span>Please Enter your Address?</span></legend>" +
        "<form method='post' id='Form' enctype='multipart/form-data' name='Form' onsubmit='return false;'>" +
        "<br />" +
        "<p>First Line of Address: *<input type='text' name ='firstLineAddressValue' id='firstLineAddressValue' placeholder='Enter Here'/><span id='errorOne'></span></p>" +
        "<p>Second Line of Address: *<input type='text' name='secondLineAddressValue' id='secondLineAddressValue' placeholder='Enter Here'/></p>" +
        "<p>County: *<input type='text' id='countyNumber' name='countyNumber' placeholder='Enter Here'/><span id='errorTwo'></span></p>" +
        "<p>PostCode: *<input type='text' id='postCodeValue' name='postCodeValue' placeholder='Enter Here'/><span id='errorThree'></span></p>" +
        "<p>Contact Number: *<input type='text' id='contactNumberValue' name='contactNumberValue' placeholder='Enter Here'/><span id='errorFour'></span></p>" +
        "<br />" +
        "</form>" +
        "<div id='statusUpdate'></div>" +
        "</fieldset>";
    //This outputs the form above
    targetAddress.innerHTML += outputNew;

    targetAddress.innerHTML += "<p class='floatLeftAndStyle'>Please make sure that all the information is correct and the address you have ordered is correct.</p>"

    targetAddress.innerHTML += "<div id='finalCheckout'><input type ='button' id='finalCheckout' value='Checkout'/></div>"
    //This runs the AJAX request for POSTING the address information to the database.
    validateAddress(target, clearScreen, targetAddress, dataToSend);
}
//Validates the Form that allows the user to enter a product to the database.
function validateAddress(target, clearScreen, targetAddress, dataToSend) {
  var finalButton;
    finalButton = _("finalCheckout");
    if (finalButton) {
        finalButton.addEventListener("click", function () {
          var errors, a, c, d, e, errorOne, errorTwo, errorThree, errorFour;
            //Sets errors to 0
            errors = 0;
            //Checks the name value of the form is entered.
             a = document.forms["Form"]["firstLineAddressValue"].value;
            if (a == null || a == "") {
                errorOne = _('errorOne')
                errorOne.style.color = 'red';
                errorOne.innerHTML = "Please enter an address";
                errors = errors + 1;
            }
            //Checks the description part is entered.
             c = document.forms["Form"]["countyNumber"].value;
            if (c == null || c == "") {
                errorTwo = _('errorTwo');
                errorTwo.style.color = 'red';
                errorTwo.innerHTML = "Please enter a county";
                errors = errors + 1;
            }
            //Checks to see if a category has been entered.
             d = document.forms["Form"]["postCodeValue"].value;
            if (d == null || d == "") {
                errorThree = _('errorThree')
                errorThree.style.color = "red";
                errorThree.innerHTML = "Please enter a PostCode";
                errors = errors + 1;
            }
            //Checks to see if the price has been entered.
             e = document.forms["Form"]["contactNumberValue"].value;
            if (e == null || e == "") {
                errorFour = _('errorFour');
                errorFour.style.color = "red";
                errorFour.innerHTML = "Please enter a number";
                errors = errors + 1;
            }
            //If there are any errors are found it returns false but if not it proccedds.
            if (errors > 0) {
                return false;
            } else {
                runAJAX(target, clearScreen, targetAddress, dataToSend);
            }
        });
    }
}
//This actually runs the ajax request
function runAJAX(target, clearScreen, targetAddress, dataToSend) {
  console.log(dataToSend);
  //Creates Varaibles.
  var addressLineOne, addressLineTwo, county, postCode, contatNumber, noOfProducts, formdata;
  //All the files brought in from the form.
  targetAddress.style.display ='none';
  addressLineOne = _("firstLineAddressValue").value;
  addressLineTwo = _("secondLineAddressValue").value;
  county = _("countyNumber").value;
  postCode = _("postCodeValue").value;
  contactNumber = _("contactNumberValue").value
  noOfProducts = localStorage.length;
  //FormData is a safe and easy method of posting data.
  formdata = new FormData();
  formdata.append("addressLineOne", addressLineOne);
  formdata.append("addressLineTwo", addressLineTwo);
  formdata.append("county", county);
  formdata.append("postCode", postCode);
  formdata.append("contactNumber", contactNumber);
  formdata.append("noOfProducts", noOfProducts);
  //Calling the AJAX Post function that I have already created
  ajaxPost("SQL/checkoutSQL.php", formdata, printMessage, target, clearScreen);
}
//This prints the message saying that the order is being prossed. Ans sets the previous page back to visible.
function printMessage(JSONobj, target, clearScreen) {
    var checkoutFinished;
    target.style.display = 'none';
    localStorage.clear();
    checkoutFinished = _("checkoutComplete").style.display = 'block';
    window.setTimeout(textVanish, 3000);
    updateBasket(clearScreen);
}

function textVanish() {
  var checkoutFinished;
    checkoutFinished = _("checkoutComplete").style.display = 'none';
}
//Update the basket length.
function updateBasket(clearScreen) {
  var localStorageLength;
    localStorageLength = localStorage.length;
    basketTotal.innerHTML = localStorageLength;
    runFinal(clearScreen);
}
//Loads the first function in listproducts.js
function runFinal(clearScreen) {
    clearScreen.style.display = 'block';
    _("disapearOnCheckout").style.display = 'block';
    pageLoaded("");
}
