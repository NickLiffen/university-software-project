
maxPrice = function(){


		xhr = new XMLHttpRequest();

		target = document.getElementById("searchAJAX");

		changeListener = function () {
		if(xhr.readyState == 4 && xhr.status == 200) {
		   target.innerHTML = xhr.responseText;
		} else {
			target.innerHTML = "<p>Something went wrong.</p>";
		}
	};

	xhr.open("GET", "ajax/sql/maxPrice.php", true);
	xhr.onreadystatechange = changeListener;
	xhr.send();

}


pageLoadedd = function() {
	var fetchbutton = document.getElementById("maxPriceButton");
		if(fetchbutton) {
			fetchbutton.addEventListener("click", maxPrice);
		}
}


window.addEventListener("load", pageLoadedd);