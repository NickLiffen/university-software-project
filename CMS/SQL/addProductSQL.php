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

    //Adds information to database
    $query = "INSERT INTO products (product_name, product_quantity, product_description, product_category, product_price) VALUES ('$name','$quantity','$description','$category','$price')";
    //Runs the query
    $result = $database->query($query) OR die("Failed query $query");
	  echo $database->error;
?>
