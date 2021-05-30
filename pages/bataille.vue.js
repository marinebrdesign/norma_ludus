var Bataille = Vue.component('Bataille',{
  template: `

<div>
<n-header></n-header>
<main class="index">
   <n-barre-recherche></n-barre-recherche>
  <div class="retour">
    <button><a href="javascript:history.go(-1)"><svg version="1.1" id="left_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></g></g></svg></a></button>
  </div>
  <div id="bataille-visit">
    <h3>La Bataille</h3>
    <!--<img src="img/jeux/cartes.jpg" alt="img-bataille">-->
    <div class="regle">
      <button><router-link to="">Règle</router-link></button>
      <ul>
        <li><h4>Nombre de joueurs</h4>2 ou plus</li>
        <li><h4>Âge</h4>2 et plus</li>
        <li><h4>Temps</h4>Environ 30 à 60 minutes</li>
        <li><h4>Règle</h4>Pour commencer il faut distribuer les 52 cartes du jeu aux joueurs qui les rassemblent en paquet devant eux. Chacun tire alors la carte du dessus de son paquet et la pose sur la table. Celui qui a la carte la plus forte ramasse les autres cartes. La carte la plus forte et l’As, suivi du roi, de la reine, du valet, du dix, du neuf,etc...
          Si deux joueurs posent en même temps deux cartes de la même valeur, il y a bataille. C’est-à-dire que les joueurs avec les mêmes cartes tirent la carte suivante et la posent, face cachée, sur la carte précédente. Puis ils tirent une deuxième carte qu'ils posent cette fois-ci face découverte et c'est cette dernière qui départagera les joueurs. Le gagnant du jeu est celui qui remporte les 52 cartes.</li>
      </ul>
      <div class="acheter">
        <button class="acheter-lien"><a href="https://www.amazon.fr/najayco-Cartes-Jouer-Playing-Cards/dp/B07P6M2ZGH/ref=sr_1_6?_encoding=UTF8&c=ts&dchild=1&keywords=Jeux+de+cartes&qid=1620663466&s=toys&sr=1-6&ts_id=363590031">Acheter ce jeu</a></button>
      </div>
    </div>
    <div class="variante">
      <button class="variante"><router-link href="">Variante</router-link></button>
      <p>Pièce touchée = pièce jouée. Une pièce que le joueur touche doit obligatoirement être jouée par ce dernier. Pour replacer une pièce sur l’échiquier sans avoir à la bouger, il faut dire “J’adoube“.
        Les prises sont obligatoires. En un mot, aux Dames, si vous pouvez manger des Pions (ou des Dames), vous êtes obligés de le faire !</p>
      <div class="ajouter-variante">
        <button class="ajouter-variante"><router-link to="ajouter-variante">Ajouter une variante</router-link></button>
      </div>
    </div>
  <div class="commentaire">
    <form id="commentaire" method="POST">
      <h2>Commentaires</h2>
      <label for="pseudo"></label>
      <input type="text" id="pseudo" name="pseudo" placeholder="Votre pseudo" /><br />
      <label for="votre_commentaire"></label>
      <textarea name="commentaire" id="votre_commentaire" placeholder="Votre commentaire..."></textarea><br />
      <input type="submit" id="poster_comm" value="Poster mon commentaire" name="submit_commentaire" />
    </form>
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