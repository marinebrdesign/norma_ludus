var AcheterJeux = Vue.component('AcheterJeux',{
    template: `

<div>
<n-header></n-header>
<main class="index">
<n-barre-recherche></n-barre-recherche>
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
    });*/

},
methods:{
}
});