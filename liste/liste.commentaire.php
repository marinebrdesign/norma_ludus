<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
require_once '../connexion.php';
require_once "../Classes/class.COMMENTAIRE.php";

$pdo = new PDO(
    'mysql:host=localhost;dbname=normaludus',
    'root',
    'root'
);

$sql = "SELECT * FROM COMMENTAIRE ORDER BY NOM";
$requete=$pdo ->prepare($sql);
$liste =array();
if($requete->execute()){
    while ($donnees=$requete->fetch()){
        $COMMENTAIRE = new COMMENTAIRE(
            $donnees['ID_Commentaire'],
            $donnees['Commentaire_utilisateur'],
            $donnees['Date_commentaire'],
            $donnees['Heure'],

            0
        );
        $liste[]=$COMMENTAIRE;
    }

}
echo json_encode($COMMENTAIRE->jsonSerialize());
exit();

?>

