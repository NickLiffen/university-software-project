<?php

include("../../database/connect_database.php");


      $name = $_GET['id'];


      $query = "SELECT * FROM products WHERE id = '$name'";

      $result = $database->query($query) OR die("Failed query $query");
    echo $database->error."<p>";


    if(mysqli_num_rows($result) > 0) {

      $queryNew = $query = "DELETE FROM products WHERE id = '$name'";

      $resultNew = $database->query($queryNew) OR die("Failed query $query");
      echo $database->error."<p>";

      echo "<p>Your product has been deleted!</p>";

    }
    else {

      echo "<p>Your product could not be found in the database, please try again</p>";
    }


?>
