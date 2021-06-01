<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
require_once '../connexion.php';
require_once "../Classe.REGLE_UTILISATEUR.php";

$pdo = new PDO(
    'mysql:host=localhost;dbname=normaludus',
    'root',
    'root'
);

$sql = "SELECT * FROM REGLE_UTILISATEUR ORDER BY NOM";
$requete=$pdo ->prepare($sql);
$liste =array();
if($requete->execute()){
    while ($donnees=$requete->fetch()){
        $regle_officielle = new REGLE_UTILISATEUR(
            $donnees['ID_Regle_Utilisateur'],
            $donnees['Contenu'],
            $donnees['Date_post'],
            $donnees['Heure_post'],

            0
        );
        $liste[]=$REGLE_UTILISATEUR;
    }

}
echo json_encode($REGLE_UTILISATEUR->jsonSerialize());
exit();

?>

