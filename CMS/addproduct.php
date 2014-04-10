<?php $title="Add Product" ; include( "inc/header.php"); ?>
<article>
    <section class='alignLeft'>
        <fieldset>
            <legend><span>Would you like to add a Product?</span>
            </legend>
            <!--This prints out the success message for the product being added to the database-->
            <form method="post" id="myForm" enctype="multipart/form-data" name="myForm" onsubmit="return false">
                <br>&nbsp;
                <p>Please Enter a Product Name:*
                    <input type="text" id="name" name="name" placeholder="Name" autofocus/>	<span id="errorname"></span> 	<span class="error">	<?php echo $nameErr;?>			</span>
                </p>
                <p>Please enter the quantity of the product you have:*
                    <input type="number" id="quantity" name="quantity" placeholder="Quantity" />	<span id="errorquantity"></span> 	<span class="error"> 	<?php echo $quantityErr;?>		</span>
                </p>
                <p>Please enter a small description of the product:*
                    <input type="text" id="description" name="description" placeholder="Description" />	<span id="errordescription"></span> 	<span class="error"> 	<?php echo $descriptionErr;?>	</span>
                </p>
                <p>Please enter a product category:*
                    <input type="text" id="category" name="category" placeholder="Category" />	<span id="errorcategory"></span> 	<span class="error"> 	<?php echo $categoryErr;?>		</span>
                </p>
                <p>Please enter in the price of the product:*
                    <input type="text" id="price" name="price" placeholder="Price" />	<span id="errorprice"></span> 	<span class="error"> 	<?php echo $priceErr;?>			</span>
                </p>
                <p>Please Pick an image:
                    <input type="file" id="file1" name="file1">
                    <br>&nbsp;
                    <p>Everything marked with a * is a mandatory field</p>
                    <input name="submit" id="submit" type="button" value="Add Product" />
                    <!--This is where the success message gets printed out when they have added the product.-->
                    <div id='productAddedSuccessfully'></div>
                        <!--This prints out the product which they have just added.-->
                        <div id="status"></div>
            </form>
        </fieldset>
    </section>
</article>
<!--This is the AJAX function that adds the product to the database.-->
<script src="js/addProduct.js"></script>
</body>

</html>
