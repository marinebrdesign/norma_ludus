var JPlateau = Vue.component('JPlateau',{
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
         <div v-for="game in games" id="jeu-dames">
            <router-link v-bind:to='game.name'><h3>{{ game.displayName }}</h3><img v-bind:src='game.img' alt="img-jeu-dames" id="img_bataille"  data-toShow="bataille-visit"></router-link>
        </div>
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
        { name: "jeu-de-dames", displayName: "Le Jeu de Dames", img: "img/jeu_dames.jpg" },
      ],
    }
  },
  mounted(){

  },
  methods:{
  }
});
