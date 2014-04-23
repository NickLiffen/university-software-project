<?php

include("../../database/connect_database.php");

    //Brings in the new quantities that the user wants to update.
    $idUpdate = $_POST['newID'];
    $newStatus = $_POST['statusChangeUpdate'];
    //Runs a query that updates the product.
    $data = "UPDATE address SET orderStatus = '$newStatus' WHERE id = '$idUpdate'";
    $result = $database->query($data) OR die("Failed query $query");
    echo $database->error."<p>";
?>
