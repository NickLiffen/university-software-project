//Function that meand I don't have to type getElementById all the time!!
function _(el) {
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
    xhr.open("GET", "SQL/collectProductsSQL.php", true);
    xhr.onreadystatechange = changeListener;
    xhr.send();

};
//Parses the JSON Object created and formats it to the way I like
function json(jsonObj, target) {
    var json_output = JSON.parse(jsonObj);
    //Starts the loop
    for (var i = 0; i < json_output.length; i++) {
        var output = "<div id='item" + json_output[i].id + "' class='item'>" +
            "<h2> Product Name: " + json_output[i].name + '</h2>' +
            "<p><img src='../CMS/images/" + json_output[i].name + ".jpg'> </p>" +
            "<p> Amount in Stock: " + json_output[i].quantity + '</p>' +
            "<p> Product Description: " + json_output[i].description + '</p>' +
            "<p> Product Category: " + json_output[i].category + '</p>' +
            "<p> Product Price: £" + json_output[i].price + '</p>' +
            "</div>";
        //This outputs the array
        target.innerHTML += output;
    }
};
window.addEventListener("load", pageLoaded);
