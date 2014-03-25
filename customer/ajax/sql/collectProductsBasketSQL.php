<?php

include("../../database/connect_database.php");


      $data = $_GET['data'];
      $productNo = $_GET['productNo'];

      $index = preg_replace('/[^0-9.,]/', '', $data);


    $query = "SELECT id, product_name, product_quantity, product_description, product_category, product_price FROM products WHERE id = '$index'";

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

        $output[0]['BasketTotal']=$productNo;

        $json_ouput = json_encode($output);
        echo $json_ouput;


?>
