<?php
include("../../database/connect_database.php");

				$query = "SELECT count(id) as 'totalOne' FROM products";
				$result = $database->query($query);
				while($row = mysqli_fetch_array($result)) {
				echo "<li>Total Number of products: ". $row ['totalOne'] ."\r\n</li>";
			}

?>