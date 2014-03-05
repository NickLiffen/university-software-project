<?php
include("../../database/connect_database.php");

				$queryOne = "SELECT sum(product_quantity) as 'total' FROM products";
				$resultOne = $database->query($queryOne);
				while($row = mysqli_fetch_array($resultOne)) {
				echo "<li>Total Number of Stock Left: ". $row ['total'] ."\r\n</li>";
			}

?>