<?php
// define variables and set to empty values
$nameErr = $quantityErr = $descriptionErr = $categoryErr = $priceErr = "";
$name = $quantity = $description = $category = $price = "";

function phpValidation() {

  if (empty($_POST["name"]))
    {$nameErr = "Name is required";
      return false;}

    
  else
    {$name = test_input($_POST["name"]);}


  if (empty($_POST["quantity"]))
    {$quantityErr = "Quantity is required";
      return false;}
  
  else
    {$quantity = test_input($_POST["quantity"]);}



  if (empty($_POST["description"]))
    {$descriptionErr = "Description is required";
  return false;}
  
  else
    
    {$description = test_input($_POST["description"]);}
    	
	


  if (empty($_POST["category"]))
    {$categoryErr = "Category is required";
    return false;}
  else
    {$category = test_input($_POST["category"]);}



  if (empty($_POST["price"]))
    {$priceErr = "Price is required";
  return false;}
 
  else
    {$price = test_input($_POST["price"]);}
}



function test_input($data)
{
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>