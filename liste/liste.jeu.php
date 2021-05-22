<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
require_once '../connexion.php';
require_once "../Classes/class.Regleofficielle.php";

$pdo = new PDO(
    'mysql:host=localhost;dbname=bddzerules',
    'root',
    'root'
);

$sql = "SELECT * FROM regle_officielle ORDER BY NOM";
$requete=$pdo ->prepare($sql);
$liste =array();
if($requete->execute()){
    while ($donnees=$requete->fetch()){
        $regle_officielle = new RegleOfficielle(
            $donnees['ID_REGLE'],
            $donnees['Nom'],
            $donnees['Nb_joueurs'],
            $donnees['Description'],
            $donnees['Duree'],
            $donnees['Materiel'],
            $donnees["Preparation"],
            $donnees['Base'],
            0
        );
        $liste[]=$regle_officielle;
    }

}
echo json_encode($regle_officielle->jsonSerialize());
exit();

?>

