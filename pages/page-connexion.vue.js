var PageConnexion = Vue.component('PageConnexion',{
    template: `

<div>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <title>Connexion</title>
    <link rel="stylesheet" href="../css/typographie_couleurs.css">
    <link rel="stylesheet" href="../css/menu.css">
    <link rel="stylesheet" href="../css/style_mise_en_page.css">
</head>
<body class="connexion">
<img src="img/footer_nav/haut_connexion.png" alt="haut_png" id="haut_connexion" class="responsive">
<img src="img/logo.svg" alt="logo" id="logo">
<div class="centrer">
    <div id="container">
        <form id="connexion">
            <label for="mail"></label>
            <input type="text" id="mail" placeholder="E-mail" v-model="mailUtilisateur" name="username" required>
            <label for="mdp"></label>
            <input type="password" id="mdp" placeholder="Mot de passe"  v-model="motDePasseUtilisateur" name="password" required>
            <div class="connexion">
                <button class="connexion"
                        type="submit" @click="connexion">
                    Connexion
                </button>
            </div>
        </form>
        <router-link to="page-inscription"><p>Vous n'avez pas de compte ? </p> Inscrivez-vous !</router-link>
    </div>
</div>
    <img src="img/footer_nav/bas_connexion.png" alt="bas_png" id="bas_connexion" class="responsive">
</div>  
        
        	`,

    data(){
        mailUtilisateur = '';
        motDePasseUtilisateur = '';

        return {

        }
    },
    mounted(){

    },
    methods:{
        connexion() {
            var bodyFormData = new FormData();
            bodyFormData.append('user_mail', mailUtilisateur);
            bodyFormData.append('user_password', motDePasseUtilisateur);
            axios
                .post('http://localhost/tp/php/Utilitaires/formulaire_inscription.php',
                    bodyFormData,
                    { headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }})
                .then(response => console.log(response))
        }
    }
});
