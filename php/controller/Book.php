<?php
include '../model/Product.php';

class Book extends Product{
    public function setUnit($unit){
        $this->unit = $unit[4].'Kg';
    }
    
    public function insertProductByType(){
        $unit = $this->unit;
        $name = $this->name;
        $sku = $this->sku;
        $price = $this->price;
        
        $sql = 'insert into Products(SKU,name,price,unit) values("'.$sku.'","'.$name.'",'.$price.',"'.$unit.'")';
        
        return $this->insertProduct($sql);
    }
}
?>