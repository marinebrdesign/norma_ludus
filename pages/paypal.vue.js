var Paypal = Vue.component('Paypal',{
    template: `

<div>
<n-header></n-header>
<main>
   <div class="rectangle"></div> 
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
