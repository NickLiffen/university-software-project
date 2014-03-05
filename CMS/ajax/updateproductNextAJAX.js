var fetchUpdate, pageLoadedUpdate;

function fetchUpdate(){

	var xhr, idUpdate, nameUpdate, quantityUpdate, descriptionUpdate, categoryUpdate, priceUpdate, target; 

	xhr = new XMLHttpRequest();

	target = document.getElementById("statusUpdate");

	idUpdate = document.getElementById("idUpdate").value;
	nameUpdate = document.getElementById("nameUpdate").value;
    quantityUpdate = document.getElementById("quantityUpdate").value;
    descriptionUpdate = document.getElementById("descriptionUpdate").value;
    categoryUpdate = document.getElementById("categoryUpdate").value;
    priceUpdate = document.getElementById("priceUpdate").value;

    var vars = "idUpdate="+idUpdate+"&nameUpdate="+nameUpdate+"&quantityUpdate="+quantityUpdate+"&descriptionUpdate="+descriptionUpdate+"&categoryUpdate="+categoryUpdate+"&priceUpdate="+priceUpdate;


    changeListener = function () {
		if(xhr.readyState == 4 && xhr.status == 200) {
		   target.innerHTML = xhr.responseText;
		} else {
			target.innerHTML = "<p>Something went wrong.</p>";
		}
	};

	xhr.open("POST", "ajax/sql/updateProductFinalSQL.php", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.onreadystatechange = changeListener;
	xhr.send(vars);

}


pageLoadedUpdate = function() {
	var fetchbutton = document.getElementById("submitNew");
		if(fetchbutton) {
			fetchbutton.addEventListener("click", fetchUpdate);
		}
}


window.addEventListener("load", pageLoadedUpdate);



