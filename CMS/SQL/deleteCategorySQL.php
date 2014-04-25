<?php
include("../../database/connect_database.php");
    //Collects the ID from the AJAX request.
      $name = $_GET['id'];
    //A double check to make sure that the product is found in the database.
      $query = "SELECT * FROM products WHERE product_category = '$name'";
        $result = $database->query($query) OR die("Failed query $query");
          echo $database->error."<p>";
    //If the product is found then it can be deleted.
    if(mysqli_num_rows($result) > 0) {
      $queryNew = $query = "DELETE FROM products WHERE product_category = '$name'";
        $resultNew = $database->query($queryNew) OR die("Failed query $query");
          echo $database->error."<p>";
    }
?>
