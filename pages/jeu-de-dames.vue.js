var JeuDeDames = Vue.component('JeuDeDames',{
  template: `

<div>
<n-header></n-header>
<div class="norma">
<main class="index">
    <n-barre-recherche></n-barre-recherche>
  <div class="retour">
    <button><a href="javascript:history.go(-1)"><svg version="1.1" id="left_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></g></g></svg></a></button>
  </div>
  <div id="jeu-dames-visit">
    <h3>Jeu de dames</h3>
     <div class="img_visit_regle">
        <img src="img/jeu_dames.jpg" alt="img-jeu_dames">
    </div>
    <div class="regle">
    <div class="b_regles_variante">
            <button>Règle</button>
    </div>      
    <ul>
        <li><h4>Nombre de joueurs</h4>2</li>
        <li><h4>Âge</h4>6 et plus</li>
        <li><h4>Temps</h4>Environ 30 à 60 minutes</li>
        <li><h4>Règle</h4>Il n’existe que deux types de pièces aux Dames : Les Pions et les Dames. Les Pions sont composés d’un pièces, les dames de deux pièces empilées.
          <br>Les déplacements des pions :
          Il se déplace diagonalement d’une seule case libre. Le Pion ne recule pas sauf pour attraper un pion de l’adversaire. Lorsqu’il atteint la dernière rangée (la dernière ligne horizontale), il devient une Dame. Placez un Pion capturé par l’adversaire sur le pion qui est devenu un Dame. Lorsque le Pion est promu Dame, c’est au Tour de l’adversaire.
          <br>Les déplacements des pions :
          Elle avance diagonalement d’autant que cases qu’elle désire. Elle peut avancer et reculer.
        </li>
      </ul>
      <div class="acheter">
        <button class="acheter-lien"><a href="https://www.amazon.fr/speelight-goed-150236-damspiel-puzzles/dp/B004T7OYI4/ref=sr_1_7?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=jeu+de+dames&qid=1620664421&s=toys&sr=1-7">Acheter ce jeu</a></button>
      </div>
    </div>
    <div class="variante">
    <div class="b_regles_variante">
          <button class="variante">Variante</button>
    </div>             
    <p>Pièce touchée = pièce jouée. Une pièce que le joueur touche doit obligatoirement être jouée par ce dernier. Pour replacer une pièce sur l’échiquier sans avoir à la bouger, il faut dire “J’adoube“.
       Les prises sont obligatoires. En un mot, aux Dames, si vous pouvez manger des Pions (ou des Dames), vous êtes obligés de le faire !</p>
    <div class="ajouter-variante">
            <button class="ajouter-variante"><router-link to="ajouter-variante">Ajouter une variante</router-link></button>
     </div>    
    </div>
  </div>
  <div class="commentaire">
    <form id="commentaire">
      <h2>Commentaires</h2>
      <label for="pseudo"></label>
      <input type="text" id="pseudo" name="pseudo" placeholder="Votre pseudo" /><br />
      <label for="votre_commentaire"></label>
      <textarea name="commentaire" id="votre_commentaire" placeholder="Votre commentaire..."></textarea><br />
      <input type="submit" id="poster_comm" value="Poster mon commentaire" name="submit_commentaire" />
    </form>
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
