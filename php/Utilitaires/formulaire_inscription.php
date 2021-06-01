<?php

require_once '../connexion.php';

if(isset($_POST['user_id']) &&
    isset($_POST['user_firstname_name']) &&
    isset($_POST['user_lastname_name']) &&
    isset($_POST['user_age']) &&
    isset($_POST['user_mail']) &&
    isset($_POST['user_password'])
){
    $sql = "INSERT INTO `utilisateur`(`Identifiant`, `Prenom_utilisateur`, `Nom_utilisateur`, `Date_de_naissance`, `Email_utilisateur`, `Mot_de_passe`)
            VALUES (?, ?, ?, ?, ?, ?)";
    $req = $pdo->prepare($sql);
    $req->bindParam(1, $_POST['user_id']);
    $req->bindParam(2, $_POST['user_firstname_name']);
    $req->bindParam(3, $_POST['user_lastname_name']);
    $req->bindParam(4, $_POST['user_age']);
    $req->bindParam(5, $_POST['user_mail']);
    $req->bindParam(6, $_POST['user_password']);

    echo $req->execute();
    echo var_dump($req->errorInfo());
    //header('Location:  index.html');

} else {
    echo "ERREUR";
}
?>

