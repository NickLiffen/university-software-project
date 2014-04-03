<?php $title="Stock Levels" ; include( "inc/header.php"); ?>
<article>
    <h2 class='middle'>Stock Levels</h2>

    <section>
        <h3>Search products with stock level less then: <input type='search' id='searchForProducts' placeholder'Search Here' onkeyup="pageLoaded(this.value)" /><span id='searchBarValidate'></span></h3>
        <div id='searchStockTarget'></div>
    </section>

    <section id='hide'>
        <h3>Products with low stock levels</h3>
        <p>
            <div id='lowStockTarget'></div>
        </p>
        <h3>Products with high stock levels</h3>
        <div id='highStockTarget'></div>
    </section>

</article>

<!--Script that runs the check on low and high stock-->
<script src="js/lowAndHighStock.js"></script>
<!--Script that runs the search bar.-->
<script src="js/searchBar.js"></script>

</body>

</html>
