<?php
include '../controller/DVD.php';

$products = new DVD();

echo $products->ReadProducts('select * from Products');

?>