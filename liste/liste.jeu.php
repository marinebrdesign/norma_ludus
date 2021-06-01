<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
require_once '../connexion.php';
require_once "../Classes/class.JEU.php";

$pdo = new PDO(
    'mysql:host=localhost;dbname=normaludus',
    'root',
    'root'
);

$sql = "SELECT * FROM JEU ORDER BY NOM";
$requete=$pdo ->prepare($sql);
$liste =array();
if($requete->execute()){
    while ($donnees=$requete->fetch()){
        $JEU = new JEU(
            $donnees['ID_Jeu'],
            $donnees['Photo_Jeu'],
            $donnees['Regle_Jeu'],
            $donnees['Nb_Participants'],
            $donnees['Temps_Jeu'],
            $donnees['Age_min'],
            $donnees["Age_max"],
            $donnees['ID_Regle_Utilisateur'],
            $donnees['ID_categorie'],
            $donnees['ID_Commentaire'],


            0
        );
        $liste[]=$JEU;
    }

}
echo json_encode($JEU->jsonSerialize());
exit();

?>


