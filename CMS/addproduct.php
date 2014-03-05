<?php
$title = "Add Product";
include("header.php");
include("phpvalidation.php");
?>
<script src="ajax/addProductAJAX.js"></script>

<article>


	<section>


			<fieldset><legend><span>Would you like to add a Product?</span></legend>

				<form method="post" id = "myForm" name="myForm" enctype="multipart/form-data" onsubmit="return false">

					<br> &nbsp;

					<p>Please Enter a Product Name:*    					<input type="text" id="name" 		name="name" 		placeholder="Name" 			 /> 			<span id="errorname"></span>  			<span class="error">	<?php echo $nameErr;?>			</span>	</p>

					<p>Please enter the quantity of the product you have:* 	<input type="number" id="quantity" 	name="quantity" 	placeholder="Quantity" 		 /> 		<span id="errorquantity"></span> 		<span class="error"> 	<?php echo $quantityErr;?>		</span>	</p>

					<p>Please enter a small description of the product:* 	<input type="text" id="description"	name="description" 	placeholder="Description" 	 /> 	<span id="errordescription"></span> 	<span class="error"> 	<?php echo $descriptionErr;?>	</span>	</p>

					<p>Please enter a product category:* 					<input type="text" id="category"	name="category" 	placeholder="Category" 		 /> 		<span id="errorcategory"></span> 		<span class="error"> 	<?php echo $categoryErr;?>		</span>	</p>

					<P>Please enter in the price of the product:* 			<input type="text" id="price" 		name="price"		placeholder="Price" 		 /> 		<span id="errorprice"></span> 			<span class="error"> 	<?php echo $priceErr;?>			</span>	</p>

					<p> Please Pick an image: 								<input type="file" id="file1"		name="file1">

					<br> &nbsp;

					<p>Everything marked with a * is a mandatory field</p>
					
					<input name="submit" id ="submit" type="button" value="Add Product"/>

				</form>
	

				<div id="status"></div>

			</fieldset>

	</section>
</article>