<?php
include("../../database/connect_database.php");
				//Query that finds the product with the most stock.
				$query = "SELECT product_name as 'maxStock' FROM products WHERE product_quantity = (SELECT MAX(product_quantity) FROM products)";
				$result = $database->query($query) OR die("Failed query $query");
				echo $database->error;

				//Prints out the array as an assocciate array.
				$output = array();
						while($row = mysqli_fetch_assoc($result))
						{
									$product = array  ("id" => $row['maxStock']);
							array_push($output,$product);
						}
						$json_ouput = json_encode($output);
						echo $json_ouput;
?>
