/*These are the functions that are used to return an object/array/varible. They are used throughout my project
so I have decided to created one file that includes all the useful functions */

//Returns an element by
function _(el) {
    return document.getElementById(el);
}
//Returns a Class Name
function _c(el) {
    return document.getElementsByClassName(el);
}
//Returns if the varible being passed in is a number
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
//Callback for the GET AJAX call
function ajaxGet(url,callback, target) {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    callback(xhr.responseText, target);
  }
  xhr.open("GET", url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send();
}
//Callback for the POST AJAX call
function ajaxPost(url,data,callback, target) {
  xhr = new XMLHttpRequest();
  xhr.onload = function() {
    callback(xhr.responseText, target);
  }
  xhr.open("POST", url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send('data=' + data);
}
//Returns true or false to see if an object is empty.
function isEmpty(obj) {
    if (obj == null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }
    return true;
}
