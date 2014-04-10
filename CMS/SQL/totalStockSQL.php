<?php
include("../../database/connect_database.php");
				//Query that finds the total number of stock.
				$query = "SELECT sum(product_quantity) as 'totalStock' FROM products";
				$result = $database->query($query) OR die("Failed query $query");
				echo $database->error;

				//Prints out the array as an assocciate array.
				$output = array();
						while($row = mysqli_fetch_assoc($result))
						{
									$product = array  ("id" => $row['totalStock']);
							array_push($output,$product);
						}
						$json_ouput = json_encode($output);
						echo $json_ouput;
?>
