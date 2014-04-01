<?php
$title = "Search for products";
include("inc/header.php");
?>
<!--The five divs below are for the basket. When the user successfull removes/modifies a product but also pops up with an error message if there isnt enough in stock when they try and modify it.-->
<div id="changeQuantityInBasketFail"></div>
<div class="successBasket" id="checkoutComplete"><h1>Order Being Proccessed</h1></div>
<div class="successBasket" id="basketEmptied"><h1>Basket Emptied!</h1></div>
<div class="successBasket" id="productModifyShow"><h1>Product Modified!</h1></div>
<div class="successBasket" id="productDeleteShow"><h1>Product Deleted!</h1></div>
<div id= "disapearOnCheckout">
<div id = "searchbox">
	<form method="GET" name = "seachForm">
		<p>Search Box:  <input type = "search" id = "searchBox" placeholder = "Search for Products" onkeyup="pageLoaded(this.value)" class = "mytext"></p>
	<form>
</div>
	<section class = "searchRight">
		<h2>Search Options</h2>
			<h3>Price</h3>
				<p>Sort by:
					<select id="price">
  					<option value="maxPrice">maxPrice</option>
  					<option value="minPrice">minPrice</option>
  				</select>
		<p>Choose price between:</p>
		<p><input type="text" id="minPrice" placeholder="Minimum Price">
		   <input type="text" id="maxPrice" placeholder="Maxiumim Price">
		   <input type="button" id="priceButton" value="Sort"></p>
		<h3>Stock</h3>
		<p>Minimum Remaining Stock: </p>
			<input type = "text" id="stockRemain" placeholder="Minimum Stock Left..">
			<input type = "button" id="stockButton" value="Sort"></p>
	</section>
</div>
<div id="collectInfo"></div>
<div class="modal modal--hidden"></div>
<!--This is where the content for checking out will be.-->
<div id="checkout"></div>


<!--Collects the Results back from the search bar.-->
<script src="js/searchBarResults.js"></script>
<!--Loads the Modal when you click on a specific product.-->
<script src="js/modal.js"></script>
<!--Stores products in Local Storage.-->
<script src="js/localStorage.js"></script>
<!--Lets you access the basket, remove and modify products in the basket-->
<script src="js/basket.js"></script>
<!--Allows the user to checkout.-->
<script src="js/checkout.js"></script>
<?php
include("inc/footer.php");
?>
