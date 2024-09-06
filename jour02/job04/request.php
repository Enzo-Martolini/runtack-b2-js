<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

class Database {
    private $dsn = "mysql:host=127.0.0.1;port=8889;dbname=lp_official";
    private $dbuser = "root";
    private $dbpass = "root";
    private $dbh;

    public function __construct()
    {
        try 
        {
            $this->dbh = new PDO($this->dsn, $this->dbuser, $this->dbpass);
        } catch (PDOException $e) {
            echo 'Échec de la connexion : ' . $e->getMessage();
            exit;
        }
    }

    public function get_connection(){
        return $this->dbh;
    }
}


function my_insert_student (string $email, string $name, string $gender, int $grade_id, DateTime $birthdate) : bool
{
 $db = new Database();
 $dbh = $db->get_connection();
 $req = $dbh->prepare("INSERT INTO `student`(`grade_id`, `email`, `fullname`, `birthdate`, `gender`) VALUES (:grade_id,:email,:fullname,:birthdate,:gender)");
 $req->bindValue(':grade_id', $grade_id);
 $req->bindValue(':email', $email);
 $req->bindValue(':fullname', $name);
 $req->bindValue(':birthdate', $birthdate->format("Y-m-d"));
 $req->bindValue(':gender', $gender);
 return $req->execute();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    $data = json_decode(file_get_contents('php://input'), true);
    var_dump (my_insert_student($data['email'], $data['fullname'], $data['gender'], $data['grade'], new DateTime($data['birthdate'])));
}