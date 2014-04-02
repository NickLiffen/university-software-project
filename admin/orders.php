<?php
$title = "Open Orders";
include("inc/header.php");
?>

<h2>Open Orders</h2>
<div class='floatLeft'>

<p>Total amount of open orders:<div id='totalOrders'></div></p>

<p>Sorry, at this current moment you have no open orders, keep on checking this page</p>
<p>These orders are...</p>

<div id='openOrdersTarget'></div>

</div>

<!--Script that runs the search bar.-->
<script src="js/openOrders.js"></script>

<?php
include("inc/footer.php");
?>
