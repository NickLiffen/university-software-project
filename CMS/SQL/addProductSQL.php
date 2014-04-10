<?php
	include("../../database/connect_database.php");
    		//Reciving the Text fields
				$name         = $_POST['name'];
				$quantity     = $_POST['quantity'];
				$description  = $_POST['description'];
				$category     = $_POST['category'];
				$price        = $_POST['price'];
				//Reciving the File Feilds
		    $fileName     = $_FILES["file1"]["name"];
		    $fileTmpLoc   = $_FILES["file1"]["tmp_name"];


		    //Adds information to database
		    $query = "INSERT INTO products (product_name, product_quantity, product_description, product_category, product_price) VALUES ('$name','$quantity','$description','$category','$price')";
		    //Runs the query
		    $result = $database->query($query) OR die("Failed query $query");
			  echo $database->error;

				//Finds the ID of the product and saves the product Image as the ID.
				$queryNew = "SELECT id AS 'collectID' FROM products WHERE product_name = '$name' AND product_description ='$description' AND product_category ='$category' AND product_price = '$price'";
				$resultNew = $database->query($queryNew);
				//Collects the ID from the query
				while($row = mysqli_fetch_array($resultNew)) {
				$productID = $row['collectID'];
				}

      //Saves the image by flat filing it.
    if(move_uploaded_file($fileTmpLoc, "../images/$productID.jpg")){ }

				$queryOne = "SELECT * FROM products WHERE product_name = '$name' AND product_description ='$description' AND product_category ='$category' AND product_price = '$price'";
				$resultOne = $database->query($queryOne) OR die("Failed query $queryOne");
				echo $database->error;

				$output = array();
				while($row = mysqli_fetch_assoc($resultOne))
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
