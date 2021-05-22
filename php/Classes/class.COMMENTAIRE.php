<?php
require_once('class.UTILISATEUR.php');



class COMMENTAIRE{
    public $ID_Commentaire;
    public $Commentaire_utilisateur;
    public $Date_commentaire;
    public $Heure;

    function setID_Commentaire($idcomment){
        $this->ID_Commentaire=$idcomment;

    }

    function setCommentaire_utilisateur($comment){
        $this->Commentaire_utilisateur=$comment;

    }

    function setDate_commentaire($datecomment){
        $this->Date_commentaire=$datecomment;

    }

    function setHeure($heurecomment){
        $this->Heure=$heurecomment;

    }

    function ajoutBDD{
        $db = New PDO ('mysql:host=localhost;dbname=fruit;chargest=utf-8','root','');

        $req = $db->prepare("INSERT INTO COMMENTAIRE (ID_com, com, comdate, comhours) VALUES  (:idcomment, :comment, :datecomment, :heurecomment)");

        $req -> execute (array(
            ":idcomment"=> $this->ID_Commentaire,
            ":comment"=> $this->Commentaire_utilisateur,
            ":datecomment"=> $this->Date_commentaire,
            ":heurecomment"=> $this->Heure,
        ));
    }
}

?>