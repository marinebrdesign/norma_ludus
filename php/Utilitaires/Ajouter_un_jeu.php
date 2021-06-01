<?php
/*header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");*/
require_once '../connexion.php';

if(isset($_POST['name']) &&
    isset($_POST['picture']) &&
    isset($_POST['categories']) &&
    isset($_POST['nomber_of_player']) &&
    isset($_POST['time']) &&
    isset($_POST['max_age']) &&
    isset($_POST['min_age']) &&
    isset($_POST['official_rule'])
) {
    $sql = "INSERT INTO `jeu` (`Nom_jeu`,`Photo_jeu`, `ID_categorie`,`Nb_participant`, `Temps_jeu`, `Age_Max`,`Age_min`,`Regle_jeu`)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $req = $pdo->prepare($sql);
    $req->bindParam(1, $_POST['name']);
    $req->bindParam(2, $_POST['picture']);
    $req->bindParam(3, $_POST['categories']);
    $req->bindParam(4, $_POST['nomber_of_player']);
    $req->bindParam(5, $_POST['time']);
    $req->bindParam(6, $_POST['max_age']);
    $req->bindParam(7, $_POST['min_age']);
    $req->bindParam(8, $_POST['official_rule']);

    echo $req->execute();
    echo var_dump($req->errorInfo());
} else {
    echo "ERREUR";
}