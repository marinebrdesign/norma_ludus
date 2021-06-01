<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
require_once '../connexion.php';
require_once "../Classes/class.CATEGORIE.php";

$pdo = new PDO(
    'mysql:host=localhost;dbname=normaludus',
    'root',
    'root'
);

$sql = "SELECT * FROM CATEGORIE ORDER BY NOM";
$requete=$pdo ->prepare($sql);
$liste =array();
if($requete->execute()){
    while ($donnees=$requete->fetch()){
        $CATEGORIE = new CATEGORIE(
            $donnees['ID_categorie'],
            $donnees['Nom_Categorie'],
            $donnees['Nb_joueurs'],
            $donnees['Description'],
            $donnees['Duree'],
            $donnees['Materiel'],
            $donnees["Preparation"],
            $donnees['Base'],
            0
        );
        $liste[]=$CATEGORIE;
    }

}
echo json_encode($CATEGORIE->jsonSerialize());
exit();

?>

