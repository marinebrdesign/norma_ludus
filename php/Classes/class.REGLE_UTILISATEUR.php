<?php

require_once('class.UTILISATEUR.php');


class REGLE_UTILISATEUR
{
    private $ID_Regle_Utilisateur = 0;
    private $Contenu = null;
    private $Date_post = null;
    private $Heure_post = null;

    /**
     * REGLE_UTILISATEUR constructor.
     * @param int $ID_Regle_Utilisateur
     * @param null $Contenu
     * @param null $Date_post
     * @param null $Heure_post
     */
    public function __construct($ID_Regle_Utilisateur, $Contenu, $Date_post, $Heure_post)
    {
        $this->ID_Regle_Utilisateur = $ID_Regle_Utilisateur;
        $this->Contenu = $Contenu;
        $this->Date_post = $Date_post;
        $this->Heure_post = $Heure_post;
    }

    /**
     * @return int
     */
    public function getIDRegleUtilisateur()
    {
        return $this->ID_Regle_Utilisateur;
    }

    /**
     * @param int $ID_Regle_Utilisateur
     */
    public function setIDRegleUtilisateur($ID_Regle_Utilisateur)
    {
        $this->ID_Regle_Utilisateur = $ID_Regle_Utilisateur;
    }

    /**
     * @return null
     */
    public function getContenu()
    {
        return $this->Contenu;
    }

    /**
     * @param null $Contenu
     */
    public function setContenu($Contenu)
    {
        $this->Contenu = $Contenu;
    }

    /**
     * @return null
     */
    public function getDatePost()
    {
        return $this->Date_post;
    }

    /**
     * @param null $Date_post
     */
    public function setDatePost($Date_post)
    {
        $this->Date_post = $Date_post;
    }

    /**
     * @return null
     */
    public function getHeurePost()
    {
        return $this->Heure_post;
    }

    /**
     * @param null $Heure_post
     */
    public function setHeurePost($Heure_post)
    {
        $this->Heure_post = $Heure_post;
    }

}
?>