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
  <div id="box">
    <article>
    <section class="header"><h1>Admin</h1></section>
      <nav>
        <ul>
          <li><a href="index.php">Product's Summary</a></li>
          <li><a href="stock.php">Stock Levels</a></li>
          <li><a href="orders.php">Open Orders</a></li>
        </ul>
      </nav>
    </article>
  </div>
