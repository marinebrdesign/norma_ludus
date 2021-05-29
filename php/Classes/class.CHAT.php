<?php

require_once('class.UTILISATEUR.php');


class CHAT{
    private $ID_CHAT = 0;
    private $Message = null;
    private $Date_Chat = null;
    private $Heure_Chat = null;

    /**
     * CHAT constructor.
     * @param int $ID_CHAT
     * @param null $Message
     * @param null $Date_Chat
     * @param null $Heure_Chat
     */
    public function __construct($ID_CHAT, $Message, $Date_Chat, $Heure_Chat)
    {
        $this->ID_CHAT = $ID_CHAT;
        $this->Message = $Message;
        $this->Date_Chat = $Date_Chat;
        $this->Heure_Chat = $Heure_Chat;
    }

    /**
     * @return int
     */
    public function getIDCHAT()
    {
        return $this->ID_CHAT;
    }

    /**
     * @param int $ID_CHAT
     */
    public function setIDCHAT($ID_CHAT)
    {
        $this->ID_CHAT = $ID_CHAT;
    }

    /**
     * @return null
     */
    public function getMessage()
    {
        return $this->Message;
    }

    /**
     * @param null $Message
     */
    public function setMessage($Message)
    {
        $this->Message = $Message;
    }

    /**
     * @return null
     */
    public function getDateChat()
    {
        return $this->Date_Chat;
    }

    /**
     * @param null $Date_Chat
     */
    public function setDateChat($Date_Chat)
    {
        $this->Date_Chat = $Date_Chat;
    }

    /**
     * @return null
     */
    public function getHeureChat()
    {
        return $this->Heure_Chat;
    }

    /**
     * @param null $Heure_Chat
     */
    public function setHeureChat($Heure_Chat)
    {
        $this->Heure_Chat = $Heure_Chat;
    }

}
?>
