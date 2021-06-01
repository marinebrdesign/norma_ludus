<?php
require_once('class.VENTE.php');


class PRODUIT implements JsonSerializable {
    private $ID_ProduiT = 0;
    private $Prix = null;
    private $Etat = null;
    private $Statut = null;

    /* Attribut données par associations*/
    private $ID_paypal = null;

    /**
     * PRODUIT constructor.
     * @param int $ID_ProduiT
     * @param null $Prix
     * @param null $Etat
     * @param null $Statut
     */
    public function __construct($ID_ProduiT, $Prix, $Etat, $Statut)
    {
        $this->ID_ProduiT = $ID_ProduiT;
        $this->Prix = $Prix;
        $this->Etat = $Etat;
        $this->Statut = $Statut;
    }

    /**
     * @return int
     */
    public function getIDProduiT()
    {
        return $this->ID_ProduiT;
    }

    /**
     * @param int $ID_ProduiT
     */
    public function setIDProduiT($ID_ProduiT)
    {
        $this->ID_ProduiT = $ID_ProduiT;
    }

    /**
     * @return null
     */
    public function getPrix()
    {
        return $this->Prix;
    }

    /**
     * @param null $Prix
     */
    public function setPrix($Prix)
    {
        $this->Prix = $Prix;
    }

    /**
     * @return null
     */
    public function getEtat()
    {
        return $this->Etat;
    }

    /**
     * @param null $Etat
     */
    public function setEtat($Etat)
    {
        $this->Etat = $Etat;
    }

    /**
     * @return null
     */
    public function getStatut()
    {
        return $this->Statut;
    }

    /**
     * @param null $Statut
     */
    public function setStatut($Statut)
    {
        $this->Statut = $Statut;
    }

    /**
     * @return null
     */
    public function getIDPaypal()
    {
        return $this->ID_paypal;
    }

    /**
     * @param null $ID_paypal
     */
    public function setIDPaypal($ID_paypal)
    {
        $this->ID_paypal = $ID_paypal;
    }

    public function jsonSerialize() {
        return get_object_vars($this);
    }

}
?>
