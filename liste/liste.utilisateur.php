<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
require_once '../connexion.php';
require_once "../Classes/class.UTILISATEUR.php";

$pdo = new PDO(
    'mysql:host=localhost;dbname=normaludus',
    'root',
    'root'
);

$sql = "SELECT * FROM UTILISATEUR ORDER BY NOM";
$requete=$pdo ->prepare($sql);
$liste =array();
if($requete->execute()){
    while ($donnees=$requete->fetch()){
        $CATEGORIE = new UTILISATEUR(
            $donnees['$ID_utilisateur'],
            $donnees['$Nom_utilisateur'],
            $donnees['$Prenom_utilisateur'],
            $donnees['$Email_utilisateur'],
            $donnees['$Date_de_naissance'],
            $donnees['$Type_de_livraison'],
            $donnees["Preparation"],
            $donnees['Base'],
            0
        );
        $liste[]=$UTILISATEUR;
    }

}
echo json_encode($UTILISATEUR->jsonSerialize());
exit();

?>

