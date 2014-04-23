<?php $title="Search for products" ; include( "inc/header.php"); ?>
<section>
    <!--The five divs below are for the basket. When the user successfull removes/modifies a product but also pops up with an error message if there isnt enough in stock when they try and modify it.-->
    <div id="changeQuantityInBasketFail"></div>
    <div class="successBasket" id="checkoutComplete">
        <h1>Order Being Proccessed</h1>
    </div>
    <div class="successBasket" id="basketEmptied">
        <h1>Basket Emptied!</h1>
    </div>
    <div class="successBasket" id="productModifyShow">
        <h1>Product Modified!</h1>
    </div>
    <div class="successBasket" id="productDeleteShow">
        <h1>Product Deleted!</h1>
    </div>
</section>


<div id="disapearOnCheckout">
	<h3>Search here, click on a product for more detail!</h3>
    <div id="searchbox">
        <form method="GET" name="seachForm">
            <p>Search Box:
                <input type="search" id="searchBox" placeholder="Search for Products" class="mytext" autofocus/>
            </p>
            <form>
    </div>

    <section class="searchRight">
        <h2>Search Options</h2>
        <p>Sort by:
            <select id="price">
                <option value="maxPrice">maxPrice</option>
                <option value="minPrice">minPrice</option>
            </select>
            <p>Choose price between:</p>
            <p>
                <input type="text" id="minPrice" placeholder="Minimum Price">
                <input type="text" id="maxPrice" placeholder="Maxiumim Price">
                <input type="button" id="priceButton" value="Sort">
            </p>
    </section>
    <h2>Categories</h2>
    <!--This is where the products get loaded into the page for the categories...-->
    <div id="categoriesLoadInto"></div>
    <div class='paddingBottom'></div>
</div>



<section>
    <!--This is where the products get loaded into the page. In this DIV.-->
    <div id="collectInfo"></div>
    <!--This is the div that focuses in on a product when its clicked-->
    <div id="focusProduct"></div>
    <!--This is where the content for checking out will be.-->
    <div id="checkout"></div>
        <!--This is where the content for checking out will be.-->
    <div id="checkoutAddress"></div>
</section>


<!--Collects the Results back from the search bar.-->
<script src="js/categories.js"></script>
<!--Collects the Results back from the search bar.-->
<script src="js/searchBarResults.js"></script>
<!--Loads the Modal when you click on a specific product.-->
<script src="js/focusProduct.js"></script>
<!--Stores products in Local Storage.-->
<script src="js/localStorage.js"></script>
<!--Lets you access the basket, remove and modify products in the basket-->
<script src="js/basket.js"></script>
<!--Allows the user to checkout.-->
<script src="js/checkout.js"></script>
