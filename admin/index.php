<?php
$title = "Product Information";
include("inc/header.php");
?>

<h2>Your product information</h2>
<div class='floatLeft'>
<p>This is your admin page. From this page you will be able to check stock levels of prouducts and we will automatically let you know the products that are low on stock and products that have a lot of stock remaming.  Furthermore, you will also be able to check any open orders.</p>
<p>This page gives you general product information.</p>

<h3>Product Summary</h3>

<p>The total amount of products you have selling: <div id='totalProducts'></div></p>
<p>The Total amount of products which have been sold: <div id='totalSoldProducts'></div></p>
<p>The Total amount of open orders: <div id='countOpenOrders'></div></p>
<p>The product with the most stock left: <div id='mostStock'></div></p>
<p>The amount of products you have low stock on (less then 5): <div id='countFewStock'></div></p>
<p>The amount of products you have with 0 stock remaining: <div id='countNoStock'></div></p>
</div>

<!--Script that runs the questions above.-->
<script src="js/genrealProuctInfo.js"></script>

<?php
include("inc/footer.php");
?>
