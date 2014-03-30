<?php
	include("../../database/connect_database.php");

     function test_input($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }



	if (empty($_FILES['file1']['name'])) {

    	//Reciving the Text fields
    $name = test_input($_POST['name']);
    $quantity = test_input($_POST['quantity']);
    $description = test_input($_POST['description']);
    $category = test_input($_POST['category']);
    $price = test_input($_POST['price']);

        //Adds information to database
    $query = "INSERT INTO products (product_name, product_quantity, product_description, product_category, product_price) VALUES ('$name','$quantity','$description','$category','$price')";
    //Runs the query
    $result = $database->query($query) OR die("Failed query $query");
	echo $database->error."<p>";


    echo"Thank you, your product has been added to the database";

}

else {

	//Reciving the Text fields
    $name = test_input($_POST['name']);
    $quantity = test_input($_POST['quantity']);
    $description = test_input($_POST['description']);
    $category = test_input($_POST['category']);
    $price = test_input($_POST['price']);

	$fileName = $_FILES["file1"]["name"];
	$fileTmpLoc = $_FILES["file1"]["tmp_name"];
	$fileType = $_FILES["file1"]["type"];
	$fileSize = $_FILES["file1"]["size"];
	$fileErrorMsg = $_FILES["file1"]["error"];




		if (!$fileTmpLoc) {
    		echo "";
    		exit();
			}

		if(move_uploaded_file($fileTmpLoc, "../images/$name.jpg")){
   		 	echo "";
			}
			else {
   					 echo "";
				}


    //Adds information to database
    $query = "INSERT INTO products (product_name, product_quantity, product_description, product_category, product_price) VALUES ('$name','$quantity','$description','$category','$price')";
    //Runs the query
    $result = $database->query($query) OR die("Failed query $query");
	echo $database->error."<p>";


    echo"Thank you, your product has been added to the database";


}

?>
