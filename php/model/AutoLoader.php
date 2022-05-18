<?php

function autoLoader($className){
    $path = '../controller/';
    $ext = '.php';
    $fullPath = $path.$className.$ext;
    
    include_once $fullPath;
}

spl_autoload_register('autoLoader');

?>