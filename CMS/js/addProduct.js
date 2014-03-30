var  pageLoaded, validateForm, changeListener;


function _(el){
  return document.getElementById(el);
}


function uploadedFile() {

  var file, name, description, quantity, category, price, xhr, target;

  xhr = new XMLHttpRequest();

  target = _("status");

  file = _("file1").files[0];
  name = _("name").value;
  description = _("description").value;
  quantity = _("quantity").value;
  category = _("category").value;
  price = _("price").value

  var formdata = new FormData();

  formdata.append("file1", file);
  formdata.append("name", name);
  formdata.append("quantity", quantity);
  formdata.append("description", description);
  formdata.append("category", category);
  formdata.append("price",price);


changeListener = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
       target.innerHTML = xhr.responseText;
    } else {
      target.innerHTML = "<p>Something went wrong.</p>";
    }
  };

  xhr.open("POST", "SQL/addProductSQL.php", true);
  //xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = changeListener;
  xhr.send(formdata);

}


validateForm = function() {

  var errors = 0;

  var a=document.forms["myForm"]["name"].value;

    if (a==null || a=="")
      {
        document.getElementById('errorname').innerHTML="Please enter a name";
        errors = errors + 1;
      }

    var b=document.forms["myForm"]["quantity"].value;

    if (b==null || b=="")
      {
        document.getElementById('errorquantity').innerHTML="Please enter a quantity";
        errors = errors + 1;
      }

    var c=document.forms["myForm"]["description"].value;

    if (c==null || c=="")
      {
        document.getElementById('errordescription').innerHTML="Please enter a description";
        errors = errors + 1;
      }

    var d=document.forms["myForm"]["category"].value;

    if (d==null || d=="")
      {
        document.getElementById('errorcategory').innerHTML="Please enter a category";
        errors = errors + 1;
      }

    var e=document.forms["myForm"]["price"].value;

    if (e==null || e=="")
      {
        document.getElementById('errorprice').innerHTML="Please enter a price";
        errors = errors + 1;
      }

      if(errors > 0){

        return false;
      }
      else {

        uploadedFile();
      }

}




pageLoaded = function() {
  var fetchbutton = _("submit");
    if(fetchbutton) {
      fetchbutton.addEventListener("click", validateForm);
    }
}


window.addEventListener("load", pageLoaded);
