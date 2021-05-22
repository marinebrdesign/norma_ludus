<p>Paragrpahe</p>
<?php
if(isset($_POST['user_id']) && isset($_POST['user_firstname_name']) && isset($_POST['user_lastname_name']) && isset($_POST['user_age'])
    && isset($_POST['user_mail']) && isset($_POST['user_password'])){
    $db = new PDO('mysql:host=localhost;dbname=normaludus;','root','');
    $req = $db->prepare("
INSERT INTO `utilisateur`(`Identifiant`,`Nom_utilisateur`, `Prenom_utilisateur`, `Date_de_naissance`, `Email_utilisateur`, `Mot_de_passe`)
VALUES (:Identifiant,:Nom,:Prenom,:DateNaiss,:Mail,:Password)");
    $req->execute(
        array(
            "Identifiant"=>$_POST['user_id'],
            "Nom"=>$_POST['user_firstname_name'],
            "Prenom"=>$_POST['user_lastname_name'],
            "DateNaiss"=>$_POST['user_age'],
            "Mail"=>$_POST['user_mail'],
            "Password"=>$_POST['user_password']
        )
    );

}else{
    ECHO "ERREUR";

}
/*
$db = new PDO('mysql:host=localhost;dbname=normaludus;','root','');
$req = $db->prepare("S");
*/
?>

