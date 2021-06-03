var LandingPage = Vue.component('LandingPage',{
    template: `

<div>
<!--<head>
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
        <div id="connexion">
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
        </div>
        <router-link to="page-inscription"><p>Vous n'avez pas de compte ? </p> Inscrivez-vous !</router-link>
    </div>
</div>
    <img src="img/footer_nav/bas_connexion.png" alt="bas_png" id="bas_connexion" class="responsive">
</div>  -->
<div class="landing">
<header>
    <img src="img/logo.svg" alt="logo" id="logo">
    <div class="reseaux">
        <ul>
            <li><a href="https://www.instagram.com/normaludus/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#250B55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <li><a href="https://www.facebook.com/norma.ludus/"><svg id="Bold" enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="47" xmlns="http://www.w3.org/2000/svg"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/></svg></a>
            <li><a href="mailto:normaludus25@gmail.com"><svg version="1.1" id="email" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M467,76H45C20.137,76,0,96.262,0,121v270c0,24.885,20.285,45,45,45h422c24.655,0,45-20.03,45-45V121C512,96.306,491.943,76,467,76z M460.698,106c-9.194,9.145-167.415,166.533-172.878,171.967c-8.5,8.5-19.8,13.18-31.82,13.18s-23.32-4.681-31.848-13.208C220.478,274.284,64.003,118.634,51.302,106H460.698z M30,384.894V127.125L159.638,256.08L30,384.894zM51.321,406l129.587-128.763l22.059,21.943c14.166,14.166,33,21.967,53.033,21.967c20.033,0,38.867-7.801,53.005-21.939l22.087-21.971L460.679,406H51.321z M482,384.894L352.362,256.08L482,127.125V384.894z"/></g></g></svg></a></li>
        </ul>
    </div>
</header>
<main>
    <div class="texte">
        <h1>Norma Ludus</h1>
        <p>Vos soirées de jeux de société finissent souvent en disputes à cause des différentes règles des joueurs ?</p>
        <p>Norma Ludus est là pour vous !</p>
        <p>Ce site permet de recenser toutes les règles de vos jeux de sociétés préférés ainsi que des variantes pour ne plus jamais vous disputer ou vous lasser de vos jeux. Ce n’est pas assez ? Vous avez également la possibilité de vendre ou acheter des jeux.</p>
    </div>
    <div class="connexion">
       <div class="connectez-vous">
           <img src="img/connnexion_tablette.png" alt="" id="connexion_t_img">
           <img src="img/connexion_mobile.png" alt="" id="connexion_m_img">
           <div id="connexion">
               <h2><b>Connectez-vous</b></h2>
               <div class="mail">
                   <label for="mail"></label>
                   <input type="text"  placeholder="E-mail" id="mail" v-model="mailUtilisateur" name="username" required>
               </div>
               <div class="mdp">
                   <label for="mdp"></label>
                   <input type="password" placeholder="Mot de passe" id="mdp" v-model="motDePasseUtilisateur" name="password" required>
               </div>
               <button class="je-me-connecte"
                    type="submit" @click="connexion">
                    Connexion
                </button>
        <router-link to="page-inscription" id="inscription"><p>Vous n'avez pas de compte ? </p> Inscrivez-vous !</router-link>
           </div>
       </div>
   </div>
   <div class="fonctionnalites">
       <div class="decouvrez">
           <img src="img/decouvrez.png" alt="img_découvrez" id="decouvrez">
            <h2>Découvrez</h2>
            <p>La première fonctionnalité de Norma Ludus est de vous répertorier les règles officielles de vos jeux de société préférés ainsi que le nombre de joueurs, l'âge minimum et le temps de jeu.
                <br>Mais également, les variantes de jeu de ceux-ci.</p>
        </div>
        <div class="postez">
            <h2>Postez</h2>
            <p>Venez discutez avec les autres utilisateurs, grâce à un forum, des règles de jeu ! <br> Poster aussi vos propres règles et/ou variantes de jeu de société.</p>
            <img src="img/postez.png" alt="img_postez" id="postez">
        </div>
        <div class="achetez_vendez">
            <img src="img/achetez_vendez.png" alt="img_achetez_vendez" id="achetez_vendez">
            <h2>Vendez & Achetez</h2>
            <p>Un espace vente et achat est mis en place sur Norma Ludus.<br> Il vous manque des pièces de jeux, trouvez les et achetez les ! <br> Vous ne vous servez plus de vos anciens jeu, alors vendez les pour que d'autres personnes puissent en profiter !</p>
        </div>
    </div>
    <h3 id="equipe">L'équipe</h3>
    <div class="equipe">
        <div class="lena">
           <figure>
                 <img src="img/lena.png" alt="lena" height="180" width="180">
             </figure>
             <address>
                 <p>Lena Bataillard</p>
                 <a href="mailto:lena.bataillard3@gmail.com">lena.bataillard3@gmail.com</a>
             </address>

         </div>
       <div class="marine">
            <figure>
                <img src="img/marine.png" alt="marine" width="180" height="180">
            </figure>
             <address>
                 <p>Marine Beurier</p>
                 <a href="mailto:marinebeurier22@gmail.com">marinebeurier22@gmail.com</a>
             </address>
         </div>

         <div class="nina">
             <figure>
                 <img src="img/nina.png" alt="nina" width="180" height="180">
             </figure>
             <address>
                 <p>Nina Bellino</p>
                 <a href="mailto:nina.bellin06@gmail.com">nina.bellin06@gmail.com</a>
             </address>
         </div>
     </div>
     <div class="a-propos">
            <img src="img/vague.png" alt="décoration" id="vague" class="responsive">
         <div id="titre">
             <h3>À propos</h3>
         </div>
        <p>On a tous connu ce moment où l’on joue avec nos amis jusqu’à l’explication des règles, car celles-ci sont différentes pour chacun. Nous perdions alors plus de temps à débattre. <br> Pour mettre un terme à ça, Norma Ludus est là !
        <p>Notre but est de regrouper les règles officielles des jeux et proposer une variété de règles alternatives. Norma Ludus permet aussi de vendre et acheter de nombreux jeux ! Vous l’aurez compris Norma Ludus c’est étendre les possibilités de jeux à l’infini !</p>
        <p> Ce site a été créé par Lena Bataillard, Marine Beurier, Nina Bellino dans le cadre d’un projet pédagogique de 1re année au DUT MMI de Montbéliard qui forme au métier du web en deux ans.</p>
           <img src="img/vague2.png" alt="décoration" id="vague2" class="responsive">
    </div>

    <div class="contact">
        <h3>Nous contacter</h3>
        <div id="contact">
            <div class="prenom">
                <label for="prenom"></label>
                <input type="text" placeholder="Prénom" id="prenom" name="user_firstname" required>
            </div>
            <div class="nom">
                <label for="nom"></label>
                <input type="text" placeholder="Nom" id="nom" name="user_name" required>
            </div>
            <div class="mail2">
                <label for="mail2"></label>
                <input type="email" placeholder="Adresse mail" id="mail2" name="user_mail" required>
            </div>
            <div class="msg">
                <label for="msg"></label>
                <textarea id="msg" placeholder="Message" name="user_message" required></textarea>
            </div>
            <div class="center">
                <button class="envoyer"
                        type="submit">
                    Envoyer
                </button>
            </div>
        </div>
    </div>
</main>
</div>      
        	`,

    data(){
        mailUtilisateur = '';
        motDePasseUtilisateur = '';

        return {
            logo:null
        }
    },
    mounted(){

    },
    methods:{
        connexion() {
            var bodyFormData = new FormData();
            bodyFormData.append('user_email', mailUtilisateur);
            bodyFormData.append('user_password', motDePasseUtilisateur);
            axios
                .post('http://localhost/tp/normaludus/php/Utilitaires/connect.php',
                    bodyFormData,
                    { headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }})
                .then(response => {
                    localStorage.setItem('username', response.data.Identifiant);
                    window.location.href = 'http://localhost:63342/normaludus/index.html?_ijt=rospg8fhm9e996t7j2uaio1ojk';
                })
        }
    }
});
