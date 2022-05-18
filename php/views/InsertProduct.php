<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include_once '../model/AutoLoader.php';

// receive incoming data for delete in Product class
$post = json_decode(file_get_contents('php://input'),true);

$product = new $post[0]();
$product->setProduct($post[1],$post[2],floatval($post[3]));
$product->setUnit($post[4]);
echo $product->insertProductByType();

?>