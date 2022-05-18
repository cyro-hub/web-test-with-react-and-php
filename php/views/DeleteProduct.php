<?php
include '../controller/DVD.php';

// receive incoming data for delete in Product class
$post = json_decode(file_get_contents('php://input'),true);

$product = new DVD();
$product->DeleteProducts($post);

?>