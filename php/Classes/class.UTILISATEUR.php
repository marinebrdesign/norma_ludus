<?php
require_once('class.CHAT.php');
require_once('class.COMMENTAIRE.php');
require_once('class.VENTE.php');
require_once('class.REGLE_UTILISATEUR.php');

class UTILISATEUR{

    public $ID_utilisateur;
    public $Nom_utilisateur;
    public $Prenom_utilisateur;
    public $Email_utilisateur;
    public $Date_de_naissance;
    public $Type_de_livraison;
    public $Adresse_utilisateur;
    public $telephone_utilisateur;

    function setID_utilisateur($ID_util){
        $this->ID_utilisateur=$ID_util;

    }

    function setNom_utilisateur($Nom_util){
        $this->Nom_utilisateur=$Nom_util;

    }

    function setPrenom_utilisateur($Prenom_util){
        $this->Prenom_utilisateur=$Prenom_util;

    }

    function setEmail_utilisateur($Email_util){
        $this->Email_utilisateur=$Email_util;

    }

    function setDate_de_naissance($naissance){
        $this->Date_de_naissance=$naissance;

    }

    function setType_de_livraison($livraison){
        $this->Type_de_livraison=$livraison;

    }

    function setAdresse_utilisateur($Adresse){
        $this->Adresse_utilisateur=$Adresse;

    }

    function settelephone_utilisateur($telephone){
        $this->telephone_utilisateur=$telephone;

    }

    function ajoutBDD{
        $db = New PDO ('mysql:host=localhost;dbname=fruit;chargest=utf-8','root','');

        $req = $db->prepare("INSERT INTO UTILISATEUR (ID_util, Nom_util, Prenom_util, Email_util, naissance,livraison, Adresse, telephone) VALUES  (:ID_util, :Nom_util, :Prenom_util, :Email_util, :naissance, :livraison, :Adresse, :telephone )");

        $req -> execute (array(
            ":ID_util"=> $this->iD_utilisateur,
            ":Nom_util"=> $this->nom_utilisateur,
            ":Prenom_util"=> $this->prenom_utilisateur,
            ":Email_util"=> $this->email_utilisateur,
            ":naissance"=> $this->date_de_naissance,
            ":livraison"=> $this->type_de_livraison,
            ":Adresse"=> $this->adresse_utilisateur,
            ":telephone"=> $this->Telephone_utilisateur
        ));
    }


}

?>