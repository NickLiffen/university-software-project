<?php
$title = "Index";
include("inc/header.php");
?>
		<div id="h3padding"><h3>Summary of Products:</h3></div>
			<p>Find out information about products you have added</p>
				<div id="run">
					<ul>
						<li>Total products you have?<input type = "button" id= "totalProdcts" value = "Search"></li>
						<li>Total stock of all products?<input type = "button" id = "totalStock" value = "Search"></li>
						<li>Product with the most stock?<input type = "button" id = "maxStock" value = "Search"></li>
						<li>Product with the least stock?<input type = "button" id = "minStock" value = "Search"></li>
					</ul>
		<!--This is where the results to the questions above get answered.-->
		<div id = "results"></div>
		</div>

		<!--This is here becuasue it prints out any products that have no stock remaining.-->
		<h2>These products all have no stock remaining!!!!!!</h2>
		<div id= "noStock"></div>

<!--AJAX function that loads all of the questions above and the NO stock left query.-->
<script src = "js/fetchProductsInfo.js"></script>
<?php
include("inc/footer.php");
?>
