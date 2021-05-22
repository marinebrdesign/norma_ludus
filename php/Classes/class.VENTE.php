<?php
require_once('class.UTILISATEUR.php');


class VENTE{

    public $ID_paypal;
    public $Statut_paiement;
    public $Comission;
    public $Prix;
    public $Date_paiement;
    public $Email_paiement;
    public $ID_utilisateur;
    public $ID_utilisateur1;



    function setID_paypal($paypal){
        $this->ID_paypal=$paypal;

    }

    function setStatut_paiement($Statut_paie){
        $this->Statut_paiement=$Statut_paie;

    }

    function setComission($comission){
        $this->Comission=$comission;

    }

    function setPrix($prix){
        $this->Prix=$prix;

    }

    function setDate_paiement($date_paie){
        $this->Date_paiement=$date_paie;

    }

    function setEmail_paiement($email_paie){
        $this->Email_paiement=$email_paie;

    }

    function setID_utilisateur($ID_util){
        $this->ID_utilisateur=$ID_util;

    }

    function setID_utilisateur1($ID_util1){
        $this->ID_utilisateur1=$ID_util1;

    }

    function ajoutBDD{
        $db = New PDO ('mysql:host=localhost;dbname=fruit;chargest=utf-8','root','');

        $req = $db->prepare("INSERT INTO VENTE (ID_pay, statutpaiement, Comissionvente, Price, Datepaiement,email_paypal) VALUES  (:paypal, :Statut_paie, :prix, :date_paie, :email_paie, :ID_util, :ID_util1 )");

        $req -> execute (array(
            ":paypal"=> $this->ID_paypal,
            ":Staut_paie"=> $this->Statut_paiement,
            ":comission"=> $this->Comission,
            ":prix"=> $this->Prix,
            ":date_paie"=> $this->Date_paiement,
            ":email_paie"=> $this->Email_paiement,
            ":ID_util"=> $this->ID_utilisateur,
            ":ID_util1"=> $this->ID_utilisateur1,
        ));
    }
}

?>