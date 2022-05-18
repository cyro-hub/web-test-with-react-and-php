  <?php
  class Database{
    protected $host;
    protected $user;
    protected $password;
    protected $dbname;
    
    //setting credential for database
    protected function setDBCredential(){
        $this->host = 'localhost';
        $this->user = 'id18900777_cyril';
        $this->password = 'rn=W*NaJbm$6X>5O';
        $this->dbname = 'id18900777_test';
    }
    
    
    //setting connection fro the database
    protected function Connect(){
        $this->setDBCredential();
        
        $con = new mysqli($this->host,$this->user,$this->password,$this->dbname);

        if ($con->connect_error) {
            die("Connection failed: " . $con->connect_error);
        }
        return $con;
    }
  }
?>