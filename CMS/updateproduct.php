<?php
$title = "Amend Product";
include("inc/header.php");
?>
<article>
	<section>
		<!--This is the form that collectes the name of the product-->
			<fieldset><legend><span>Search for Product?</span></legend>
				<form method="GET" id = "myForm" name="myForm" onsubmit="return false;">
				<br />
				<p>What is the Product name? <input type = "text" id = "name" name = "name"></p>
				<br />
				<input name="submit" id ="submit" type="button" value="Search"/>
			</fieldset>

			<!--This is where the products get loaded into the page. In this DIV.-->
			<div id="status"></div>
	</section>
</article>
<!--This is the AJAX function that loads in the product to update-->
<script src="js/updateProduct.js"></script>
<!--This is the function that fetches the new values and stores them in the database.-->
<script src="js/updatedProductInfo.js"></script>
<?php
include("inc/footer.php");
?>
