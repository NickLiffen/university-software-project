<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title><?php echo $title; ?></title>
<meta name="keywords" content="Shopping, Online, Client, Customer, Buying">
<meta name="description" content="Put pyscial items on this website to sell and people can buy!">
<meta name="author" content="Nick Liffen">
<meta http-equiv="Content-Script-Type" content="text/javascript">
<link rel="stylesheet" type="text/css" href="../css/style.css">
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
<?php include("../database/connect_database.php"); ?>
<script src="../inc.js"></script>
<body>
	<div class='wrapper'>
	<div id="box">
		<article>
		<section class="header"><h1>YABE Shopping Market!</h1></section>
			<nav>
				<ul>
					<li><a href="index.php">Home</a></li>
					<li><a href="search.php">Search</a></li>
				</ul>
				<ul class='basketSurrounding'>
					<li><p><img src="../CMS/images/basket_image.png" alt="Basket"><span id ="basketTotal"></span></p></li>
				</ul>
				<div id ='basketTotalOnHover'></div>
			</nav>
		</article>
	</div>
