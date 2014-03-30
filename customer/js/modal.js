//------------------------ MODAL ----------------------
/*This sets the liseteners for the modal - it checks the positioning of the modal
and then bubles up to the id of the modal- this means the user can click anywhwere
on the product and not one small space */
function setListeners() {
    var itemsContainer = _("collectInfo");
    itemsContainer.addEventListener("click", function (event) {
        var e = event.target;
        while (e.id.indexOf('item') == -1) {
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
    xhr.open("GET", "SQL/collectProductsModalSQL.php?data=" + data, true);
    xhr.onreadystatechange = changeListener;
    xhr.send();
};
//Formatting the way it is outputting - PARSE the JSON Object
function jsonModal(jsonObj) {
    var json_output = JSON.parse(jsonObj);
    //Loops through the parsed object.
    for (var i = 0; i < json_output.length; i++) {
        //Collects the products ID -- (THIS IS FOR THE BASKET!!)
        var product_id = json_output[i].id;
        //Collects the product quantity -- (THIS IS FOR THE BASKET!!)
        var productTotalInDB = +json_output[i].quantity;
        //This is for the MODAL
        var output = "<div id='item" + json_output[i].id + "' class='itemModal'>" +
            "<h2> Product Name: " + json_output[i].name + "</h2>" +
            "<p><img src='../CMS/Images/" + json_output[i].name + ".jpg'></p>" +
            "<div id='pmodal'>" +
            "<p><span class='bold'>Amount in Stock:</span> " + json_output[i].quantity + "</p>" +
            "<p><span class='bold'>Description:</span> " + json_output[i].description + "</p>" +
            "<p><span class='bold'>Category:</span> " + json_output[i].category + "</p>" +
            "<p><span class='bold'>Price: £</span> " + json_output[i].price + "</p>" +
            "<p><span class='bold'>How many would you like: </span><input type ='number' id ='numberQuantityForProduct'> <p><span id='numberValidate'></span></p><p><span id='numberValidateInDB'></span></p></p>" +
            "<p><input type='button' value='Add to Basket!' id='addToBasketButton'><p>" +
            "</div>" +
            "</div>";

        injectIntoModal(product_id, productTotalInDB, output);
    }
};
//Injects product information into Modal
function injectIntoModal(product_id, productTotalInDB, data) {
    var modal = document.querySelector(".modal");
    modal.innerHTML = data;
    toggleModal(modal);
    basketButtonLoad(product_id, productTotalInDB, modal);
}
//Toggles the Modal
function toggleModal(modal) {
    modal.classList.toggle('modal--hidden');
    closeModal(modal);
}
//Closes the Modal using the ESC key
function closeModal(modal) {
    document.onkeydown = function (evt) {
        evt = evt || window.event;
        if (evt.keyCode == 27) {
            modal.classList.toggle('modal--hidden');
        }
    }
};
window.addEventListener("load", setListeners());
