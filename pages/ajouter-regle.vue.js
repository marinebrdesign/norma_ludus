var AjouterRegle = Vue.component('AjouterRegle',{
  template: `
<div>
<n-header></n-header>
<main class="index">
  <n-barre-recherche></n-barre-recherche>
  <div class="retour">
    <button><a href="javascript:history.go(-1)"><svg version="1.1" id="left_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></g></g></svg></a></button>
  </div>
  <form id="ajouter-regle">
    <div class="nom-j">
      <label for="nom-j"></label>
      <input type="text" placeholder="Nom du jeu" id="nom-j" v-model="nomDuJeu"  required>
    </div>
    <div class="ajouter-des-photos">
      <a href=""><svg id="plus_ajouter" height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt" xmlns="http://www.w3.org/2000/svg"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg><p>Ajouter des photos</p></a>
    </div>
    <div class="categorie">
      <label for="categorie">Catégories</label>
      <!--<input type="text" placeholder="ex : Jeu de cartes" id="categorie" v-model="categorie" required>-->
        <select v-model="idCategorie">
          <option v-for="categorie in categories" v-bind:value="categorie.id">
            {{ categorie.text }}
          </option>
        </select>
    </div>
    <div class="nbr-joueurs">
      <label for="nbr-joueurs">Nombre de joueurs</label>
      <input type="text" placeholder="ex : 2 à 5" id="nbr-joueurs" v-model="nombreDeJoueur" required>
    </div>
    <div class="temps">
      <label for="tps-j">Temps de jeu</label>
      <input type="text" placeholder="ex : environ 45 min" id="tps-j" v-model="tempsDeJeu" required>
    </div>
    <div class="age-min">
      <label for="age-min">Âge minimum</label>
      <input type="number" placeholder="ex : 12" id="age-min" name="min_age" v-model="ageMinimum" required>
    </div>

    <div class="age-max">
      <label for="age-max">Âge maximum</label>
      <input type="number" placeholder="ex : 12" id="age-max" name="max_age" v-model="ageMaximum" required>
    </div>

    <div class="regle-o">
      <label for="regle-o">Règle officielle</label>
      <textarea id="regle-o" placeholder="Écrire la règle ici" v-model="regles" required></textarea>
    </div>
    <div class="ajouter">
      <button type="submit" @click="ajouterRegle">
        Ajouter le jeu
      </button>
    </div>
  </form>
</main>
<n-footer></n-footer>
</div>

  
              `,

  data(){
    nomDuJeu = '';
    idCategorie = '';
    nombreDeJoueur = '';
    tempsDeJeu = '';
    ageMinimum = '';
    ageMaximum = '';
    regles = '';
    categories = [
        { id: 1, text: 'Jeu de plateau'},
        { id: 2, text: 'Jeu de pions'},
        { id: 3, text: 'Jeu de cartes'},
        { id: 4, text: 'Jeu de dés'},
    ];
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
  },
  methods:{
    ajouterRegle() {
        var bodyFormData = new FormData();
        bodyFormData.append('name', nomDuJeu);
        bodyFormData.append('picture', null);
        bodyFormData.append('categories', idCategorie);
        bodyFormData.append('nomber_of_player', nombreDeJoueur);
        bodyFormData.append('max_age', ageMaximum);
        bodyFormData.append('min_age', ageMinimum);
        bodyFormData.append('time', tempsDeJeu);
        bodyFormData.append('official_rule', regles);
      axios
          .post('http://localhost/tp/php/Utilitaires/Ajouter_un_jeu.php',
          bodyFormData,
          { headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }})
          .then(response => console.log(response))
    }
  }
});