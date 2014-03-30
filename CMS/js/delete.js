function ajaxDelete(productID, str){
  var xhr, id
  xhr = new XMLHttpRequest();
  id= productID;

  changeListener = function () {
  if(xhr.readyState == 4 && xhr.status == 200) {
    deleteMessage(xhr.responseText, str);
  }
};

xhr.open("GET", "SQL/deleteProductSQL.php?id="+id, true);
xhr.onreadystatechange = changeListener;
xhr.send();
}

function deleteMessage(object, str){
  var messsage = _("productDeleteShow").style.display = "block";
  window.setTimeout(vanishText, 1000);
  searchAJAX(str);
}
function vanishText(str){
  var messsage = _("productModifyShow").style.display = 'none';
  var messsage = _("productDeleteShow").style.display = 'none';
}
