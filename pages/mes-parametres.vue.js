var MesParametres = Vue.component('MesParametres',{
    template: `

<div>
<n-header></n-header>
<main>
<div class="rectangle"></div>
    <div class="parametres">
        <header>
            <h1>Paramètres</h1>
        </header>
        <ul>
            <li><router-link to="parametre-mon-profil">Mon profil</router-link><i class="fas fa-chevron-right"></i></li>
            <li><router-link to="paypal">Compte Paypal</router-link><i class="fas fa-chevron-right"></i></li>
            <li><router-link to="envoi">Envoi</router-link><i class="fas fa-chevron-right"></i></li>
            <li><router-link to="mails">Mails</router-link><i class="fas fa-chevron-right"></i></li>
            <li><router-link to="passer-premium">Passer premium</router-link><i class="fas fa-chevron-right"></i></li>
            <li><router-link to="">Se déconnecter</router-link></li>
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
