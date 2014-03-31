<?php
include("../../database/connect_database.php");
				//Query that finds the product with the most stock.
				$queryThree = "SELECT product_name as 'totalThree' FROM products WHERE product_quantity = (SELECT MAX(product_quantity) FROM products)";
				$resultThree = $database->query($queryThree);
				while($row = mysqli_fetch_array($resultThree)) {
					$maxStock = $row['totalThree'];
			}
			echo $maxStock;
?>
