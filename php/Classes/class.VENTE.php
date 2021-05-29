<?php
require_once('class.UTILISATEUR.php');


class VENTE
{

    private $ID_paypal = 0;
    private $Statut_paiement = null;
    private $Comission = null;
    private $Prix = null;
    private $Date_paiement = null;
    private $Email_paiement = null;

    /* Attribut données par associations*/
    private $ID_utilisateur = null;
    private $ID_utilisateur1 = null;

    /**
     * VENTE constructor.
     * @param int $ID_paypal
     * @param null $Statut_paiement
     * @param null $Comission
     * @param null $Prix
     * @param null $Date_paiement
     * @param null $Email_paiement
     * @param null $ID_utilisateur
     * @param null $ID_utilisateur1
     */
    public function __construct($ID_paypal, $Statut_paiement, $Comission, $Prix, $Date_paiement, $Email_paiement)
    {
        $this->ID_paypal = $ID_paypal;
        $this->Statut_paiement = $Statut_paiement;
        $this->Comission = $Comission;
        $this->Prix = $Prix;
        $this->Date_paiement = $Date_paiement;
        $this->Email_paiement = $Email_paiement;
    }

    /**
     * @return int
     */
    public function getIDPaypal()
    {
        return $this->ID_paypal;
    }

    /**
     * @param int $ID_paypal
     */
    public function setIDPaypal($ID_paypal)
    {
        $this->ID_paypal = $ID_paypal;
    }

    /**
     * @return null
     */
    public function getStatutPaiement()
    {
        return $this->Statut_paiement;
    }

    /**
     * @param null $Statut_paiement
     */
    public function setStatutPaiement($Statut_paiement)
    {
        $this->Statut_paiement = $Statut_paiement;
    }

    /**
     * @return null
     */
    public function getComission()
    {
        return $this->Comission;
    }

    /**
     * @param null $Comission
     */
    public function setComission($Comission)
    {
        $this->Comission = $Comission;
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
    public function getDatePaiement()
    {
        return $this->Date_paiement;
    }

    /**
     * @param null $Date_paiement
     */
    public function setDatePaiement($Date_paiement)
    {
        $this->Date_paiement = $Date_paiement;
    }

    /**
     * @return null
     */
    public function getEmailPaiement()
    {
        return $this->Email_paiement;
    }

    /**
     * @param null $Email_paiement
     */
    public function setEmailPaiement($Email_paiement)
    {
        $this->Email_paiement = $Email_paiement;
    }

    /**
     * @return null
     */
    public function getIDUtilisateur()
    {
        return $this->ID_utilisateur;
    }

    /**
     * @param null $ID_utilisateur
     */
    public function setIDUtilisateur($ID_utilisateur)
    {
        $this->ID_utilisateur = $ID_utilisateur;
    }

    /**
     * @return null
     */
    public function getIDUtilisateur1()
    {
        return $this->ID_utilisateur1;
    }

    /**
     * @param null $ID_utilisateur1
     */
    public function setIDUtilisateur1($ID_utilisateur1)
    {
        $this->ID_utilisateur1 = $ID_utilisateur1;
    }

}

?>