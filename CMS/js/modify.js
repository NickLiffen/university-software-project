//Sends though the ID of the product that the user wants to UPDATE.
function ajaxModify(productID, str, target) {
    var xhr, id
        xhr = new XMLHttpRequest();
    id = productID;
    changeListener = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            updateProduct(xhr.responseText, str, target);
        }
    };
    xhr.open("GET", "SQL/updateProductSQL.php?id=" + id, true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
}
//Shows the new form that allows the user to enter in the new information.
function updateProduct(jsonObj, str, target) {
    var json_output = JSON.parse(jsonObj);
    //Removes all other products from the page. Focuses the user on that one specific update form.
    target.innerHTML = "";
    var newTarget = document.getElementById("modifyResult");
    //Removes all other forms that have been on the page before. The user only wants to see the current form not all the previous ones.
    newTarget.innerHTML = "";
    newTarget.style.display = "block";

    //Starts the loop and prints out the form.
    for (var i = 0; i < json_output.length; i++) {

        var output = "<fieldset><legend><span>Would you like to Update a product?</span></legend>" +
            "<form method='post' id = 'Form' name='Form' onsubmit='return false;'>" +
            "<br />" +
            "<input type = 'hidden'  id='idUpdate' name = 'id' value = " + json_output[i].id + " > " +
            "<p>Please Update the Product Name: *<input type='text' id='nameUpdate' name='nameUpdate' value = " + json_output[i].name + " > </p>" +
            "<p>Please Update the Product Quantity: *<input type='text' id='quantityUpdate' name='quantityUpdate' value = " + json_output[i].quantity + " > </p>" +
            "<p>Please Update the Product Description: *<input type='text' id='descriptionUpdate' name='descriptionUpdate' value = " + json_output[i].description + " > </p>" +
            "<p>Please Update the Product Category: *<input type='text' id='categoryUpdate' name='categoryUpdate' value = " + json_output[i].category + " > </p>" +
            "<p>Please Update the Product Price: *<input type='text' id='priceUpdate' name='priceUpdate' value = " + json_output[i].price + " > </p>" +
            "<br />" +
            "<input name='submitNew' id='submitNew' type='button' value='Update Product'/>" +
            "</form>" +
            "<div id='statusUpdate'></div>" +
            "</fieldset>";
        //This outputs the array
        newTarget.innerHTML += output;
    }
    finalUpdate(str, newTarget);
}
//Sends through the final information to be updated.
function finalUpdate(str, newTarget) {
    var fetchSubmitButton = document.getElementById("submitNew");
    if (fetchSubmitButton) {
        fetchSubmitButton.addEventListener("click", function () {

            var xhr, idUpdate, nameUpdate, quantityUpdate, descriptionUpdate, categoryUpdate, priceUpdate, target;

            xhr = new XMLHttpRequest();

            target = document.getElementById("statusUpdate");

            idUpdate = document.getElementById("idUpdate").value;
            nameUpdate = document.getElementById("nameUpdate").value;
            quantityUpdate = document.getElementById("quantityUpdate").value;
            descriptionUpdate = document.getElementById("descriptionUpdate").value;
            categoryUpdate = document.getElementById("categoryUpdate").value;
            priceUpdate = document.getElementById("priceUpdate").value;

            var vars = "idUpdate=" + idUpdate + "&nameUpdate=" + nameUpdate + "&quantityUpdate=" + quantityUpdate + "&descriptionUpdate=" + descriptionUpdate + "&categoryUpdate=" + categoryUpdate + "&priceUpdate=" + priceUpdate;
            changeListener = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    modifyMessage(str, newTarget);
                }
            };
            xhr.open("POST", "SQL/updatedProductInfoSQL.php", true);
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.onreadystatechange = changeListener;
            xhr.send(vars);
        });
    }
}
//Shows the user the modified message.
function modifyMessage(str, newTarget) {
    newTarget.style.display = "none";
    var messsage = _("productModifyShow").style.display = "block";
    window.setTimeout(vanishText, 1000);
    searchAJAX(str);
}
