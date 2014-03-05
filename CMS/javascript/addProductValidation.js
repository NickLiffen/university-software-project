

function _(el){
	return document.getElementById(el);
}


validateName = function(){

	var a=document.forms["myForm"]["name"].value;

		if (a==null || a=="")
  		{
  			document.getElementById('errorname').innerHTML="Please enter a name";
  			return false;
  		}	
}

validateQuantity = function(){

  	var b=document.forms["myForm"]["quantity"].value;

		if (b==null || b=="")
  		{
  			document.getElementById('errorquantity').innerHTML="Please enter a quantity";
  			return false;
  		}
}

validateDescription = function(){
  	var c=document.forms["myForm"]["description"].value;

		if (c==null || c=="")
  		{
  			document.getElementById('errordescription').innerHTML="Please enter a description";
  			return false;
  		}
}

validateCategory = function() {
  	var d=document.forms["myForm"]["category"].value;

		if (d==null || d=="")
  		{
  			document.getElementById('errorcategory').innerHTML="Please enter a category";
  			return false;
  		}
}

validatePrice = function(){
  	var e=document.forms["myForm"]["price"].value;

		if (e==null || e=="")
  		{
  			document.getElementById('errorprice').innerHTML="Please enter a price";
  			false;
  		}
}






pageLoaded = function() {

	var fetchName = _("name");
	var fetchQuantity = _("quantity");
	var fetchDescription = _("description");
	var fetchCategory = _("category");
	var fetchPrice = _("price");

		if(fetchName) {
			fetchName.addEventListener("keyup", validateName);
		}
		if(fetchQuantity) {
			fetchQuantity.addEventListener("keyup", validateQuantity);
		}
		if(fetchDescription) {
			fetchDescription.addEventListener("keyup", validateDescription);
		}
		if(fetchCategory) {
			fetchCategory.addEventListener("keyup", validateCategory);
		}
		if(fetchPrice) {
			fetchPrice.addEventListener("keyup", validatePrice);
		}
}

window.addEventListener("load", pageLoaded);