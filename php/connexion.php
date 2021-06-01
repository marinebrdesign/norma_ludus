<?php
$parametres = parse_ini_file(__DIR__."/../parametres/param.ini");

// connexion à la bdd avec fichier de paramètres
$pdo = new PDO(
    $parametres['dsn'],
    $parametres['user'],
    $parametres['pswd']
);
// Adresse serveur de l'application
$host = $parametres['host'];
?>

