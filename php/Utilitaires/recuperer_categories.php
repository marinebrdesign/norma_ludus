<?php
header('Content-Type: application/json');

require_once '../connexion.php';
require_once '../Classes/class.CATEGORIE.php';

$sql = "SELECT `ID_categorie`, `Nom_Categorie`
            FROM categorie";

$req = $pdo->prepare($sql);


$req->execute();

/*print_r($req->fetchAll());*/

$liste_categories = array();

while ($ligne = $req->fetch()) {
    $categorie = new CATEGORIE($ligne['ID_categorie'], $ligne['Nom_Categorie']);
    $liste_categories[] = $categorie;
}

//print_r($liste_categories);

print_r(json_encode($liste_categories));
