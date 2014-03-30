<?php
$title = "Index";
include("inc/header.php");
?>
<div id = "searchbox">
  <form method="GET" name = "seachForm">
    <p>Search Box:  <input type = "search" id = "searchBox" placeholder = "Search for Products" onkeyup="pageLoaded(this.value)" class = "mytext"></p>
  <form>
</div>
<div id="productDeleteShow"><h3>Deleted!</h3></div>
<div id="productModifyShow"><h3>Modified!</h3></div>

<div id="collectInfo"></div>
<div id="modifyResult"></div>

<!--Collects the Results back from the search bar.-->
<script src="js/searchBarResults.js"></script>
<!--Collects the Results back from the search bar.-->
<script src="js/modify.js"></script>
<!--Collects the Results back from the search bar.-->
<script src="js/delete.js"></script>
