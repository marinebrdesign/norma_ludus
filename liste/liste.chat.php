<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
require_once 'php/connexion.php';
require_once "php/Classes/class.CHAT.php";

$pdo = new PDO(
    'mysql:host=localhost;dbname=normaludus',
    'root',
    'root'
);

$sql = "SELECT * FROM CHAT ORDER BY NOM";
$requete=$pdo ->prepare($sql);
$liste =array();
if($requete->execute()){
    while ($donnees=$requete->fetch()){
        $chat = new CHAT(
            $donnees['ID_CHAT'],
            $donnees['Message'],
            $donnees['Date_Chat'],
            $donnees['Heure_Chat'],
            0
      );
        $liste[]=$chat;
    }

}
echo json_encode($regle_officielle->jsonSerialize());
exit();

?>
