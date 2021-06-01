<?php
header('Content-Type: application/json');

require_once '../connexion.php';
require_once '../Classes/class.REGLE_UTILISATEUR.php';

$sql = "SELECT `ID_Regle_Utilisateur`, `Contenu`, `Date_post`, `Heure_post`, `ID_utilisateur`, `ID_jeu`
            FROM regle_utilisateur";

$req = $pdo->prepare($sql);

$req->execute();

/*print_r($req->fetchAll());*/

$liste_regles = array();

while ($ligne = $req->fetch()) {
    $regle = new REGLE_UTILISATEUR($ligne['ID_Regle_Utilisateur'], $ligne['Contenu'], $ligne['Date_post'], $ligne['Heure_post'], $ligne['ID_utilisateur'], $ligne['ID_jeu']);
    $liste_regles[] = $regle;
}

//print_r($liste_categories);

print_r(json_encode($liste_regles));

