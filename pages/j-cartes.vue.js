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
            <router-link to="bataille"><h3>La Bataille</h3><img src="img/bataille.jpg" alt="img-bataille" id="img_bataille"  data-toShow="bataille-visit"></router-link>
        </div>
        <div id="loup-garou">
            <router-link to="loup-garou"><h3>Les Loups Garous de Thiercelieux</h3><img src="img/loup-garou.jpg" alt="" id="img_loup_garou" data-toShow="loup-garou-visit"></a>
        </div>
        <div id="dooble">
            <router-link to="dooble"><h3>Dooble</h3><img src="img/dooble.jpg" alt="" id="img_dooble" data-toShow="dooble-visit"></router-link>
        </div>
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

        regles: null,

    }
},
mounted(){
    /*axios.get('http://localhost/normaludus - Copie/php/Utilitaires/Produit.php').then((response) => {
        this.regles = response.data;
    });*/
},
methods:{
}
});
