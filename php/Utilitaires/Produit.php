<?php

require_once '../connexion.php';

if(isset($_POST['Price']) &&
    isset($_POST['state']) &&
    isset($_POST['stat'])) {

    $sql = "INSERT INTO `produit` (`Prix`, `Etat`,`Statut`)
            VALUES (?, ?, ?)";
    $req = $pdo->prepare($sql);
    $req->bindParam(1, $_POST['Price']);
    $req->bindParam(2, $_POST['state']);
    $req->bindParam(3, $_POST['stat']);

    echo $req->execute();
    echo var_dump($req->errorInfo());
}else{
    echo "ERREUR";
    }
while($c = $_POST->fetch()) { ?>
    <b><?= $c['Prix'] ?>:</b> <?= $c['Etat'] ?><?= $c['Statut'] ?><br />
<?php    }

?>