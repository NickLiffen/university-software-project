<?php
include("../../database/connect_database.php");
				//Query that finds the total number of stock.
				$queryOne = "SELECT sum(product_quantity) as 'total' FROM products";
				$resultOne = $database->query($queryOne);
				while($row = mysqli_fetch_array($resultOne)) {
				$totalStock = $row['total'];
			}
				echo $totalStock;
?>
