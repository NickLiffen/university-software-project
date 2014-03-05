<?php

	include("../../database/connect_database.php");

	$query = "SELECT product_name, product_quantity, product_description, product_category, product_price FROM products ORDER BY product_price DESC";

	 $result = $database->query($query) OR die("Failed query $query");
		echo $database->error."<p>";






?>