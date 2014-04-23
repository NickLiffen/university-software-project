<?php

include("../../database/connect_database.php");

   $searchString = $_GET['str'];
	 $price        = $_GET['price'];
	 $priceMin     = $_GET['minPrice'];
	 $priceMax     = $_GET['maxPrice'];

	//This does the query if the price order is changed
	 if($price == "maxPrice"){
		$queryOne = "SELECT id, product_name, product_quantity, product_description, product_category, product_price FROM products WHERE product_name LIKE '%$searchString%' OR product_description LIKE '%$searchString%' ORDER BY product_price DESC ";
		}
	else if($price == "minPrice"){
		$queryTwo = "SELECT id, product_name, product_quantity, product_description, product_category, product_price FROM products WHERE product_name LIKE '%$searchString%' OR product_description LIKE '%$searchString%' ORDER BY product_price ASC ";
	}
	else {
		$queryThree = "SELECT id, product_name, product_quantity, product_description, product_category, product_price FROM products WHERE product_name LIKE '%$searchString%' OR product_description LIKE '%$searchString%' ";
	}

  //This does it if the price
	if($priceMin AND $priceMax > 0){
		$queryFour = "SELECT id, product_name, product_quantity, product_description, product_category, product_price FROM products WHERE product_price BETWEEN '$priceMin' AND '$priceMax'";
	}
	else {
		$queryFive = "SELECT id, product_name, product_quantity, product_description, product_category, product_price FROM products WHERE product_name LIKE '%$searchString%' OR product_description LIKE '%$searchString%' ";
	}


	$query = "SELECT id, product_name, product_quantity, product_description, product_category, product_price FROM products WHERE product_name LIKE '%$searchString%' OR product_description LIKE '%$searchString%' ORDER BY product_price DESC ";


	  $result = $database->query($query) OR die("Failed query $query");
    echo $database->error;

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

        $json_ouput = json_encode($output);
        echo $json_ouput;



?>
