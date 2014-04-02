<?php
$title = "Stock Levels";
include("inc/header.php");
?>

<h2>Stock Levels</h2>
<div class='floatLeft'>
<h3>Search products with stock level less then: <input type='search' id='searchForProducts' placeholder'Search Here'/></h3>
<div id='searchStockTarget'></div>

<h3>Products with low stock levels</h3>
<div id='lowStockTarget'></div>

<h3>Products with high stock levels</h3>
<div id='highStockTarget'></div>
</div>

<!--Script that runs the search bar.-->
<script src="js/searchBar.js"></script>
<!--Script that runs the check on low and high stock-->
<script src="js/lowAndHighStock.js"></script>


<?php
include("inc/footer.php");
?>
