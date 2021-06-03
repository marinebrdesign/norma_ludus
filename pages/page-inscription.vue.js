var PageInscription = Vue.component('PageInscription',{
    template: `
<div>
<div class="norma">
<body class="inscription">
<img src="img/footer_nav/haut_connexion.png" alt="haut_png" id="haut_connexion" class="responsive">
<img src="img/logo.svg" alt="logo" id="logo">
<div class="centrer">
    <div id="inscription">
        <p>Inscrivez-vous <b>gratuitement</b></p>
        <div class="prenom">
            <label for="prenom"></label>
            <input type="text" placeholder="Prénom" id="prenom" v-model="prenomUtilisateur" name="user_firstname_name" required>
        </div>
        <div class="nom">
            <label for="nom"></label>
            <input type="text" placeholder="Nom" id="nom" v-model="nomUtilisateur" name="user_lastname_name" required>
        </div>
        <div class="age">
            <label for="age"></label>
            <input type="date" id="age" v-model="ageUtilisateur" name="user_age" required>
        </div>
        <div class="id">
            <label for="id"></label>
            <input type="text" id="id"  placeholder="Identifiant" v-model="identifiantUtilisateur" name="user_id" required>
        </div>
        <div class="mail">
            <label for="mail"></label>
            <input type="email" placeholder="Email" id="mail" v-model="mailUtilisateur" name="user_mail" required>
        </div>
        <div class="mdp">
            <label for="mdp"></label>
            <input type="password" placeholder="Votre mot de passe" id="mdp" v-model="motDePasseUtilisateur" name="user_password">
        </div>
        <div class="inscription">
            <button class="je-m-inscris"
                    type="submit" @click="inscription">Je m'inscris
            </button>
        </div>
        <p>N'attendez pas et rejoignez nous vite sur Norma Ludus !</p>
    </div>
</div>
</body>
<img src="img/footer_nav/bas_connexion.png" alt="bas_png" id="bas_connexion" class="responsive">
</div>
</div>
        
        	`,

    data(){
        prenomUtilisateur = '';
        nomUtilisateur = '';
        ageUtilisateur = '';
        identifiantUtilisateur = '';
        mailUtilisateur = '';
        motDePasseUtilisateur = '';

        return {

        }
    },
    mounted(){

    },
    methods:{
        inscription() {
            var bodyFormData = new FormData();
            bodyFormData.append('user_lastname_name', nomUtilisateur);
            bodyFormData.append('user_firstname_name', prenomUtilisateur);
            bodyFormData.append('user_age', ageUtilisateur);
            bodyFormData.append('user_id', identifiantUtilisateur);
            bodyFormData.append('user_mail', mailUtilisateur);
            bodyFormData.append('user_password', motDePasseUtilisateur);
            axios
                .post('http://localhost/tp/normaludus/php/Utilitaires/formulaire_inscription.php',
                    bodyFormData,
                    { headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }})
                .then(response => {
                    localStorage.setItem('username', response.data);
                    window.location.href = 'http://localhost:63342/normaludus/index.html?_ijt=rospg8fhm9e996t7j2uaio1ojk';
                })
                .catch(err => console.log(err))
        }
    }
});
