


function ajaxGet(url,callback) {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    callback(xhr.responseText);
  }
  xhr.open("GET", url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send();
}

function ajaxPost(url,data,callback) {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    callback(xhr.responseText);
  }
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send('data=' + data);
}

function log(xhr){
  console.log(xhr);
}

function load(){
ajaxGet('customer/SQL/collectProductsSQL.php', log);
}
