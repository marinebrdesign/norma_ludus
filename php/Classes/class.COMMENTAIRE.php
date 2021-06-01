<?php

require_once('class.UTILISATEUR.php');


class COMMENTAIRE implements JsonSerializable {
    private $ID_Commentaire = 0;
    private $Commentaire_utilisateur = null;
    private $Date_commentaire = null;
    private $Heure = null;

    /**
     * COMMENTAIRE constructor.
     * @param int $ID_Commentaire
     * @param null $Commentaire_utilisateur
     * @param null $Date_commentaire
     * @param null $Heure
     */
    public function __construct($ID_Commentaire,
                                $Commentaire_utilisateur, $Date_commentaire, $Heure)
    {
        $this->ID_Commentaire = $ID_Commentaire;
        $this->Commentaire_utilisateur = $Commentaire_utilisateur;
        $this->Date_commentaire = $Date_commentaire;
        $this->Heure = $Heure;
    }

    /**
     * @return int
     */
    public function getIDCommentaire()
    {
        return $this->ID_Commentaire;
    }

    /**
     * @param int $ID_Commentaire
     */
    public function setIDCommentaire($ID_Commentaire)
    {
        $this->ID_Commentaire = $ID_Commentaire;
    }

    /**
     * @return null
     */
    public function getCommentaireUtilisateur()
    {
        return $this->Commentaire_utilisateur;
    }

    /**
     * @param null $Commentaire_utilisateur
     */
    public function setCommentaireUtilisateur($Commentaire_utilisateur)
    {
        $this->Commentaire_utilisateur = $Commentaire_utilisateur;
    }

    /**
     * @return null
     */
    public function getDateCommentaire()
    {
        return $this->Date_commentaire;
    }

    /**
     * @param null $Date_commentaire
     */
    public function setDateCommentaire($Date_commentaire)
    {
        $this->Date_commentaire = $Date_commentaire;
    }

    /**
     * @return null
     */
    public function getHeure()
    {
        return $this->Heure;
    }

    /**
     * @param null $Heure
     */
    public function setHeure($Heure)
    {
        $this->Heure = $Heure;
    }

    public function jsonSerialize() {
        return get_object_vars($this);
    }

}
?>