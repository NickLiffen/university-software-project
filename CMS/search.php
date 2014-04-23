<?php $title="Index" ; include( "inc/header.php"); ?>

<article>
    <section>
      <h3>Delete All Products per Category?</h3>

      <div id='deleteTroughCategory'></div>
      <div class ='paddingBottom'></div>

        <!--Search bar thats searches for products in the database and this allows them to delete/modify products.-->
        <div id="searchbox">
            <form method="GET" name="seachForm">
                <p>Search Box:
                    <input type="search" id="searchBox" placeholder="Search for Products" class="mytext" autofocus/>
                </p>
                <form>
        </div>
    </section>
    <section>
        <!----------DIVS----------->
        <!--Prints out a message saying that the product has been deleted-->
        <div id="productDeleteShow">
            <h3>Deleted!</h3>
        </div>
        <!--Prints out a message saying that the product has been successfully modified-->
        <div id="productModifyShow">
            <h3>Modified!</h3>
        </div>
        <!--This is where the results from the search bar gets printed out onto.-->
    </section>
    <section>
        <div id="collectInfo"></div>
        <!--Prints out the box thats allows the user to update a product-->
        <div id="modifyResult"></div>
    </section>
</article>
<!----------SCRIPTS----------->
<!--Script that runs the search bar.-->
<script src="js/categoryDelete.js"></script>
<!--Script that runs the search bar.-->
<script src="js/searchBarResults.js"></script>
<!--Script that Modifies a product.-->
<script src="js/modify.js"></script>
<!--Script that deletes a product.-->
<script src="js/delete.js"></script>

</body>

</html>
