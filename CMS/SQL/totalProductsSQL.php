<?php
include("../../database/connect_database.php");
				//Query that finds the total number of products that the user has added.
				$query = "SELECT count(id) as 'TotalProducts' FROM products";
				$result = $database->query($query) OR die("Failed query $query");
				echo $database->error;

				//Prints out the array as an assocciate array.
				$output = array();
						while($row = mysqli_fetch_assoc($result))
						{
									$product = array  ("id" => $row['TotalProducts']);
							array_push($output,$product);
						}
						$json_ouput = json_encode($output);
						echo $json_ouput;
?>
