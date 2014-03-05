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

	xhr.open("GET", "ajax/sql/updateProductSQL.php?name="+name, true);
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





	/*
function json(jsonObj, target) {

	var json_output = JSON.parse(jsonObj);

	//Starts the loop
	for( var i=0; i < json_output.length; i++) {
		
		 				//create a form
						var f = document.createElement("form");
						f.setAttribute('method',"post");
						f.setAttribute('id', 'Form');
						f.setAttribute('onsubmit', 'return false');

						//create input element
						var a = document.createElement("input");
						a.setAttribute('type', "hidden");
						a.setAttribute('id', "idUpdate");
						a.setAttribute('value', json_output[i].id);

						//create input element
						var b = document.createElement("input");
						b.setAttribute('type', "text");
						b.setAttribute('id', "nameUpdate");
						b.setAttribute('value', json_output[i].name);

						//create input element
						var c = document.createElement("input");
						c.setAttribute('type', "text");
						c.setAttribute('id', "quantityUpdate");
						c.setAttribute('value', json_output[i].quantity);

						//create input element
						var d = document.createElement("input");
						d.setAttribute('type', "text");
						d.setAttribute('id', "descriptionUpdate");
						d.setAttribute('value', json_output[i].description);

						//create input element
						var e = document.createElement("input");
						e.setAttribute('tag', '<p>')
						e.setAttribute('type', "text");
						e.setAttribute('id', "categoryUpdate");
						e.setAttribute('value', json_output[i].categroy);

						//create input element
						var g = document.createElement("input");
						g.setAttribute('type', "text");
						g.setAttribute('id', "priceUpdate");
						g.setAttribute('value', json_output[i].price);

						//create a button
						var s = document.createElement("input");
						s.setAttribute('type', "button");
						s.setAttribute('value', "Submit");
						s.setAttribute('id', "submitNew");
						s.setAttribute('onclick', "onclick()");

						// add all elements to the form
						f.appendChild(a);
						f.appendChild(b);
						f.appendChild(c);
						f.appendChild(d);
						f.appendChild(e);
						f.appendChild(g);
						f.appendChild(s);

						var form = document.getElementById("DynamicForm");
 
    					//Append the element in page (in span).
    					form.appendChild(f);

						// add the form inside the body
						//document.getElementsByTagName('body')[0].appendChild(f); //pure javascript


						//This outputs the array
						//target.innerHTML += output;

					}
	}*/