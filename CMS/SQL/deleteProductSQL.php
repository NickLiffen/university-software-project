

<?php

include("../../database/connect_database.php");


      $name = $_GET['name'];


      $query = "SELECT * FROM products WHERE product_name = '$name'";

      $result = $database->query($query) OR die("Failed query $query");
    echo $database->error."<p>";


    if(mysqli_num_rows($result) > 0) {

      $queryNew = $query = "DELETE FROM products WHERE product_name = '$name'";

      $resultNew = $database->query($queryNew) OR die("Failed query $query");
      echo $database->error."<p>";

      echo "Your product has been deleted!";

    }
    else {

      echo "Your product could not be found in the database, please try again";
    }


?>
