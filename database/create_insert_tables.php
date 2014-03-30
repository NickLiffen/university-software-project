<?php

//Creates a table called products
$create_table_products =
				"CREATE TABLE IF NOT EXISTS products (
				id MEDIUMINT NOT NULL AUTO_INCREMENT,
				product_name VARCHAR(35) NOT NULL,
				product_quantity MEDIUMINT NOT NULL,
				product_description VARCHAR(500) NOT NULL,
				product_category VARCHAR(15),
				product_price MEDIUMINT NOT NULL,

				PRIMARY KEY(ID)
													  )";
													  
if(!$result = $database->query($create_table_products)){
    die('Could not create product table [' . $database->error . ']');
	$result->close();
}


?>