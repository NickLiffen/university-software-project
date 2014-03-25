//Function that meand I don't have to type getElementById all the time!!
function _(el){
	return document.getElementById(el);
}
//------------------------ Home Screen Printout ----------------------
var pageLoaded;
pageLoaded = function () {
	var xhr, target, changeListener;
		target = _("collectInfo");
			xhr = new XMLHttpRequest();
	changeListener = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
					json(xhr.responseText, target);
				}
			};
	xhr.open("GET", "ajax/sql/collectProductsSQL.php", true);
	xhr.onreadystatechange = changeListener;
	xhr.send();

};
//Parses the JSON Object created and formats it to the way I like
function json(jsonObj, target) {
	var json_output = JSON.parse(jsonObj);
	//Starts the loop
	for( var i=0; i < json_output.length; i++) {
		var output 	= 	"<div id='item"					+ json_output[i].id 				+"' class='item'>"	+
						"<h2> Product Name: " 						+ json_output[i].name	   	+ '</h2>'					 +
						"<p><img src='../CMS/Images/" 		+ json_output[i].name 			+ ".jpg'> </p>" 		+
						"<p> Product Quantity: " 				 + json_output[i].quantity 	+ '</p>' 					 +
						"<p> Product Description: " 			+ json_output[i].description+ '</p>' 					 +
						"<p> Product Category: " 				 + json_output[i].category 	+ '</p>' 					 +
						"<p> Product Price: £" 					 + json_output[i].price 		 + '</p>'			      +
						"</div>";
						//This outputs the array
						target.innerHTML += output;
	}
};
//------------------------ MODAL ----------------------
/*This sets the liseteners for the modal - it checks the positioning of the modal
and then bubles up to the id of the modal- this means the user can click anywhwere
on the product and not one small space */
function setListeners(){
 var itemsContainer = _("collectInfo");
 	itemsContainer.addEventListener("click", function(event){
    var e = event.target;
      while(e.id.indexOf('item') == -1){
      		e = e.parentNode;
    		}
    var data = e.id;
    modalAjax(data);
  }, false);

 }
//Sends off the AJAX Request to look for product clicked on in database.
function modalAjax(data) {
		//Creates AJAX request
		var xhr, changeListener;
		var data = data;
		xhr = new XMLHttpRequest();
		changeListener = function () {
			if (xhr.readyState === 4 && xhr.status === 200) {
						jsonModal(xhr.responseText);
					}
				};
		xhr.open("GET", "ajax/sql/collectProductsModalSQL.php?data="+data, true);
		xhr.onreadystatechange = changeListener;
		xhr.send();
};
//Formatting the way it is outputting - PARSE the JSON Object
function jsonModal(jsonObj) {
	var json_output = JSON.parse(jsonObj);
	//Loops through the parsed object.
	for( var i=0; i < json_output.length; i++) {
		//Collects the products ID -- (THIS IS FOR THE BASKET!!)
				var product_id = json_output[i].id;
				//This is for the MODAL
				var output 	= 	"<div id='item"											+	 json_output[i].id  				 +"' class='itemModal'>"	+
								"<h2> Product Name: " 												+ 	json_output[i].name				 + "</h2>"								+
								"<p><img src='../CMS/Images/" 								+	 json_output[i].name 				+ ".jpg'></p>"					 +
								"<div id='pmodal'>"													 +
								"<p><span class='bold'>Quantity:</span> " 		+ 	json_output[i].quantity 		+ "</p>" 								+
								"<p><span class='bold'>Description:</span> "  + 	json_output[i].description  + "</p>" 								+
								"<p><span class='bold'>Category:</span> " 		+ 	json_output[i].category 		+ "</p>" 								+
								"<p><span class='bold'>Price: £</span> " 		 + 	json_output[i].price 			 + "</p>"								 +
								"<p><span class='bold'>How many would you like: </span><input type ='number' id ='numberQuantityForProduct'> <span id='numberValidate'></span></p>"+
								"<p><input type='button' value='Add to Basket!' id='addToBasketButton'><p>" 												+
								"</div>"																			+
								"</div>";

								injectIntoModal(product_id, output);
			}
};
//Injects product information into Modal
function injectIntoModal(product_id, data){
	var modal = document.querySelector(".modal");
		modal.innerHTML = data;
			toggleModal(modal);
				basketButtonLoad(product_id);
}
//Toggles the Modal
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

//--------------------------BASKET----------------------
//This clears local storage -- only called when needed - for test purposes
function clearLocalStorage(){
	localStorage.clear();
}
//Sets the start value of the basket to Local Storage total
function setBasketTotal(){
	var localStorageLength = localStorage.length;
		basketTotal.innerHTML = localStorageLength;
}
//Checks when the user clicks on the Add To Basket Button and runs AJAX Request
function basketButtonLoad(product_id){
	var basketButton = _("addToBasketButton");
		if(basketButton){
				basketButton.addEventListener("click", function(){
				//This is the AJAX
				var xhr, changeListener;
					var productNo = _("numberQuantityForProduct").value;
						var data = product_id;
							xhr = new XMLHttpRequest();
				changeListener = function () {
					if (xhr.readyState === 4 && xhr.status === 200) {
								storeItemInLocalStorage(xhr.responseText);
							}
						};
				xhr.open("GET", "ajax/sql/collectProductsBasketSQL.php?data="+data+"&productNo="+productNo, true);
					xhr.onreadystatechange = changeListener;
						xhr.send();
					});
				}
}
//Stores the JSON object in Local Storage
function storeItemInLocalStorage(jsonObj){
	//Collects the product ID which I use as a key
	var json_output_parse = JSON.parse(jsonObj);
		for( var i=0; i < json_output_parse.length; i++) {
				var product_id = json_output_parse[i].id;
			}
	//Actually Stores it in local storage
	var json_output_string = JSON.stringify(json_output_parse, null, '\t');
	localStorage.setItem(product_id, json_output_string);
	increaseBasketNumber()
}
//Increase the basket number so it doesn't update only on load
function increaseBasketNumber(){
	var localStorageLength = localStorage.length;
		basketTotal.innerHTML = localStorageLength;
}
//-------------------EVENT LISTENERS-----------
//window.addEventListener("load", clearLocalStorage());
window.addEventListener("load", setBasketTotal());
window.addEventListener("load", pageLoaded);
window.addEventListener("load", setListeners());
