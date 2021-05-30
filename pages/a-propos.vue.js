var APropos = Vue.component('APropos',{
    template:`
<div>
<n-header></n-header>
<main>
    <img src="img/footer_nav/vagues.png" alt="vagues" id="img_nav" class="responsive">
    <img src="img/footer_nav/ligne.png" alt="ligne" id="ligne" class="responsive">
    <h3 id="equipe">L'équipe</h3>
    <div class="equipe">
        <div class="lena">
            <figure>
                <img src="img/a-propos/lena.png" alt="lena" height="110" width="110">
            </figure>
            <address>
                <p>Lena Bataillard</p>
                <a href="mailto:lena.bataillard3@gmail.com">lena.bataillard3@gmail.com</a>
            </address>
        </div>
        <div class="marine">
            <figure>
                <img src="img/a-propos/marine.png" alt="marine" width="110" height="110">
            </figure>
            <address>
                <p>Marine Beurier</p>
                <a href="mailto:marinebeurier22@gmail.com">marinebeurier22@gmail.com</a>
            </address>
        </div>

        <div class="nina">
            <figure>
                <img src="img/a-propos/nina.png" alt="nina" width="110" height="110">
            </figure>
            <address>
                <p>Nina Bellino</p>
                <a href="mailto:nina.bellin06@gmail.com">nina.bellin06@gmail.com</a>
            </address>
        </div>
    </div>
    <div class="a-propos">
        <div id="titre">
            <h3>À propos</h3>
        </div>
        <p>On a tous connu ce moment où l’on joue avec nos amis jusqu’à l’explication des règles, car celles-ci sont différentes pour chacun. Nous perdions alors plus de temps à débattre. <br> Pour mettre un terme à ça, Norma Ludus est là !
        <p>Notre but est de regrouper les règles officielles des jeux et proposer une variété de règles alternatives. Norma Ludus permet aussi de vendre et acheter de nombreux jeux ! Vous l’aurez compris Norma Ludus c’est étendre les possibilités de jeux à l’infini !</p>
        <p> Ce site a été créé par Lena Bataillard, Marine Beurier et Nina Bellino dans le cadre d’un projet pédagogique de 1ère année au DUT MMI de Montbéliard qui forme au métier du web en deux ans.</p>
    </div>
    <div class="contact">
        <h3>Nous contacter</h3>
        <div class="formulaire_contact">
            <form action="formulaire_de_contact" method="post" id="contact">
                <div class="nom">
                    <label for="nom"></label>
                    <input type="text" placeholder="Nom" id="nom" name="user_name" required>
                </div>
                <div class="prenom">
                    <label for="prenom"></label>
                    <input type="text" placeholder="Prénom" id="prenom" name="user_firstname" required>
                </div>
                <div class="mail2">
                    <label for="mail2"></label>
                    <input type="email" placeholder="Adresse mail" id="mail2" name="user_mail" required>
                </div>
                <div class="msg">
                    <label for="msg"></label>
                    <textarea id="msg" placeholder="Message" name="user_message" required></textarea>
                </div>
                <button class="envoyer"
                        type="submit">
                    Envoyer
                </button>
            </form>
        </div>
    </div>
</main>
<n-footer></n-footer>
</div>

        `,

    data(){
        return {

        }
    },
    mounted(){

    },
    methods:{
    }
});