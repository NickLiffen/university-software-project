<?php
  include("../../database/connect_database.php");


  $query = "SELECT  DISTINCT product_category FROM products ORDER BY product_category DESC";

  $result = $database->query($query) OR die("Failed query $query");
  echo $database->error;


        $output = array();
        while($row = mysqli_fetch_assoc($result))
        {
            $product = array  (
                       "category" => $row['product_category']

            );
          array_push($output,$product);
         }

        $json_ouput = json_encode($output);
        echo $json_ouput;
?>
