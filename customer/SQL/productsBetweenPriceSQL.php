<?php
  include("../../database/connect_database.php");

  $searchString = $_GET['str'];
  $high= $_GET['highValue'];
  $low=  $_GET['lowValue'];


          $query = "SELECT id, product_name, product_quantity, product_description, product_category, product_price FROM products WHERE (product_name LIKE '%$searchString%' OR product_description LIKE '%$searchString%') AND (product_price BETWEEN '$low' AND '$high')";
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
