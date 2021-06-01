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

$sql = "SELECT * FROM VENTE ORDER BY NOM";
$requete=$pdo ->prepare($sql);
$liste =array();
if($requete->execute()){
    while ($donnees=$requete->fetch()){
        $regle_officielle = new VENTE(
            $donnees['ID_paypal'],
            $donnees['Statut_paiement'],
            $donnees['Comission'],
            $donnees['Prix'],
            $donnees['Date_paiement'],
            $donnees['Email_paiement'],
            $donnees['ID_utilisateur'],
            $donnees['ID_utilisateur1'],
            0
        );
        $liste[]=$VENTE;
    }

}
echo json_encode($VENTE->jsonSerialize());
exit();

?>

