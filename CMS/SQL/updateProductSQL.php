<?php
  include("../../database/connect_database.php");

    //Finds a product based on the ID.
    $name = $_GET['id'];
    //Runs a query on that ID.
    $query = "SELECT * FROM products WHERE id = '$name'";
    $result = $database->query($query) OR die("Failed query $query");
    echo $database->error;
    //Stores it as an Assoccsaite Array
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
