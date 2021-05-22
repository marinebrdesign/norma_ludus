<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
require_once '../connexion.php';
require_once "../Classes/class.CHAT.php";

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
            $donnees['$ID_CHAT'],
            $donnees['$Message'],
            $donnees['$Date_Chat'],
            $donnees['$Heure_Chat'],
            $donnees['Duree'],
            $donnees['Materiel'],
            $donnees["Preparation"],
            $donnees['Base'],
            0
        );
        public $ID_CHAT;
        public $Message;
        public $Date_Chat;
        public $Heure_Chat;
        $liste[]=$chat;
    }

}
echo json_encode($chat->jsonSerialize());
exit();

?>

