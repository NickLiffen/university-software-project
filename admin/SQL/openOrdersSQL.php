<?php
include("../../database/connect_database.php");
        //Query that finds the total number of products that the user has added.
        $query = "SELECT * FROM address";
        $result = $database->query($query);
        echo $database->error;

              $output = array();
              while($row = mysqli_fetch_assoc($result))
              {
                  $address = array  (	"id" => $row['id'],
                            "addressLineOne" => $row['addressLineOne'],
                            "addressLineTwo" => $row['addressLineTwo'],
                            "county" => $row['county'],
                            "postCode" => $row['postCode'],
                            "contactNumber" => $row['contactNumber'],
                            "noOfProducts" => $row['noOfProducts']
                  );
                array_push($output,$address);
              }
              $json_ouput = json_encode($output);
              echo $json_ouput;
?>
