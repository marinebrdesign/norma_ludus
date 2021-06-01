<?php

require_once '../connexion.php';
require_once '../Classes/class.UTILISATEUR.php';

$sql = "SELECT `Email_utilisateur`, `Mot_de_passe`
        FROM utilisateur";

$req = $pdo->prepare($sql);

$req->execute(array(
    'pseudo' => $identifiant));
$resultat = $req->fetch();

// Comparaison du pass envoyé via le formulaire avec la base
$isPasswordCorrect = password_verify($_POST['pass'], $resultat['pass']);

if (!$resultat)
{
    echo 'Mauvais identifiant ou mot de passe !';
}
else
{
    if ($isPasswordCorrect) {
        session_start();
        $_SESSION['Email_utilisateur'] = $resultat['id'];
        $_SESSION['pseudo'] = $identifiant;
        echo 'Vous êtes connecté !';
    }
    else {
        echo 'Mauvais identifiant ou mot de passe !';
    }
}