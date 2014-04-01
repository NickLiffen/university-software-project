<?php
include("../../database/connect_database.php");
    //Makes sure nothing bad goes into database;
    function test_input($data)
    {
       $data = trim($data);
       $data = stripslashes($data);
       $data = htmlspecialchars($data);
       return $data;
    }
      //Reciving the Text fields
      $addressOne = test_input($_POST['addressLineOne']);
      $addressTwo = test_input($_POST['addressLineTwo']);
      $county = test_input($_POST['county']);
      $postCode = test_input($_POST['postCode']);
      $contactNumber = test_input($_POST['contactNumber']);
      //Adds it to the database
      $query = "INSERT INTO address (addressLineOne, addressLineTwo, county, postCode, contactNumber) VALUES ('$addressOne','$addressTwo','$county','$postCode','$contactNumber')";
      //Runs the query
      echo $query;
      $result = $database->query($query) OR die("Failed query $query");
      echo $database->error."<p>";
      echo $result;

?>
