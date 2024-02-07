<?php
class Database
{
  private $conn;
  private $result;
  private $host = "";
  private $user = "";
  private $password = "";
  private $db = "";

  public function __construct()
  {
    require "config.php";
    $data = Config_Data();
    $this->host = $data["host_name"];
    $this->user = $data["user_name"];
    $this->password = $data["password"];
    $this->db = $data["db_name"];
    $this->conn = new mysqli(
      $this->host,
      $this->user,
      $this->password,
      $this->db
    );
    if ($this->conn->connect_error) {
      $this->result = "Database Connected Error";
    } else {
      $this->result = "Database Connected Successfully";
    }
  }

  /* For Checking If Connect Or Not */
  public function check()
  {
    return $this->result;
  }
  /*  Creating Random String  */
  public function get_string($len = 10)
  {
    $random = openssl_random_pseudo_bytes($len);
    $hex = bin2hex($random);
    $string = substr($hex, 0, $len);
    return "ghs__" . $string;
  }
  /* Creating Random Number Generator */
  public function get_number($len = 5)
  {
    $random = openssl_random_pseudo_bytes($len);
    $number = 0;
    for ($i = 0; $i < $len; $i++) {
      $number = $number * 10 + (ord($random[$i]) % 10);
    }
    return $number;
  }
  /* ======= Database Methods ====== */
  public function Insert($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  
  public function Update ($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  
  
  public function Select_All($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      while ($data = mysqli_fetch_all($query, true)) {
        return $data;
      }
    } else {
      echo "Please Insert SQL Query!";
    }
  }
  public function Select_Single($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if (mysqli_num_rows($query) >0) {
        return mysqli_fetch_assoc($query);
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function Delete($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function isExist($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if (mysqli_num_rows($query) > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __LOGIN__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if (mysqli_num_rows($query) == 1) {
        return mysqli_fetch_assoc($query);
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function __SIGNUP__($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    } else {
      return "Please Insert SQL Query!";
    }
  }
  public function Create_Table($sql)
  {
    if ($sql) {
      $query = mysqli_query($this->conn, $sql);
      if ($query) {
        return true;
      } else {
        return false;
      }
    }
  }
}
?>
