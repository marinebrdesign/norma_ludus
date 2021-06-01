<?php


require_once('class.COMMENTAIRE.php');
require_once('class.CATEGORIE.php');


class JEU implements JsonSerializable {

    private $ID_Jeu = 0;
    private $Photo_Jeu = null;
    private $Regle_Jeu = null;
    private $Nb_Participants = null;
    private $Temps_Jeu = null;
    private $Age_min = null;
    private $Age_max = null;

    /* Attribut données par associations*/
    private $ID_Regle_Utilisateur = null;
    private $ID_categorie = null;
    private $ID_Commentaire = null;

    /**
     * JEU constructor.
     * @param int $ID_Jeu
     * @param null $Photo_Jeu
     * @param null $Regle_Jeu
     * @param null $Nb_Participants
     * @param null $Temps_Jeu
     * @param null $Age_min
     * @param null $Age_max
     */
    public function __construct($ID_Jeu, $Photo_Jeu, $Regle_Jeu, $Nb_Participants,
                                $Temps_Jeu, $Age_min, $Age_max)
    {
        $this->ID_Jeu = $ID_Jeu;
        $this->Photo_Jeu = $Photo_Jeu;
        $this->Regle_Jeu = $Regle_Jeu;
        $this->Nb_Participants = $Nb_Participants;
        $this->Temps_Jeu = $Temps_Jeu;
        $this->Age_min = $Age_min;
        $this->Age_max = $Age_max;

    }

    /**
     * @return int
     */
    public function getIDJeu()
    {
        return $this->ID_Jeu;
    }

    /**
     * @param int $ID_Jeu
     */
    public function setIDJeu($ID_Jeu)
    {
        $this->ID_Jeu = $ID_Jeu;
    }

    /**
     * @return null
     */
    public function getPhotoJeu()
    {
        return $this->Photo_Jeu;
    }

    /**
     * @param null $Photo_Jeu
     */
    public function setPhotoJeu($Photo_Jeu)
    {
        $this->Photo_Jeu = $Photo_Jeu;
    }

    /**
     * @return null
     */
    public function getRegleJeu()
    {
        return $this->Regle_Jeu;
    }

    /**
     * @param null $Regle_Jeu
     */
    public function setRegleJeu($Regle_Jeu)
    {
        $this->Regle_Jeu = $Regle_Jeu;
    }

    /**
     * @return null
     */
    public function getNbParticipants()
    {
        return $this->Nb_Participants;
    }

    /**
     * @param null $Nb_Participants
     */
    public function setNbParticipants($Nb_Participants)
    {
        $this->Nb_Participants = $Nb_Participants;
    }

    /**
     * @return null
     */
    public function getTempsJeu()
    {
        return $this->Temps_Jeu;
    }

    /**
     * @param null $Temps_Jeu
     */
    public function setTempsJeu($Temps_Jeu)
    {
        $this->Temps_Jeu = $Temps_Jeu;
    }

    /**
     * @return null
     */
    public function getAgeMin()
    {
        return $this->Age_min;
    }

    /**
     * @param null $Age_min
     */
    public function setAgeMin($Age_min)
    {
        $this->Age_min = $Age_min;
    }

    /**
     * @return null
     */
    public function getAgeMax()
    {
        return $this->Age_max;
    }

    /**
     * @param null $Age_max
     */
    public function setAgeMax($Age_max)
    {
        $this->Age_max = $Age_max;
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
    public function getIDCategorie()
    {
        return $this->ID_categorie;
    }

    /**
     * @param null $ID_categorie
     */
    public function setIDCategorie($ID_categorie)
    {
        $this->ID_categorie = $ID_categorie;
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

    public function jsonSerialize() {
        return get_object_vars($this);
    }
}
?>