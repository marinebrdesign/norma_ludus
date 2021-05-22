<?php

if(isset($_POST['name']) && (isset($_POST['picture'])  && isset($_POST['categories']) && isset($_POST['nomber_of_player']) && isset($_POST['time']) && isset($_POST['max_age']) && isset($_POST['min_age']) && isset($_POST['official_rule'])){
    $db = new PDO('mysql:host=localhost;dbname=normaludus;','root','');
    $req = $db->prepare("
INSERT INTO `jeu`(`Nom`,`Photo_jeu`, `Categorie`,`Nb_participant `, `Temps_jeu  `,  `Age_Max`,`Age_min `,`Regle_jeu`)
VALUES (:nom,:photo,:categorie,:participant,:temps,:agemax,:agemin,:regle)");
    $req->execute(
        array(
            "nom"=>$_POST['name'],
            "photo"=>$_POST['picture'],
            "categorie"=>$_POST['categories'],
            "participant"=>$_POST['nomber_of_player'],
            "temps"=>$_POST['max_age'],
            "agemax"=>$_POST['min_age'],
            "agemin"=>$_POST['time'],
            "regle"=>$_POST['official_rule'],
        )

    );

}else{
    echo "ERREUR";
    }

while($c = $_POST->fetch()) { ?>
    <b><?= $c['Nom'] ?>:</b> <?= $c['Photo_jeu'] ?>:<b><?=$c['Categorie'] ?>:</b><?= $c['Nb_participant'] ?>:</b>
    <?= $c['Temps_jeu'] ?>:</b><?= $c['Age_Max'] ?>:</b><?= $c['Age_min'] ?><?= $c['Regle_jeu'] ?><br />
}


/*
$db = new PDO('mysql:host=localhost;dbname=normaludus;','root','');
$req = $db->prepare("S");
*/

?>

