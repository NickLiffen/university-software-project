<?php
include("../../database/connect_database.php");
        //Query that finds the total number of products that the user has added.
        $query = "SELECT COUNT(id) as 'totalSold' FROM address";
        $result = $database->query($query);
        while($row = mysqli_fetch_array($result)) {
        $totalProducts = $row['totalSold'];
      }
      echo $totalProducts;
?>
