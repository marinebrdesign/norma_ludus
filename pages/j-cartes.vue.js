var JCartes = Vue.component('JCartes',{
    template: `

<div>
<n-header></n-header>
<div class="norma">
<main class="index">
      <n-barre-recherche></n-barre-recherche>
    <div class="ajouter">
    <button><router-link to="ajouter-regle">Ajouter une règle</router-link></button>
    </div>
    <div class="jeux">
    
        <div v-for="game in games" id="bataille">
            <router-link v-bind:to='game.name'><h3>{{ game.displayName }}</h3><img v-bind:src='game.img' alt="img-bataille" id="img_bataille"  data-toShow="bataille-visit"></router-link>
        </div>
    
<!--        <div id="bataille">-->
<!--            <router-link to="bataille"><h3>La Bataille</h3><img src="img/bataille.jpg" alt="img-bataille" id="img_bataille"  data-toShow="bataille-visit"></router-link>-->
<!--        </div>-->
<!--        <div id="loup-garou">-->
<!--            <router-link to="loup-garou"><h3>Les Loups Garous de Thiercelieux</h3><img src="img/loup-garou.jpg" alt="" id="img_loup_garou" data-toShow="loup-garou-visit"></a>-->
<!--        </div>-->
<!--        <div id="dooble">-->
<!--            <router-link to="dooble"><h3>Dooble</h3><img src="img/dooble.jpg" alt="" id="img_dooble" data-toShow="dooble-visit"></router-link>-->
<!--        </div>-->
    </div>
</main>

</div>
<n-footer></n-footer>

</div>

`,

data(){
    return {
        regles: [],
        games: [
            { name: "bataille", displayName: "La Bataille", img: "img/bataille.jpg" },
            { name: "loup-garou", displayName: "Les Loups Garous de Thiercelieux", img: "img/loup-garou.jpg" },
            { name: "dooble", displayName: "Dooble", img: "img/dooble.jpg" },
        ],

    }
},
mounted(){
},
methods:{
}
});
