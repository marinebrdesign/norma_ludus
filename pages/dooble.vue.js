var Dooble = Vue.component('Dooble',{
  template: `

<div>
<n-header></n-header>
<div class="norma">
<main class="index">
   <n-barre-recherche></n-barre-recherche>
  <div class="retour">
    <button><a href="javascript:history.go(-1)"><svg version="1.1" id="left_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></g></g></svg></a></button>
  </div>
  <div id="dooble-visit">
    <h3>Dooble</h3>
    <div class="img_visit_regle">
        <img src="img/dooble.jpg" alt="img-dooble">
    </div>
    <div class="regle">
    <div class="b_regles_variante">
          <button>Règle</button>
    </div>
      <ul>
        <li><h4>Nombre de joueurs</h4>2 à 5</li>
        <li><h4>Âge</h4>4 et plus</li>
        <li><h4>Temps</h4>Environ 5 à 15 minutes</li>
        <li><h4>Règle</h4>Quand une partie commence, tous les joueurs jouent en même temps. Il faut être le plus rapide à repérer le symbole identique entre 2 cartes. Une fois trouvé, il faut le nommer à haute voix. Enfin  prendre la carte, la poser ou la défausser.
          <br>Distribuez <strong>une carte à chaque joueur</strong> qu’il conserve <strong>face cachée</strong>. Placez les cartes restantes au milieu. Elles constitueront la pioche. <strong>Pour gagner</strong> il faut récupérer le plus de cartes. Au top départ les joueurs retournent leur carte. Les joueurs doivent alors trouver le symbole identique entre leur carte et celle posée au centre de la table (sur la pile). Dès qu’un joueur trouve un symbole identique il le nomme, puis s’empare de la carte concernée et enfin la pose devant lui sur sa carte. En prenant cette carte, une nouvelle carte centrale est ainsi révélée. La partie continue jusqu’à ce que toutes les cartes de la pioche aient été récupérées. Le jeu s’arrête dès que toutes les cartes de la pioche ont été récupérées.
        </li>
      </ul>
      <div class="acheter">
        <button class="acheter-lien"><a href="https://www.amazon.fr/Asmodee-DOBB01FR-Jeu-dambiance-Dobble/dp/B0031QBHMA/ref=sxin_6_ac_d_rm?ac_md=0-0-ZG91Ymxl-ac_d_rm&cv_ct_cx=double&dchild=1&keywords=double&pd_rd_i=B0031QBHMA&pd_rd_r=911e00db-f882-49a7-86c2-27dbf42525c7&pd_rd_w=9OHCY&pd_rd_wg=GCWTt&pf_rd_p=23697e12-427b-4c87-811a-81f5f8851641&pf_rd_r=5B1CNRSERC66X8X47WFA&psc=1&qid=1620664324&sr=1-1-fe323411-17bb-433b-b2f8-c44f2e1370d4">Acheter ce jeu</a></button>
      </div>
    </div>
    <div class="variante">
      <div class="b_regles_variante">
          <button class="variante">Variante</button>
      </div>
        <ul>
          <li>
            <h4>Les différents villages</h4>
            Les joueurs sont séparés en plusieurs villages. Les habitants des différents villages peuvent venir dans les villages voisins quand le Maître du jeu le décide.
          </li>
          <li>
            <h4>Le panneau du village</h4>
            Chaque jour les habitants peuvent écrire sur un bout de papier des soupçons, découverte, mensonge pour tromper l'ennemi, etc… Les textes sont affichés dans le désordre quand la nuit tombe.
          </li>
        </ul>
      <div class="ajouter-variante">
        <button class="ajouter-variante"><router-link to="ajouter-variante">Ajouter une variante</router-link></button>
      </div>
    </div>
  </div>
  <div class="commentaire">
    <form id="commentaire">
      <h2>Commentaires</h2>
      <label for="pseudo"></label>
      <input type="text" id="pseudo" name="pseudo" placeholder="Votre pseudo"/><br/>
      <label for="votre_commentaire"></label>
      <textarea name="commentaire" id="votre_commentaire"  placeholder="Votre commentaire..."></textarea><br/>
      <input type="submit" id="poster_comm"  value="Poster mon commentaire" name="submit_commentaire"/>
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