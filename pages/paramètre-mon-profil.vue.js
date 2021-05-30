var ParametreMonProfil = Vue.component('ParametreMonProfil',{
    template: `

<div>
<n-header></n-header>
<main>
<div class="rectangle"></div>
    <div class="parametres_profil">
        <header>
            <h1>Mon profil</h1>
            <div class="retour">
                <button><a href="javascript:history.go(-1)"><svg version="1.1" id="left_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></g></g></svg></a></button>
            </div>
        </header>
        <ul id="parametre_profil">
            <li><p>Adresse mail</p><button>Changer</button></li>
            <li>
                <div class="nom-profil">
                    <label for=nom>Nom</label>
                    <input id=nom name=nom type=text required>
                </div>
            </li>
            <li><div class="nom-profil">
                <label for=prenom>Prénom</label>
                <input id=prenom name=prenom type=text required>
            </div>
            </li>
            <li><div class="date-naissance">
                <label for=date-naissance>Date de naissance</label>
                <input id=date-naissance name=date-naissance type=date required>
            </div>
            <li><p>Pseudo</p><button>Changer</button></li>
            <li><p>Mot de passe</p><button>Changer</button></li>
            <li><a href="../porte-monnaie.vue.js">Mon porte-monnaie<i class="fas fa-chevron-right"></i></a></li>
            <li><a href="">Supprimer mon compte</a><i class="fas fa-chevron-right"></i></li>
        </ul>
    </div>
</main>
<n-footer></n-footer>

</div>
        	`,

    data(){
        return {

            /* titre: 'Page d\'accueil',
             liste: null,
             listeCategories: null,
             je_veux_le_header: false*/
        }
    },
    mounted(){
        /*axios.get('http://localhost/normaludus - Copie/php/Utilitaires/Produit.php').then((response) => {
            this.listeCategories = response.data;
        });
        this.liste = [1, 2, 3];*/
        this.template
    },
    methods:{
    }
});
