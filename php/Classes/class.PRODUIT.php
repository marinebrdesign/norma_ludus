<?php
require_once('class.VENTE.php');


class PRODUIT{
    public $ID_ProduiT;
    public $Prix;
    public $Etat;
    public $Statut;
    public $ID_paypal;

    function setID_Produit($produit){
        $this->ID_ProduiT=$produit;

    }

    function setPrix($prix){
        $this->Prix=$prix;

    }

    function setEtat($etat){
        $this->Etat=$etat;

    }

    function setStatut($staut){
        $this->Heure_Chat=$staut;

    }

    function setID_paypal($paypal){
        $this->ID_paypal=$paypal;

    }

    function ajoutBDD{
        $db = New PDO ('mysql:host=localhost;dbname=fruit;chargest=utf-8','root','');

        $req = $db->prepare("INSERT INTO PRODUIT (IDprod, price, state , stat, IDpaypal) VALUES  (:produit, :prix, :etat, :statut, paypal)");

        $req -> execute (array(
            ":produit"=> $this->ID_ProduiT,
            ":prix"=> $this->Prix,
            ":etat"=> $this->Etat,
            ":statut"=> $this->Statut,
            ":paypal"=> $this->ID_paypal,

        ));
    }
}

?>