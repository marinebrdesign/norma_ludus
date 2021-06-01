var JPions = Vue.component('JPions',{
    template: `

<div>
<n-header></n-header>
<main class="index">
      <n-barre-recherche></n-barre-recherche>
    <div class="ajouter">
        <button><router-link to="ajouter-regle">Ajouter une règle</router-link></button>
    </div>    
    <div class="jeux">
        <div v-for="regle in regles" :key="regle.Contenu">
           {{ regle.Contenu }}
        </div>
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
