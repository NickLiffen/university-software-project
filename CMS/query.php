<?php
include("database/connect_database.php");

		$query = "SELECT * FROM products";
		$result= $database->query($query);

		echo "<table border='1'>
			<tr>
			<th>ID</th>
			<th>Product Name</th>
			<th>Product Quantity</th>
			<th>Product Description</th>
			<th>Product Category</th>
			<th>Product Price</th>
			</tr>";

			/*while($row = mysqli_fetch_array($result))
  				{
 			 		echo $row['id'] . " " . $row['product_name'] . " " . $row['product_quantity'] . " " . $row['product_description'] . " " . $row['product_category'] . " " . $row['product_price'];
  			 		echo "<br>";
  				}*/

  			while($row = mysqli_fetch_array($result))
 				 {
  					echo "<tr>";
  					echo "<td>" . $row['id'] . "</td>";
 					echo "<td>" . $row['product_name'] . "</td>";
 					echo "<td>" . $row['product_quantity'] . "</td>";
 					echo "<td>" . $row['product_description'] . "</td>";
 					echo "<td>" . $row['product_category'] . "</td>";
 					echo "<td>" . $row['product_price'] . "</td>";
 					echo "</tr>";
  				}
					echo "</table>";

					mysqli_close($database);


?>
