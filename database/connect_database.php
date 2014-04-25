<?php
//Defines Host, User and Pass to correct information to be able to connect to database
define('HOST', 'localhost');
define('USER', 'root');
define('PASS', '');
//Creates a connection with database
$database = new mysqli(HOST, USER, PASS);
if($database->connect_errno > 0){
    die('Unable to connect to database [' . $database->connect_error . ']');
}

//Creates the database that I want to use
$createDatabase = "CREATE DATABASE IF NOT EXISTS webCoursework";
if(!$result = $database->query($createDatabase)){
    die('Could not create database [' . $database->error . ']');
	$result->close();
}

//Selects the database I want to use (Don't know how this works, it really shouldn't!)
$selectDatabase = $database->select_db("webCoursework");
if ($result = $database->query($selectDatabase)) {
    die('Could not select database [' . $database->error . ']');
    $result->close();

}
require_once("create_insert_tables.php");
?>
