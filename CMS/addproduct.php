<?php $title="Add Product" ; include( "inc/header.php"); ?>

        <section class='alignLeft'>
            <fieldset>
                <legend><span>Would you like to add a Product?</span></legend>
                <!--This prints out the success message for the product being added to the database-->

                <form enctype="multipart/form-data" id="myForm" method="post"
                name="myForm" onsubmit="return false">
                    <br>
                    &nbsp;

                    <p>Please Enter a Product Name:* <input id="name" name=
                    "name" placeholder="Name" type="text"> <span id=
                    "errorname"></span> <span class=
                    "error"><?php echo $nameErr;?></span></p>

                    <p>Please enter the quantity of the product you have:*
                    <input id="quantity" name="quantity" placeholder="Quantity"
                    type="number"> <span id="errorquantity"></span>
                    <span class="error"><?php echo $quantityErr;?></span></p>

                    <p>Please enter a small description of the product:*
                    <input id="description" name="description" placeholder=
                    "Description" type="text"> <span id=
                    "errordescription"></span> <span class=
                    "error"><?php echo $descriptionErr;?></span></p>

                    <p>Please enter a product category:*
                      <select id="categoryDropDown">
                        <option selected="selected" value="selectCategory">
                            Select a category..
                        </option>

                        <option value="clothing">
                            Clothing
                        </option>

                        <option value="electronics">
                            Electronics
                        </option>

                        <option value="software">
                            Software
                        </option>

                        <option value="sport">
                            Sport
                        </option>

                        <option value="music">
                            Music
                        </option>

                        <option value="household">
                            Household
                        </option>

                        <option value="other">
                            Other
                        </option>

                    </select>
                      <span id="errorcategory"></span> <span class=
                      "error"><?php echo $categoryErr;?></span>
                    </p>

                    <p>Please enter in the price of the product:* <input id=
                    "price" name="price" placeholder="Price" type="text">
                    <span id="errorprice"></span> <span class=
                    "error"><?php echo $priceErr;?></span></p>

                    <p>Please Pick an image: <input id="file1" name="file1"
                    type="file"><br>
                    &nbsp;</p>

                    <p>Everything marked with a * is a mandatory
                    field</p><input id="submit" name="submit" type="button"
                    value="Add Product">
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
