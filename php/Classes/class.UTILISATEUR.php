<?php

require_once('class.CHAT.php');
require_once('class.COMMENTAIRE.php');
require_once('class.VENTE.php');
require_once('class.REGLE_UTILISATEUR.php');

class UTILISATEUR
{
    private $ID_utilisateur = 0;
    private $Nom_utilisateur = null;
    private $Prenom_utilisateur = null;
    private $Email_utilisateur = null;
    private $Date_de_naissance = null;
    private $Type_de_livraison = null;
    private $Adresse_utilisateur = null;
    private $telephone_utilisateur = null;

    /* Attribut données par associations*/
    private $ID_Regle_Utilisateur=null;
    private $ID_Commentaire=null;

    /**
     * UTILISATEUR constructor.
     * @param int $ID_utilisateur
     * @param null $Nom_utilisateur
     * @param null $Prenom_utilisateur
     * @param null $Email_utilisateur
     * @param null $Date_de_naissance
     * @param null $Type_de_livraison
     * @param null $Adresse_utilisateur
     * @param null $telephone_utilisateur
     */
    public function __construct($ID_utilisateur, $Nom_utilisateur, $Prenom_utilisateur, $Email_utilisateur, $Date_de_naissance, $Type_de_livraison, $Adresse_utilisateur, $telephone_utilisateur)
    {
        $this->ID_utilisateur = $ID_utilisateur;
        $this->Nom_utilisateur = $Nom_utilisateur;
        $this->Prenom_utilisateur = $Prenom_utilisateur;
        $this->Email_utilisateur = $Email_utilisateur;
        $this->Date_de_naissance = $Date_de_naissance;
        $this->Type_de_livraison = $Type_de_livraison;
        $this->Adresse_utilisateur = $Adresse_utilisateur;
        $this->telephone_utilisateur = $telephone_utilisateur;
    }

    /**
     * @return int
     */
    public function getIDUtilisateur()
    {
        return $this->ID_utilisateur;
    }

    /**
     * @param int $ID_utilisateur
     */
    public function setIDUtilisateur($ID_utilisateur)
    {
        $this->ID_utilisateur = $ID_utilisateur;
    }

    /**
     * @return null
     */
    public function getNomUtilisateur()
    {
        return $this->Nom_utilisateur;
    }

    /**
     * @param null $Nom_utilisateur
     */
    public function setNomUtilisateur($Nom_utilisateur)
    {
        $this->Nom_utilisateur = $Nom_utilisateur;
    }

    /**
     * @return null
     */
    public function getPrenomUtilisateur()
    {
        return $this->Prenom_utilisateur;
    }

    /**
     * @param null $Prenom_utilisateur
     */
    public function setPrenomUtilisateur($Prenom_utilisateur)
    {
        $this->Prenom_utilisateur = $Prenom_utilisateur;
    }

    /**
     * @return null
     */
    public function getEmailUtilisateur()
    {
        return $this->Email_utilisateur;
    }

    /**
     * @param null $Email_utilisateur
     */
    public function setEmailUtilisateur($Email_utilisateur)
    {
        $this->Email_utilisateur = $Email_utilisateur;
    }

    /**
     * @return null
     */
    public function getDateDeNaissance()
    {
        return $this->Date_de_naissance;
    }

    /**
     * @param null $Date_de_naissance
     */
    public function setDateDeNaissance($Date_de_naissance)
    {
        $this->Date_de_naissance = $Date_de_naissance;
    }

    /**
     * @return null
     */
    public function getTypeDeLivraison()
    {
        return $this->Type_de_livraison;
    }

    /**
     * @param null $Type_de_livraison
     */
    public function setTypeDeLivraison($Type_de_livraison)
    {
        $this->Type_de_livraison = $Type_de_livraison;
    }

    /**
     * @return null
     */
    public function getAdresseUtilisateur()
    {
        return $this->Adresse_utilisateur;
    }

    /**
     * @param null $Adresse_utilisateur
     */
    public function setAdresseUtilisateur($Adresse_utilisateur)
    {
        $this->Adresse_utilisateur = $Adresse_utilisateur;
    }

    /**
     * @return null
     */
    public function getTelephoneUtilisateur()
    {
        return $this->telephone_utilisateur;
    }

    /**
     * @param null $telephone_utilisateur
     */
    public function setTelephoneUtilisateur($telephone_utilisateur)
    {
        $this->telephone_utilisateur = $telephone_utilisateur;
    }

    /**
     * @return null
     */
    public function getIDRegleUtilisateur()
    {
        return $this->ID_Regle_Utilisateur;
    }

    /**
     * @param null $ID_Regle_Utilisateur
     */
    public function setIDRegleUtilisateur($ID_Regle_Utilisateur)
    {
        $this->ID_Regle_Utilisateur = $ID_Regle_Utilisateur;
    }

    /**
     * @return null
     */
    public function getIDCommentaire()
    {
        return $this->ID_Commentaire;
    }

    /**
     * @param null $ID_Commentaire
     */
    public function setIDCommentaire($ID_Commentaire)
    {
        $this->ID_Commentaire = $ID_Commentaire;
    }

}
?>