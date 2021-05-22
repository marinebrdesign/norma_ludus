<?php

if(isset($_POST['Price']) && (isset($_POST['state']) && isset($_POST['stat'])){
    $db = new PDO('mysql:host=localhost;dbname=normaludus;','root','');
    $req = $db->prepare("
INSERT INTO `produit`(`Prix`,`Etat`,`Statut`) 
VALUES (:prix,:etat,:statut");
    $req->execute(
        array(
            "prix"=>$_POST['Price'],
            "etat"=>$_POST['state'],
            "statut"=>$_POST['stat']
        )

    );

}else{
    echo "ERREUR";
    }
while($c = $_POST->fetch()) { ?>
    <b><?= $c['Prix'] ?>:</b> <?= $c['Etat'] ?><?= $c['Statut'] ?><br />

    }
/*
$db = new PDO('mysql:host=localhost;dbname=normaludus;','root','');
$req = $db->prepare("S");
*/

?>