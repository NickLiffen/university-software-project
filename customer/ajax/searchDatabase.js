function searchAJAX(str) {

	if (str.length==0)
  		{
  			document.getElementById("searchAJAX").innerHTML="";
  			document.getElementById("searchAJAX").style.border="0px";
  			return;
  		}


		xhr = new XMLHttpRequest();

		target = document.getElementById("searchAJAX");

		changeListener = function () {

		if(xhr.readyState == 4 && xhr.status == 200) {

		   json(xhr.responseText, target);

		}

	};

	var price = document.getElementById("price").value;


	xhr.open("GET", "ajax/sql/searchDatabaseSQL.php?str="+str+"&price="+price, true);
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


function injectIntoModal(product_id, data){
  var modal = document.querySelector(".modal");


  modal.innerHTML = data;
  toggleModal(modal);

	basketButtonLoad(product_id);
}



function toggleModal(modal){
  modal.classList.toggle('modal--hidden');
closeModal(modal);
}

//Closes the Modal using the ESC key
function closeModal(modal){
document.onkeydown = function(evt) {
	evt = evt || window.event;
	if (evt.keyCode == 27) {
			modal.classList.toggle('modal--hidden');
	}
}
};


function setListeners(){

 var itemsContainer = document.getElementById("searchAJAX");


 itemsContainer.addEventListener("click", function(event){

    var e = event.target;

      while(e.id.indexOf('item') == -1){
      e = e.parentNode;
    }

    var data = e.id;

    modalAjax(data);


    //injectIntoModal(data);

  }, false);

 }



function modalAjax(data) {

	// declare the two variables that will be used
	var xhr, changeListener;

	// find the element that should be updated
	//target = document.getElementById("collectInfo");

	var data = data;

	// create a request object
	xhr = new XMLHttpRequest();


	changeListener = function () {

		if (xhr.readyState === 4 && xhr.status === 200) {

			//Calls the function  JSON and puts in the response text and variale target
			jsonModal(xhr.responseText);

		}
	};

	// initialise a request, specifying the HTTP method
	// to be used and the URL to be connected to.
	xhr.open("GET", "ajax/sql/collectProductsModalSQL.php?data="+data, true);
	xhr.onreadystatechange = changeListener;
	xhr.send();

};


function jsonModal(jsonObj) {


	var json_output = JSON.parse(jsonObj);

	//Starts the loop
	for( var i=0; i < json_output.length; i++) {

		//Collects the products ID -- (THIS IS FOR THE BASKET!!)
		var product_id = json_output[i].id;

		var output 	= 	"<div id='item"										+	json_output[i].id  				+"' class='itemModal'>"	+
						"<h2> Product Name: " 								+ 	json_output[i].name				+ "</h2>"				+
						"<p><img src='../CMS/Images/" 						+	json_output[i].name 			+ ".jpg'></p>"			+
						"<div id='pmodal'>"																								+
						"<p><span class='bold'>Quantity:</span> " 		+ 	json_output[i].quantity 		+ "</p>" 				+
						"<p><span class='bold'>Description:</span> " 	+ 	json_output[i].description 		+ "</p>" 				+
						"<p><span class='bold'>Category:</span> " 		+ 	json_output[i].category 		+ "</p>" 				+
						"<p><span class='bold'>Price:£</span> " 		+ 	json_output[i].price 			+ "</p>"				+
						"<p><span class='bold'>How many would you like: </span><input type ='number' id ='numberQuantity'> <span id='numberValidate'></span></p>"+
						"<p><input 	type='button' value='Add to Basket!' id='addToBasketButton'><p>" 												+
						"</div>"																										+
						"</div>";



						injectIntoModal(product_id, output);
	}
}

//----------------------  WORKING  ON BASKET -------------------------

//This clears local storage -- only called when needed - for test purposes
function clearLocalStorage(){
	localStorage.clear();
}

//Sets the start value of the basket to Local Storage total
function setBasketTotal(){
	var localStorageLength = localStorage.length;
	basketTotal.innerHTML = localStorageLength;
}

//Checks when the user clicks on the Add Baskey Button
function basketButtonLoad(product_id){
	var addToBasketButton = document.getElementById('addToBasketButton');
	if(addToBasketButton){
			addToBasketButton.addEventListener("click", getProductToPutInBasket(product_id));
		}
}
//Fires off an Ajax Request for the product the user wants to store in the database
function getProductToPutInBasket(product_id){

var xhr, changeListener;
var data = product_id;

xhr = new XMLHttpRequest();

changeListener = function () {

	if (xhr.readyState === 4 && xhr.status === 200) {
		storeItemInLocalStorage(xhr.responseText);
	}
};

xhr.open("GET", "ajax/sql/collectProductsBasketSQL.php?data="+data, true);
xhr.onreadystatechange = changeListener;
xhr.send();
};

//Stores the JSON object in Local Storage
function storeItemInLocalStorage(jsonObj){

	//Collects the product ID that I can store in Local Storage
	var json_output_parse = JSON.parse(jsonObj);
	for( var i=0; i < json_output_parse.length; i++) {
				var product_id = json_output_parse[i].id;
			}

	//Stores it in Local Storage
	var json_output_string = JSON.stringify(json_output_parse, null, '\t');
	localStorage.setItem(product_id, json_output_string);

}

//-------------------EVENT LISTENERS-----------
//window.addEventListener("load", clearLocalStorage());
window.addEventListener("load", setBasketTotal());
window.addEventListener("load", setListeners());
