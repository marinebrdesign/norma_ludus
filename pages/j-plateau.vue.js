var JPlateau = Vue.component('JPlateau',{
  template: `

<div>
<n-header></n-header>
<main class="index">
    <n-barre-recherche></n-barre-recherche>
  <div class="ajouter">
    <button><router-link to="ajouter-regle">Ajouter une règle</router-link></button>
  </div>  <div class="jeux">
  <div id="jeu-dames">
    <router-link to="eu-de-dames"><h3>Le Jeu des Dames</h3><img src="" alt="img-bataille" data-toShow="bataille-visit"></router-link>
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
