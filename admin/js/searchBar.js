function searchBar(str){
    if (str.length==0){
          _("hide").style.display='block';
          return;
        }
    else{
          _("hide").style.display='none';
        }
}
//This function sends through the letters to the AJAC function.
function pageLoaded(str) {
  var fetchbutton = _("searchForProducts");
  if(fetchbutton){
    fetchbutton.addEventListener("focus", searchBar(str));
  }
}
function setListeners(){
  lowStock();
  highStock();
}

window.addEventListener("load", setListeners());
