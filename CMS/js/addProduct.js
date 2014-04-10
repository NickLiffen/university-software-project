var pageLoaded, validateForm;
//Sends through my product information.
function uploadedProduct() {
    var file, name, description, quantity, category, price, target, vars;
    //Collectting varibles. All using my _ function that collects ID's.
    file = _("file1").files[0];
    target = _("status");
    name = _("name").value;
    description = _("description").value;
    quantity = _("quantity").value;
    category = _("category").value;
    price = _("price").value
    //FormData is a safe and easy method of posting data.
    var formdata = new FormData();
    formdata.append("file1", file);
    formdata.append("name", name);
    formdata.append("quantity", quantity);
    formdata.append("description", description);
    formdata.append("category", category);
    formdata.append("price", price);
    //Calling the AJAX Post function that I have already created
    ajaxPost("SQL/addProductSQL.php", formdata, jsonThis, target, null);
}

//Formatting the way that I want my data to be presnted.
function jsonThis(jsonObj, target) {
    var json_output = JSON.parse(jsonObj);
    target.innerHTML = "";
    target.innterHTML = "Product Added Successfully.";
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
        var output = "<div id='item" + json_output[i].id + "' class='item'>" +
            "<h2> Product Name: " + json_output[i].name + '</h2>' +
            "<p><img src='../CMS/images/" + json_output[i].id + ".jpg'> </p>" +
            "<p> Amount in Stock: " + json_output[i].quantity + '</p>' +
            "<p> Product Description: " + json_output[i].description + '</p>' +
            "<p> Product Category: " + json_output[i].category + '</p>' +
            "<p> Product Price: £" + json_output[i].price + '</p>' +
            "</div>";
        //This outputs the array
        target.innerHTML += output;

        var productAddedSuccessfully = _("productAddedSuccessfully");
        productAddedSuccessfully.style.display = "block";
        productAddedSuccessfully.innerHTML = "Product Added";
        window.setTimeout(vanishText, 3000);
    }
}
//Makes the text that comes up saying 'Product Deleted' display none.
function vanishText() {
    var productAddedSuccessfully = _("productAddedSuccessfully").style.display = 'none';
}
//Validates the Form that allows the user to enter a product to the database.
validateForm = function () {
    //Sets errors to 0
    var errors = 0;
    //Checks the name value of the form is entered.
    var a = document.forms["myForm"]["name"].value;
    if (a == null || a == "") {
        document.getElementById('errorname').innerHTML = "Please enter a name";
        errors = errors + 1;
    }
    //Checks the quantity value is entered.
    var b = document.forms["myForm"]["quantity"].value;
    if (b == null || b == "") {
        document.getElementById('errorquantity').innerHTML = "Please enter a quantity";
        errors = errors + 1;
    }
    //Checks the description part is entered.
    var c = document.forms["myForm"]["description"].value;
    if (c == null || c == "") {
        document.getElementById('errordescription').innerHTML = "Please enter a description";
        errors = errors + 1;
    }
    //Checks to see if a category has been entered.
    var d = document.forms["myForm"]["category"].value;
    if (d == null || d == "") {
        document.getElementById('errorcategory').innerHTML = "Please enter a category";
        errors = errors + 1;
    }
    //Checks to see if the price has been entered.
    var e = document.forms["myForm"]["price"].value;
    if (e == null || e == "") {
        document.getElementById('errorprice').innerHTML = "Please enter a price";
        errors = errors + 1;
    }
    //If there are any errors are found it returns false but if not it proccedds.
    if (errors > 0) {
        return false;
    } else {
        uploadedProduct();
    }
}
//Waits and Checks to see when the submit button has been pressed.
pageLoaded = function () {
    var fetchbutton = _("submit");
    if (fetchbutton) {
        fetchbutton.addEventListener("click", validateForm);
    }
}
//Event Listner for when the page loads.
window.addEventListener("load", pageLoaded);
