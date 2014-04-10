//AJAX function that sends though the DELETED ID.
function ajaxDelete(productID, str) {
    ajaxGet("SQL/deleteProductSQL.php?id=" + productID, deleteMessage, str, null);
}
//Makes the message visible for 1 second.
function deleteMessage(object, str) {
    var messsage = _("productDeleteShow").style.display = "block";
    window.setTimeout(vanishText, 1000);
    searchAJAX(str);
}
//Makes both the display of Modify and Delete Messages none.
function vanishText(str) {
    var messsage = _("productModifyShow").style.display = 'none';
    var messsage = _("productDeleteShow").style.display = 'none';
}
