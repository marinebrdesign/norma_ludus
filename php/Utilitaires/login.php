<?php
session_start();
if($_SESSION['username'] !== ""){
    $user = $_SESSION['username'];
    // afficher un message
    echo "Bonjour $user, vous êtes connecté";
}
?>