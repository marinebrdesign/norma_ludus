<?php
require_once('class.JEU.php');


class CATEGORIE{
    private $ID_categorie=0;
    private $Nom_Categorie=null;

    /**
     * CATEGORIE constructor.
     * @param int $ID_categorie
     * @param null $Nom_Categorie
     */
    public function __construct($ID_categorie, $Nom_Categorie)
    {
        $this->ID_categorie = $ID_categorie;
        $this->Nom_Categorie = $Nom_Categorie;
    }

    /**
     * @return int
     */
    public function getIDCategorie()
    {
        return $this->ID_categorie;
    }

    /**
     * @param int $ID_categorie
     */
    public function setIDCategorie($ID_categorie)
    {
        $this->ID_categorie = $ID_categorie;
    }

    /**
     * @return null
     */
    public function getNomCategorie()
    {
        return $this->Nom_Categorie;
    }

    /**
     * @param null $Nom_Categorie
     */
    public function setNomCategorie($Nom_Categorie)
    {
        $this->Nom_Categorie = $Nom_Categorie;
    }

}
?>


