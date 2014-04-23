//Sends though the ID of the product that the user wants to UPDATE.
function ajaxModify(productID, str, target) {
    ajaxGet("SQL/updateProductSQL.php?id=" + productID, updateProduct, target, str);
}
//Shows the new form that allows the user to enter in the new information.
function updateProduct(jsonObj, target, str) {
  var json_output, newTarget, output;
    json_output = JSON.parse(jsonObj);
    //Removes all other products from the page. Focuses the user on that one specific update form.
    target.innerHTML = "";
    newTarget = _("modifyResult");
    //Removes all other forms that have been on the page before. The user only wants to see the current form not all the previous ones.
    newTarget.innerHTML = "";
    newTarget.style.display = "block";

    //Starts the loop and prints out the form.
    for (var i = 0; i < json_output.length; i++) {
        output = "<fieldset><legend><span>Would you like to Update a product?</span></legend>" +
            "<form method='post' id = 'Form' enctype='multipart/form-data' name='Form' onsubmit='return false;'>" +
            "<br />" +
            "<input type = 'hidden'  id='idUpdate' name = 'id' value = " + json_output[i].id + " > " +
            "<p>Please Update the Product Name: *<input type='text' id='nameUpdate' name='nameUpdate' value = " + json_output[i].name + " > </p>" +
            "<p>Please Update the Product Quantity: *<input type='text' id='quantityUpdate' name='quantityUpdate' value = " + json_output[i].quantity + " > </p>" +
            "<p>Please Update the Product Description: *<input type='text' id='descriptionUpdate' name='descriptionUpdate' value = " + json_output[i].description + " > </p>" +
            "<p>Please enter a product category:* <select id='categoryDropDown'>" +
              "<option value=  " + json_output[i].category + " > " + json_output[i].category +  "</option>" +
              "<option value='clothing'>Clothing</option>" +
              "<option value='electronics'>Electronics</option>" +
              "<option value='software'>Software</option>" +
              "<option value='sport'>Sport</option>" +
              "<option value='music'>Music</option>" +
              "<option value='household'>Household</option>" +
              "<option value='other'>Other</option>" +
            "</select></p>" +
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
  var fetchSubmitButton;
    fetchSubmitButton = _("submitNew");
    if (fetchSubmitButton) {
        fetchSubmitButton.addEventListener("click", function () {
            //Creates Varaibles.
            var idUpdate, nameUpdate, quantityUpdate, descriptionUpdate, categoryUpdate, categoryText, priceUpdate, formData;
            //All the files brought in from the form.
            idUpdate = _("idUpdate").value;
            nameUpdate = _("nameUpdate").value;
            quantityUpdate = _("quantityUpdate").value;
            descriptionUpdate = _("descriptionUpdate").value;
            categoryText = _("categoryDropDown");
            categoryUpdate = categoryText.options[categoryText.selectedIndex].text;
            priceUpdate = _("priceUpdate").value;
            //FormData is a safe and easy method of posting data.
            formdata = new FormData();
            formdata.append("idUpdate", idUpdate);
            formdata.append("nameUpdate", nameUpdate);
            formdata.append("quantityUpdate", quantityUpdate);
            formdata.append("descriptionUpdate", descriptionUpdate);
            formdata.append("categoryUpdate", categoryUpdate);
            formdata.append("priceUpdate", priceUpdate);
            //Calling the AJAX Post function that I have already created
            ajaxPost("SQL/updatedProductInfoSQL.php", formdata, modifyMessage, newTarget, str);
        });
    }
}
//Shows the user the modified message.
function modifyMessage(jsonObj, newTarget, str) {
  var message;
    newTarget.style.display = "none";
    messsage = _("productModifyShow").style.display = "block";
    window.setTimeout(vanishText, 1000);
    searchAJAX(str);
}
