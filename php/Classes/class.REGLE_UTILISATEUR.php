<?php
require_once('class.UTILISATEUR.php');


class REGLE_UTILISATEUR{
    public $ID_Regle_Utilisateur;
    public $Contenu;
    public $Date_post;
    public $Heure_post;

    function setID_Regle_Utilisateur($regle){
        $this->ID_Regle_Utilisateur=$regle;

    }

    function setContenu($contenu){
        $this->Contenu=$contenu;

    }

    function setDate_post($datepost){
        $this->Date_post=$datepost;

    }

    function setHeure_post($heurepost){
        $this->Heure_post=$heurepost;

    }

    function ajoutBDD{
        $db = New PDO ('mysql:host=localhost;dbname=fruit;chargest=utf-8','root','');

        $req = $db->prepare("INSERT INTO REGLE_UTILISATEUR (ID_re, post, postdate, posthours) VALUES  (:regle, :contenu, :datepost, :heurepost)");

        $req -> execute (array(
            ":regle"=> $this->ID_Regle_Utilisateur,
            ":contenu"=> $this->Contenu,
            ":datepost"=> $this->Date_post,
            ":heurepost"=> $this->Heure_post,
        ));
    }
}

?>