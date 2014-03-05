<?php
$title = "Search for products";
include("header.php");
?>





							<div id = "searchbox">

							<form method="GET" name = "seachForm">

							<p>Search Box:  <input type = "search" id = "searchBox" placeholder = "Search for Products" onkeyup="pageLoaded(this.value)" class = "mytext"></p>

							<form>

							</div>

							
<section class = "searchRight">


		<h2>Search Options</h2>


		<h3>Price</h3>

		<p>Sort by: <select id="price">
  						<option value="maxPrice">maxPrice</option>
  						<option value="minPrice">minPrice</option>
  					</select>

		<p>Choose price between: </p>

		<p><input type="text" id="minPrice" placeholder="Minimum Price">
		   <input type="text" id="maxPrice" placeholder="Maxiumim Price">
		   <input type="button" id="priceButton" value="Sort">


		<h3>Stock</h3>

		<p>Minimum Remaining Stock: </p>

		<input type = "text" id="stockRemain" placeholder="Minimum Stock Left..">
		<input type = "button" id="stockButton" value="Sort"> 



</section>

<div id="searchAJAX"></div>

<div class="modal modal--hidden">

<script src="ajax/searchDatabase.js"></script>

<?php
include("footer.php");
?>

