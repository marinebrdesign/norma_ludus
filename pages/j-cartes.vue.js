var JCartes = Vue.component('JCartes',{
    template: `

<div>
<n-header></n-header>
<main class="index">
      <n-barre-recherche></n-barre-recherche>
    <div class="ajouter">
    <button><router-link to="ajouter-regle">Ajouter une règle</router-link></button>
    </div>
    <div class="jeux">
        <div id="bataille">
            <router-link to="bataille"><h3>La Bataille</h3><img src="" alt="img-bataille" data-toShow="bataille-visit"></router-link>
        </div>
        <div id="loup-garou">
            <router-link to="loup-garou"><h3>Les Loups Garous de Thiercelieux</h3><img src="" alt="img-bataille" data-toShow="bataille-visit"></a>
        </div>
        <div id="dooble">
            <router-link to="dooble"><h3>Dooble</h3><img src="" alt="img-dooble" data-toShow="bataille-visit"></router-link>
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
