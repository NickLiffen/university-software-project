<?php
$title = "Delete Product";
include("header.php");
?>
<script src="ajax/deleteproductAJAX.js"></script>

<article>


	<section>


			<fieldset><legend><span>Search for Product?</span></legend>

				<form method="GET" id = "myForm" name="myForm" onsubmit="return false;">

				<br />

				<p>What is the Product name? <input type = "text" id = "name" name = "name"></p>

				<br />

				<input name="submit" id ="submit" type="button" value="Search"/>



			</fieldset>

			<div id="status"></div>

	
	</section>

</article>	









<?php
include("footer.php");
?>
