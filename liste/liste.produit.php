<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
require_once '../connexion.php';
require_once "../Classes/class.PRODUIT.php";

$pdo = new PDO(
    'mysql:host=localhost;dbname=normaludus',
    'root',
    'root'
);

$sql = "SELECT * FROM PRODUIT ORDER BY NOM";
$requete=$pdo ->prepare($sql);
$liste =array();
if($requete->execute()){
    while ($donnees=$requete->fetch()){
        $regle_officielle = new $PRODUIT(
            $donnees['ID_ProduiT'],
            $donnees['Prix'],
            $donnees['Etat'],
            $donnees['Statut'],
            $donnees['ID_paypal'],

            0
        );
        $liste[]=$PRODUIT;
    }

}
echo json_encode($PRODUIT->jsonSerialize());
exit();

?>

