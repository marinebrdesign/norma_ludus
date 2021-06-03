var LandingPage= Vue.component('landing-page',{
    template: `
<div>
<header>
    <svg xmlns="http://www.w3.org/2000/svg" id="logo" viewBox="0 0 80.06 26.69"><defs><style>.cls-1,.cls-6{fill:#a8d9dc;}.cls-2{fill:#e6eded;}.cls-3{fill:#cae7e9;}.cls-4,.cls-5,.cls-7{fill:#cf4c68;}.cls-5{font-size:3.22px;font-family:TimesNewRomanPSMT, Times New Roman;letter-spacing:-0.06em;}.cls-6{font-size:14px;font-family:Roboto-Bold, Roboto;font-weight:700;}.cls-7{font-size:10px;font-family:Roboto-Regular, Roboto;font-weight:400;}.cls-8{letter-spacing:-0.02em;}</style></defs><title>Logo</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-1" d="M15.71,23.09l-4.83,2a1.78,1.78,0,0,1-2.21-.72L.17,8.59a1.39,1.39,0,0,1,.76-2l4.82-2Z"/><path class="cls-1" d="M15.73,23.08l4.83-2a1.4,1.4,0,0,0,.76-2L12.81,3.31a1.78,1.78,0,0,0-2.21-.72l-4.82,2Z"/><path class="cls-1" d="M16.76,23.09l4.9,2a1.71,1.71,0,0,0,2.18-.71l8-15.75a1.44,1.44,0,0,0-.84-2l-4.9-2Z"/><path class="cls-1" d="M16.74,23.08l-4.9-2a1.45,1.45,0,0,1-.83-2L19,3.33a1.73,1.73,0,0,1,2.18-.71l4.9,2Z"/><path class="cls-2" d="M15.82,25.39l-6.12,0a1.9,1.9,0,0,1-1.92-1.83L7.4,2.05A1.81,1.81,0,0,1,9.25.23l6.12,0Z"/><path class="cls-3" d="M15.85,25.39l6.12,0a1.81,1.81,0,0,0,1.85-1.82L23.44,2.1A1.9,1.9,0,0,0,21.52.27L15.4.25Z"/><path class="cls-4" d="M19.65,13.11a2,2,0,0,0,.41-1.26,2.76,2.76,0,0,0-2.94-2.43,3.11,3.11,0,0,0-1.54.37,3.33,3.33,0,0,0-1.46-.33,2.61,2.61,0,0,0-2.84,2.42,2.12,2.12,0,0,0,.41,1.21h0l0,0a3.71,3.71,0,0,0,.56.56l3.48,3.47,3.46-3.57a2.59,2.59,0,0,0,.4-.41l.06-.07Z"/><ellipse class="cls-4" cx="21.7" cy="20.76" rx="0.91" ry="0.95" transform="translate(-4.13 36.09) rotate(-74.42)"/><ellipse class="cls-4" cx="9.69" cy="4.81" rx="0.91" ry="0.95" transform="translate(2.45 12.85) rotate(-74.42)"/><text class="cls-5" transform="matrix(1.03, 0, 0.02, 1, 8.55, 3.34)">A</text><text class="cls-5" transform="matrix(-1.03, 0, -0.02, -1, 23, 22.53)">A</text><text class="cls-6" transform="translate(34.04 11.98)">Norma <tspan class="cls-7"><tspan class="cls-8" x="0" y="12">L</tspan><tspan x="5.17" y="12">udus</tspan></tspan></text></g></g></svg>
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
           <form action="formulaire_contact" method="post" id="connexion">
               <h2><b>Connectez-vous</b></h2>
               <div class="mail">
                   <label for="mail"></label>
                   <input type="text" placeholder="E-mail ou identifiant" id="mail" required>
               </div>
               <div class="mdp">
                   <label for="mdp"></label>
                   <input type="password" placeholder="Mot de passe" id="mdp" name="user_password">
               </div>
               <button class="je-me-connecte"
                   type="submit"><a href="http://normaludus.marinebeurier.fr/#/"> Connexion</a>
               </button>
               <a href="http://normaludus.marinebeurier.fr/#/page-inscription" id="inscription"><p>Vous n'avez pas de compte ? </p> Inscrivez-vous !</a>
           </form>
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
        <form action="formulaire_de_contact" method="post" id="contact">
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
        </form>
    </div>
</main>
</div>

    	`,
        module.exports = {
        data(){
        return{
    }
    },
        mounted(){
    },
        methods:{
    }

    }


});