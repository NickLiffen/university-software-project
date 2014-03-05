
//----------------------All these functions below are for onKeyUp -------

		



function validate(var) {
			var x=document.forms["myForm"]["var"].value;
				if (x==null || x=="")
 				{
 					document.getElementById("errorname").style.color = "red";
  					document.getElementById("errorname").innerHTML="This field is compulsary";
            return false;
 				 }
 				else {
 					document.getElementById("errorname").style.color = "green";
 					document.getElementById("errorname").innerHTML="Thats Fine!";
  					
 				}
			}



validateForm = function() {

		var errors = 0

			var x=document.forms["myForm"]["name"].value;
				if (x==null || x=="")
 				{
 					document.getElementById("errorname").style.color = "red";
  				document.getElementById("errorname").innerHTML="Please enter in a name";
 					return false;
 					errors = errors + 1;
				}
        else {
          document.getElementById("erroname").innerHTML="";
        }

			var d=document.forms["myForm"]["quantity"].value;
				if (isNaN(d) || d==null || d=="")
  				{
  					document.getElementById("errorquantity").style.color = "red";
  					document.getElementById("errorquantity").innerHTML="Please enter in a quantity & it must be a number";
  					return false;
  					errors = errors + 1;
  				}

  			var c=document.forms["myForm"]["description"].value;
				if (c==null || c=="")
  				{
  					document.getElementById("errordescription").style.color = "red";
  					document.getElementById("errordescription").innerHTML="Please enter in a description";
  					return false;
  					errors = errors + 1;
  				}

  			var b=document.forms["myForm"]["category"].value;
				if (b==null || b=="")
				{
					document.getElementById("errorcategory").style.color = "red";
					document.getElementById("errorcategory").innerHTML="Please enter in a catagory";
					return false;
					errors = errors + 1;
				}

			var e=document.forms["myForm"]["price"].value;
				if (isNaN(e) || e==null || e=="")
  				{
  					document.getElementById("errorprice").style.color = "red";
  					document.getElementById("errorprice").innerHTML="Please enter in a price & it must be a number";
  					return false;
  					errors = errors + 1;
  				}


  				if(errors > 0){

  					return false;
  				}
  				else {

  					fetch();

  				}

  		}