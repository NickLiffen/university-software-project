<?php

include("../../database/connect_database.php");
	//Brings in the string that they have searhed for.
	 $searchString = $_GET['str'];
	  //Runs a query to find that product based on the string. SEARCHES UNDER NAME AND DESCRIPTION
		$query = "SELECT id, product_name, product_quantity, product_description, product_category, product_price FROM products WHERE product_name LIKE '%$searchString%' OR product_description LIKE '%$searchString%' ";
		$result = $database->query($query) OR die("Failed query $query");
    echo $database->error;
		//Stores it in an assossciate array
		$output = array();
        	while($row = mysqli_fetch_assoc($result))
        	{
           	 $product = array  (	"id" => $row['id'],
           	 						"name" => $row['product_name'],
            			 			"quantity" => $row['product_quantity'],
            			 			"description" => $row['product_description'],
            			 			"category" => $row['product_category'],
            						"price" => $row['product_price']

           						);
        	array_push($output,$product);
         }
				//JSON Encodes it.
        $json_ouput = json_encode($output);
        echo $json_ouput;



?>
