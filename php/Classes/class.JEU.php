<?php
require_once('class.COMMENTAIRE.php');
require_once('class.CATEGORIE.php');


class JEU{

    public $ID_Jeu;
    public $Photo_Jeu;
    public $Regle_Jeu;
    public $Nb_Participants;
    public $Temps_Jeu;
    public $Age_min;
    public $Age_max;
    public $ID_Regle_Utilisateur;
    public $ID_categorie;
    public $ID_Commentaire;

    function setID_JEU($Jeu){
        $this->ID_Jeu=$Jeu;

    }

    function setPhoto_Jeu($photo){
        $this->Photo_Jeu=$photo;

    }

    function setRegle_Jeu($reglejeu){
        $this->Regle_Jeu=$reglejeu;

    }

    function setNb_Participants($participants){
        $this->Nb_Participants=$participants;

    }

    function setTemps_Jeu($temps){
        $this->Temps_Jeu=$temps;

    }

    function setAge_min($Amin){
        $this->Age_min=$Amin;

    }

    function setAge_max($Amax){
        $this->Age_max=$Amax;

    }

    function setID_Regle_Utilisateur($regle){
        $this->ID_Regle_Utilisateur=$regle;

    }

    function setID_categorie($ID_cat){
        $this->ID_categorie=$ID_cat;

    }

    function setID_Commentaire($idcomment){
        $this->ID_Commentaire=$idcomment;

    }

    function ajoutBDD{
        $db = New PDO ('mysql:host=localhost;dbname=fruit;chargest=utf-8','root','');

        $req = $db->prepare("INSERT INTO JEU (rJ, Picture, regleJ, Participantsnb, tempsJ,MinA, MaxA,ID_re ,cat_ID,ID_com) VALUES  ( :Jeu,:photo, :reglejeu,:participants,:temps,:Amin,:Amax,:regle,:ID_cat,:idcomment)");

        $req -> execute (array(
            ":Jeu"=> $this->ID_Jeu,
            ":photo"=> $this->Photo_Jeu,
            ":reglejeu"=> $this->Regle_Jeu,
            ":participants"=> $this->Nb_Participants,
            ":temps"=> $this->Temps_Jeu,
            ":Amin"=> $this->Age_min,
            ":Amax"=> $this->Age_max,
            ":regle"=> $this->ID_Regle_Utilisateur,
            ":ID_cat"=> $this->ID_categorie,
            ":idcomment"=> $this->ID_Commentaire,
        ));
    }

}

?>