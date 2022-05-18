<?php
include '../model/Product.php';


class Furniture extends Product{
    public function setUnit($unit){
        $this->unit = $unit[1].'CMx'.$unit[2].'CMx'.$unit[3].'CM';
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