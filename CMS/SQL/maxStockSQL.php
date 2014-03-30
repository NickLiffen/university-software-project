<?php
include("../../database/connect_database.php");

				$queryThree = "SELECT product_name as 'totalThree' FROM products WHERE product_price = (SELECT MAX(product_price) FROM products)";
				$resultThree = $database->query($queryThree);
				while($row = mysqli_fetch_array($resultThree)) {
				echo "<li>Your Product with the most amount of stock: ". $row ['totalThree'] ."\r\n</li>";
			}

?>