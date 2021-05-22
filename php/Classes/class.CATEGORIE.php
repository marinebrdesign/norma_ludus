<?php
require_once('class.JEU.php');


class CATEGORIE{
    public $ID_categorie;
    public $Nom_Categorie;

    function setID_categorie($ID_cat){
        $this->ID_categorie=$ID_cat;

    }

    function setNom_Categorie($Nom_Cat){
        $this->Nom_Categorie=$Nom_Cat;

    }

    function ajoutBDD{
        $db = New PDO ('mysql:host=localhost;dbname=fruit;chargest=utf-8','root','');

        $req = $db->prepare("INSERT INTO UTILISATEUR (cat_ID, cat_nom) VALUES  (:ID_cat, :Nom_Cat)");

        $req -> execute (array(
            ":ID_cat"=> $this->ID_categorie,
            ":Nom_cat"=> $this->Nom_Categorie,
        ));
    }
}

?>