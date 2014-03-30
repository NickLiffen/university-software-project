var fetch, pageLoaded, changeListener;

function _(el){
  return document.getElementById(el);
}

fetch = function () {

  var xhr, name, target;

  xhr = new XMLHttpRequest();

  target = _("status");

  name = _("name").value;


    changeListener = function () {
    if(xhr.readyState == 4 && xhr.status == 200) {
       target.innerHTML = xhr.responseText;
    } else {
      target.innerHTML = "<p>Something went wrong!</p>";
    }
  };

  xhr.open("GET", "SQL/deleteProductSQL.php?name="+name, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = changeListener;
  xhr.send();


}




pageLoaded = function() {
  var fetchbutton = _("submit");
    if(fetchbutton) {
      fetchbutton.addEventListener("click", fetch);
    }
}


window.addEventListener("load", pageLoaded);
