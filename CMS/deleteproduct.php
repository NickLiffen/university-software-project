<?php
$title = "Delete Product";
include("inc/header.php");
?>
<article>
	<section>
			<fieldset><legend><span>Search for Product?</span></legend>
				<form method="GET" id = "myForm" name="myForm" onsubmit="return false;">
				<br />
				<p>What is the Product name? <input type = "text" id = "name" name = "name"></p>
				<br />
				<input name="submit" id ="submit" type="button" value="Search"/>
			</fieldset>
			<!--This is where the message prints out saying if the product was added succsessfully-->
			<div id="status"></div>
	</section>
</article>
<!--This is the AJAX function that goes through and deletes the product if it is there-->
<script src="js/deleteProduct.js"></script>
<?php
include("inc/footer.php");
?>
