<?php $title="Index" ; include( "inc/header.php"); ?>
<article>
    <div class='header'>
        <h3>Summary of Products:</h3>
    </div>

    <section>
        <p class='floatLeftAndStyle'>From this Content Managment System you will be able to add/delete/update products. Navagte your way around by the navagation bar above. This page shows you basic information about your proucts.</p>
        <!--This is where the results to the questions above get answered.-->
        <div class='floatLeft'>
            <div class='paddingBottom'></div>
            <p>Information about the products you have...</p>
            <div id="run">
                <ul>
                    <li>Total products you have:
                        <div id="totalProdctsNew"></div>
                    </li>
                    <li>Total stock of all products:
                        <div id="totalStockNew"></div>
                    </li>
                    <li>Product with the most stock:
                        <div id="maxStockNew"></div>
                    </li>
                    <li>Product with the least stock:
                        <div id="minStockNew"></div>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section>
        <!--This is here becuasue it prints out any products that have no stock remaining.-->
        <div id="h3padding">
            <h3>These products all have no stock remaining!</h3>
        </div>
        <div id="noStock"></div>
    </section>
</article>


<!--AJAX function that loads all of the questions above and the NO stock left query.-->
<script src="js/fetchProductsInfo.js"></script>
</body>

</html>
