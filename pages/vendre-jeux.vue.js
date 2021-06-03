var VendreJeux = Vue.component('VendreJeux',{
    template: `

<div>
<n-header></n-header>
<div class="norma">
<main>
<div class="rectangle"></div>
    <div class="vendre-un-jeu">
        <header>
            <h1>Vendre un jeu</h1>
            <div class="retour">
                <button><a href="javascript:history.go(-1)"><svg version="1.1" id="left_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></g></g></svg></a></button>
            </div>
            <div class="ajouter-des-photos">
                <router-link to=""><svg id="plus_ajouter" height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt" xmlns="http://www.w3.org/2000/svg"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg><p>Ajouter des photos</p></router-link>
            </div>
        </header>
        <form id="vendre-jeux">
            <div class="nom-j">
                <label for="nom-j">Nom du jeu</label>
                <input type="text" placeholder="ex : Cluedo" id="nom-j" required>
            </div>
            <div class="prix">
                <label for="prix">Prix sans les frais de ports</label>
                <input type="text" placeholder="ex : 16,00€" id="prix" required>
            </div>
            <div class="etat">
                <label for="etat">État</label>
                <input type="text" placeholder="ex : Bon état" id="etat" required>
            </div>
        </form>
        <div class="ajouter">
            <button>Vendre le jeu</button>
        </div>
    </div>
</main>
</div>
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