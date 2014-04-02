<?php
include("../../database/connect_database.php");
        //Query that finds the total number of products that the user has added.
        $query = "SELECT count(id) as 'totalOne' FROM products where product_quantity = 0";
        $result = $database->query($query);
        while($row = mysqli_fetch_array($result)) {
        $totalProducts = $row['totalOne'];
      }
      echo $totalProducts;
?>
