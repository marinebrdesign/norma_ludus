<?php

require_once '../connexion.php';
require_once '../Classes/class.UTILISATEUR.php';
header("Access-Control-Allow-Origin: *");
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
try {
    $sql = "SELECT `Identifiant`, `Email_utilisateur`
        FROM utilisateur WHERE Email_utilisateur = ? AND Mot_de_passe = ?";
    $req = $pdo->prepare($sql);
    $req->bindParam(1, $_POST['user_email']);
    $req->bindParam(2, $_POST['user_password']);

    $req->execute();
    $resultat = $req->fetch();
    if (!$resultat) {
        echo 'Mauvais identifiant ou mot de passe!';
    } else {
        echo json_encode($resultat);
    }
} catch(PDOException $e) {
    //error
    http_response_code(400);
    $return = "Your fail message: " . $e->getMessage();
}