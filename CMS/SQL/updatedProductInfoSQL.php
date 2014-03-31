<?php

include("../../database/connect_database.php");

    //Brings in the new quantities that the user wants to update.
    $idUpdate = $_POST['idUpdate'];
    $nameUpdate = $_POST['nameUpdate'];
    $quantityUpdate = $_POST['quantityUpdate'];
    $descriptionUpdate = $_POST['descriptionUpdate'];
    $categoryUpdate = $_POST['categoryUpdate'];
    $priceUpdate = $_POST['priceUpdate'];
    //Runs a query that updates the product.
    $data = "UPDATE products SET product_name ='$nameUpdate', product_quantity = '$quantityUpdate', product_description = '$descriptionUpdate', product_category = '$categoryUpdate', product_price = '$priceUpdate' WHERE id = '$idUpdate'";
    $result = $database->query($data) OR die("Failed query $query");
    echo $database->error."<p>";
?>
