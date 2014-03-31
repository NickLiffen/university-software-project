<?php
include("../../database/connect_database.php");
				//Runs a query to find any products that have no stock
				$query = "SELECT * FROM products WHERE product_quantity = '0' ";
				$result = $database->query($query) OR die("Failed query $query");
    			echo $database->error;
					//Prints out the array as an assocciate array.
    			$output = array();
        			while($row = mysqli_fetch_assoc($result))
        			{
           	 			$product = array  (	"name" => $row['product_name'],
            			 					"quantity" => $row['product_quantity'],
            			 					"description" => $row['product_description'],
            			 					"category" => $row['product_category'],
            								"price" => $row['product_price']
           									);
        				array_push($output,$product);
         			}
				//JSON Encodes it and prints it out.
        $json_ouput = json_encode($output);
        echo $json_ouput;

?>
