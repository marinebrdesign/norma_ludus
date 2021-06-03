var JPions = Vue.component('JPions',{
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
   </div>
</main>

</div>
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
