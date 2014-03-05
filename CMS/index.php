<?php
$title = "Index";
include("header.php");
?>

	<script src = "ajax/fetchNoProductsAJAX.js"></script>



		<div id="h3padding"><h3>Summary of Products:</h3></div>


		<p>Find out information about products you have added</p>
		<div id="run">
		<ul>
			<li>Total products you have?<input type = "button" id= "totalProdcts" value = "Search"></li>
			<li>Total stock of all products?<input type = "button" id = "totalStock" value = "Search"></li>
			<li>Product with the most stock?<input type = "button" id = "maxStock" value = "Search"></li>
			<li>Product with the least stock?<input type = "button" id = "minStock" value = "Search"></li>
		</ul>


		<div id = "results"></div>
		</div>

		<h2>These products all have no stock remaining!!!!!!</h2>

		<div id= "noStock"></div>

<?php
include("footer.php");
?>
