<?php
require_once('class.UTILISATEUR.php');


class CHAT{
    public $ID_CHAT;
    public $Message;
    public $Date_Chat;
    public $Heure_Chat;

    function setID_CHAT($chat){
        $this->ID_CHAT=$chat;

    }

    function setMessage($mess){
        $this->Message=$mess;

    }

    function setDate_Chat($datechat){
        $this->Date_Chat=$datechat;

    }

    function setHeure_Chat($heurechat){
        $this->Heure_Chat=$heurechat;

    }

    function ajoutBDD{
        $db = New PDO ('mysql:host=localhost;dbname=fruit;chargest=utf-8','root','');

        $req = $db->prepare("INSERT INTO CHAT (ID_C, message, Dateduchat, Heureduchat) VALUES  (:chat, :mess, :datechat, :heurechat)");

        $req -> execute (array(
            ":chat"=> $this->iD_CHAT,
            ":mess"=> $this->Message,
            ":datechat"=> $this->Date_Chat,
            ":heurechat"=> $this->Heure_Chat,
        ));
    }

}

?>