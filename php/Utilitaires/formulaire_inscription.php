<?php

header("Access-Control-Allow-Origin: *");
require_once '../connexion.php';
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
if(isset($_POST['user_id']) &&
    isset($_POST['user_firstname_name']) &&
    isset($_POST['user_lastname_name']) &&
    isset($_POST['user_age']) &&
    isset($_POST['user_mail']) &&
    isset($_POST['user_password'])
){
    try {
        $sql = "INSERT INTO `utilisateur` VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $req = $pdo->prepare($sql);
        $req->bindParam(1, $_POST['user_id']);
        $req->bindParam(2, $_POST['user_lastname_name']);
        $req->bindParam(3, $_POST['user_firstname_name']);
        $req->bindParam(4, $_POST['user_mail']);
        $req->bindParam(5, $_POST['user_password']);
        $req->bindParam(6, $_POST['user_age']);
        $req->bindParam(7, $_POST['user_shipping_type']);
        $req->bindParam(8, $_POST['user_postal_address']);
        $req->bindParam(9, $_POST['user_phone']);

        $req->execute();
        //success
        $return = json_encode($_POST['user_id']);
    } catch (PDOException $e) {
        //error
        http_response_code(400);
        $return = "Your fail message: " . $e->getMessage();
    }
    echo $return;
} else {
    echo "ERREUR";
}
?>

