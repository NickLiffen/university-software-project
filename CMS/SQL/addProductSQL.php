<?php
	include("../../database/connect_database.php");
    //This function tests to make sure that no harmful injections into database.
     function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }
    //Reciving the Text fields
    $name         = test_input($_POST['name']);
    $quantity     = test_input($_POST['quantity']);
    $description  = test_input($_POST['description']);
    $category     = test_input($_POST['category']);
    $price        = test_input($_POST['price']);
    //Reciving the File Feilds
    $fileName     = $_FILES["file1"]["name"];
    $fileTmpLoc   = $_FILES["file1"]["tmp_name"];
    $fileType     = $_FILES["file1"]["type"];
    $fileSize     = $_FILES["file1"]["size"];
    $fileErrorMsg = $_FILES["file1"]["error"];

  //This uploads the product to the database if there is no image
	if (empty($_FILES['file1']['name'])) {
    //Adds information to database
    $query = "INSERT INTO products (product_name, product_quantity, product_description, product_category, product_price) VALUES ('$name','$quantity','$description','$category','$price')";
    //Runs the query
    $result = $database->query($query) OR die("Failed query $query");
	  echo $database->error;
    //Prints out the product that they have just added.
				$queryNew = "SELECT * FROM products WHERE product_name = '$name' AND product_description ='$description' AND product_category ='$category' AND product_price = '$price'";
				$resultNew = $database->query($queryNew) OR die("Failed query $queryNew");
				echo $database->error;
							$output = array();
							while($row = mysqli_fetch_assoc($resultNew))
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
}
//This uploads the product and the image.
else {
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
		if (!$fileTmpLoc) {
				echo "";
				exit();
			}
			//Saves the image by flat filing it.
		if(move_uploaded_file($fileTmpLoc, "../images/$productID.jpg")){
					echo "";
			}
			else {
							echo "";
				}
      //Prints out the product that they have just added.
  	$queryNew = "SELECT * FROM products WHERE product_name = '$name' AND product_description ='$description' AND product_category ='$category' AND product_price = '$price'";
  	$resultNew = $database->query($queryNew) OR die("Failed query $queryNew");
  	echo $database->error;
				$output = array();
				while($row = mysqli_fetch_assoc($resultNew))
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
}
?>
