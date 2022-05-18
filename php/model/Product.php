<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

include 'Database.php';

abstract class Product extends Database{
    public $name,$sku,$price,$unit;
    
    //setting the product
    public function setProduct($name,$sku,$price){
        $this->name = $name;
        $this->sku = $sku.'-'.date("Yd");
        $this->price = $price;
    }

    abstract function insertProductByType();
    
    //inserting data into the database
    public function InsertProduct($sql){
        if($this->Connect()->query($sql)){
            $this->Connect()-> close();
            return 'inserted';
        }else{
        return 'not inserted';
        }
        $this->Connect()-> close();
    }
    
    
    //getting data from the database
    public function ReadProducts($sql){
        $result = $this->Connect()->query($sql);
        $this->Connect()->close();

        $rows[]=Array();

        while($r = mysqli_fetch_assoc($result)){
                $rows[] = $r;
            }

            unset($rows[0]);
            return json_encode($rows,128);
    }
    
    
    //deleting data from the database
    public function DeleteProducts($arr){
        if(!empty($arr)) {
            foreach($arr as $value){
            $sql = 'delete from Products where SKU='.'"'.$value.'"';
            $this->Connect()->query($sql);
            $this->Connect()->close();
          }
        }
        echo 'deleted';
    }
    
}
?>