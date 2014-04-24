<?php $title="Search Product" ; include( "inc/header.php"); ?>
<article id ='closeThis'>
	<div id='disapearOnCheckout'>
    <h2 class='middle'>View the Most Recent Products added!!!</h2>
    <h2 class='middle'>Click anywhere on the Product to see further detail.</h2>
	</div>

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
</article>
<!--This is what you first see on the screen. Collects the most recent products in the database.-->
<script src="js/listProducts.js"></script>
<!--Loads the Modal when you click on a specific product.-->
<script src="js/focusProduct.js"></script>
<!--Stores products in Local Storage.-->
<script src="js/localStorage.js"></script>
<!--Lets you access the basket, remove and modify products in the basket-->
<script src="js/basket.js"></script>
<!--Allows the user to checkout.-->
<script src="js/checkout.js"></script>


</body>

</html>
