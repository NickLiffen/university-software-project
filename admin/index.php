<?php $title="Product Information" ; include( "inc/header.php"); ?>
<article>
    <section class='floatLeft'>
        <h2 class='middle'>Your product information</h2>
        <p>This is your admin page. From this page you will be able to check stock levels of prouducts and we will automatically let you know the products that are low on stock and products that have a lot of stock remaming. Furthermore, you will also be
            able to check any open orders.</p>
        <p>This page gives you general product information.</p>
    </section>

    <section class='floatLeft'>
        <h3>Product Summary</h3>
        <ul>
            <li>The Total amount of products you have selling:
                <div id='totalProducts'></div>
            </li>
            <li>The Total amount of products which have been sold:
                <div id='totalSoldProducts'></div>
            </li>
            <li>The Total amount of open orders:
                <div id='countOpenOrders'></div>
            </li>
            <li>The Total amount of products you have low stock on (less then 5):
                <div id='countFewStock'></div>
            </li>
            <li>The Total amount of products you have with 0 stock remaining:
                <div id='countNoStock'></div>
            </li>
        </ul>
    </section>
</article>

<!--Script that runs the questions above.-->
<script src="js/genrealProuctInfo.js"></script>

</body>

</html>
