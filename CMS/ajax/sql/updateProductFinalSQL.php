<?php

include("../../database/connect_database.php");


		$idUpdate = $_POST['idUpdate'];
		$nameUpdate = $_POST['nameUpdate'];
		$quantityUpdate = $_POST['quantityUpdate'];
		$descriptionUpdate = $_POST['descriptionUpdate'];
		$categoryUpdate = $_POST['categoryUpdate'];
		$priceUpdate = $_POST['priceUpdate'];



		$data = "UPDATE products SET product_name ='$nameUpdate', product_quantity = '$quantityUpdate', product_description = '$descriptionUpdate', product_category = '$categoryUpdate', product_price = '$priceUpdate' WHERE id = '$idUpdate'";


		$result = $database->query($data) OR die("Failed query $query");
		echo $database->error."<p>";

		echo "Your product has been updated";

?>