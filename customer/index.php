<?php
$title = "Search Product";
include("header.php");
?>

<h2>View the Most Recent Products added!!!</h2>
<div id="changeQuantityInBasketFail"></div>
<div id="productModifyShow"><h1>Product Modified!</h1></div>
<div id="productDeleteShow"><h1>Product Deleted!</h1></div>
<div id="collectInfo"></div>
<div class="modal modal--hidden"></div>
<script src="ajax/collectProductAJAX.js"></script>

<?php
include("footer.php");
?>
