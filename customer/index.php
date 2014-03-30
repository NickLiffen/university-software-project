<?php
$title = "Search Product";
include("inc/header.php");
?>
<h2>View the Most Recent Products added!!!</h2>

<!--The three divs below are for the basket. When the user successfull removes/modifies a product but also pops up with an error message if there isnt enough in stock when they try and modify it.-->
<div id="changeQuantityInBasketFail"></div>
<div id="productModifyShow"><h1>Product Modified!</h1></div>
<div id="productDeleteShow"><h1>Product Deleted!</h1></div>

<!--This is where the products get loaded into the page. In this DIV.-->
<div id="collectInfo"></div>
<!--This is the class the hides/shows the modal.-->
<div class="modal modal--hidden"></div>

<!--This is what you first see on the screen. Collects the most recent products in the database.-->
<script src="js/listProducts.js"></script>
<!--Loads the Modal when you click on a specific product.-->
<script src="js/modal.js"></script>
<!--Stores products in Local Storage.-->
<script src="js/localStorage.js"></script>
<!--Lets you access the basket, remove and modify products in the basket-->
<script src="js/basket.js"></script>

<?php
include("inc/footer.php");
?>
