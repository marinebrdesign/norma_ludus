var LoupGarou = Vue.component('LoupGarou',{
  template: `

<div>
<n-header></n-header>
<main class="index">
    <n-barre-recherche></n-barre-recherche>
  <div class="retour">
    <button><a href="javascript:history.go(-1)"><svg version="1.1" id="left_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></g></g></svg></a></button>
  </div>
  <div id="loup-garou-visit">
    <h3>Bataille</h3>
    <img src="" alt="img-bataille">
    <div class="regle">
      <button><router-link to="">Règle</router-link></button>
      <ul>
        <li><h4>Nombre de joueurs</h4>6 à 24</li>
        <li><h4>Âge</h4>Â partir de 10 ans</li>
        <li><h4>Temps</h4>Environ 30 à 45 minutes</li>
        <li><h4>Règle</h4>Le but du jeu pour les Loup garous est de tuer tous les villageois. Et pour les villageois de tuer tous les loups garous.<br>
          Les loups garous : Chaque nuit, ils choisissent un Villageois pour le tuer. Le jour, ils doivent cacher leur rôle pour échapper à la revanche des habitants du village.<br>
          Les villageois = Il n’ont pas de pouvoir, il participe juste le jour pour démasquer les loups garous. <br>
          La voyante : Chaque nuit, elle choisit la carte d’un des joueurs pour découvrir sa réelle identité. Elle peut ensuite aider les autres Villageois le jour, mais elle doit rester discrète pour ne pas être démasquée par les Loups-Garous.<br>
          Le chasseur = Il a le droit à une dernière volonté avant sa mort. Il a le droit de tirer un coup de fusil pour emmener avec lui quelqu’un dans sa tombe. Le joueur visé par le chasseur est donc aussi éliminé.<br>
          Cupidon : La première nuit et seulement celle là il fait tomber deux joueurs amoureux qui ne seront pas séparés par la mort car si l’un des deux tourtereaux succombe au griffes des loups garous ou au fourches des villageois alors son âme sœur meurt avec lui. Cupidon peut se désigner comme l’un des deux Amoureux. Un amoureux ne doit jamais faire du mal à son prétendant, même pour bluffer les autres joueurs.<br>
          La sorcière : Au début de la partie la sorcière possède deux potions très puissante. Une potion de guérison, pour ressusciter le joueur tué par les Loups-Garous, une potion d’empoisonnement, utilisée la nuit pour éliminer un joueur. La Sorcière doit utiliser chaque potion 1 seule fois dans la partie. Elle peut se servir des ses 2 potions la même nuit. Le matin suivant l’usage de ce pouvoir, il pourra donc y avoir soit 0 mort, 1 mort ou 2 morts. La Sorcière peut utiliser les potions à son profit, et donc se guérir elle-même si elle vient d’être attaquée par les Loups-Garous.<br>
          La Petite Fille : elle peut, en entrouvrant les yeux, espionner les Loups-Garous pendant leur réveil. Si elle se fait surprendre par un des Loups-Garous, elle meurt immédiatement (en silence), à la place de la victime désignée. La Petite Fille ne peut espionner que la nuit, durant le tour d’éveil des Loups-Garous. Elle n’a pas le droit de se faire passer pour un Loup-Garou et d’ouvrir grand les yeux.<br>
          Le maire du village : Cette carte est confiée à un des joueurs, en plus de sa carte personnage. Le Capitaine est élu par vote, à la majorité relative. On ne peut refuser l’honneur d’être Capitaine. Dorénavant, les votes de ce joueur comptent pour 2 voix. Si ce joueur se fait éliminer, dans son dernier souffle il désigne son successeur.<br>
          Le voleur : Si on veut jouer le Voleur, il faut ajouter deux cartes Simples Villageois en plus de toutes celles déjà choisies. Après la distribution, les deux cartes non distribuées sont placées au centre de la table face cachée. La première nuit, le Voleur pourra prendre connaissance de ces deux cartes, et échanger sa carte contre une des deux autres. Si ces cartes sont deux Loups-Garous, il est obligé d’échanger sa carte contre un des deux Loups-Garous. Il jouera désormais ce personnage jusqu’à la fin de la partie.<br>
          <br>Distribution conseillé :
          <table>
            <tr>
              <td>Nombre de joueurs</td>
              <td>Loup Garous</td>
              <td>Villageois et cartes spéciales</td>
            </tr>
            <tr>
              <td>8</td>
              <td>2</td>
              <td>5</td>
            </tr>
            <tr>
              <td>9</td>
              <td>2</td>
              <td>6</td>
            </tr>
            <tr>
              <td>10</td>
              <td>2</td>
              <td>7</td>
            </tr>
            <tr>
              <td>11</td>
              <td>2</td>
              <td>8</td>
            </tr>
            <tr>
              <td>12</td>
              <td>3</td>
              <td>9</td>
            </tr>
            <tr>
              <td>13</td>
              <td>3</td>
              <td>9</td>
            </tr>
            <tr>
              <td>14</td>
              <td>3</td>
              <td>10</td>
            </tr>
            <tr>
              <td>15</td>
              <td>3</td>
              <td>11</td>
            </tr>
          </table>
          <br>Les joueurs désignent ou tirent au sort un meneur de jeu qui ne joue pas, mais dirige la partie. Pour les premières parties, quelqu’un qui connaît bien le jeu ou celui qui a déchiffré la règle ou un habile meneur de groupe sera le plus à même de restituer la meilleure ambiance.
          <br>Le meneur de jeu distribue à chaque joueur 1 carte personnage face cachée. Chaque joueur regarde discrètement son personnage, puis repose sa carte face cachée devant lui.
          <br>Enfin Le meneur endort le village. Le meneur dit : “C’est la nuit, tout le village s’endort, les joueurs ferment les yeux”.
          <br>Tous les joueurs baissent la tête et ferment les yeux.
          <br>Puis selon le choix des personnages en jeu, le meneur appelle les différents personnages.
          <br>Ordre d’apparitions des personnages :
          <br>Le meneur appelle le Voleur.
          <br>Le meneur dit “le Voleur se réveille !” Le joueur qui possède la carte Voleur ouvre les yeux et regarde discrètement les deux cartes cachées au milieu, puis change éventuellement de personnage. Le meneur dit “Le Voleur se rendort”. Le voleur referme les yeux.
          <br>Le meneur appelle Cupidon.
          <br>Le meneur dit “Cupidon se réveille !” Cupidon ouvre les yeux et désigne deux joueurs (dont éventuellement lui-même).
          <br>Le meneur fait le tour de la table et touche discrètement le dos des deux Amoureux. Le meneur dit : “ Cupidon se rendort ”. Cupidon referme les yeux.
          <br>Le meneur appelle les Amoureux.
          <br>Le meneur dit “les Amoureux se réveillent, se reconnaissent, et se rendorment !” Ils ne se montrent pas leur carte de sorte que chacun ignore la véritable personnalité de l’être aimé. Puis le meneur suit le tour normal.
          <br>Le meneur appelle les Loups-Garous
          <br>Le meneur dit : “les Loups-Garous se réveillent, se reconnaissent et désignent une nouvelle victime !!!”. Les Loups-Garous (et eux seulement) lèvent la tête, ouvrent les yeux, se concertent silencieusement et désignent une victime. Durant ce tour, la Petite Fille peut espionner les Loups-Garous en entrouvrant les yeux discrètement. Elle n’y est pas obligée. Elle n’a pas le droit d’ouvrir les yeux en grand. Si elle se fait prendre, les Loups-Garous ont le droit de changer d’avis et elle meurt à la place de la victime éventuellement choisie. Le meneur dit : “les Loups-Garous repus se rendorment et rêvent de prochaines victimes savoureuses !”. Les Loups-Garous ferment les yeux.
          <br>Le meneur appelle la Sorcière
          <br>Le meneur dit : “la Sorcière se réveille, je lui montre la victime des Loups-Garous. Va-t-elle user de sa potion de guérison, ou d’empoisonnement ?” Le meneur montre à la Sorcière la victime des Loups-Garous. La Sorcière n’est pas obligée d’user de son pouvoir à un tour spécifique. Si elle utilise une potion, elle doit désigner au meneur sa cible avec le pouce tendu vers le haut pour la guérison, ou vers le bas pour l’empoisonnement. Le meneur révélera son effet éventuel le matin suivant.
          <br>Le meneur réveille tout le village
          <br>Le meneur dit : “c’est le matin, le village se réveille, tout le monde se réveille et ouvre les yeux…”Le meneur désigne alors le ou les joueurs qui ont été victimes des Loups- Garous ou de la Sorcière durant la nuit.
          <br>Ce ou ces joueurs révèlent leur carte car ils sont éliminés du jeu. Il ne pourront plus communiquer avec les autres joueurs de quelque manière que ce soit.
          <ul>
            <li>- Si un de ces joueurs est le Chasseur, il doit répliquer et éliminer immédiatement un autre joueur de son choix.</li>
            <li>- Si un des joueurs est l’ Amoureux, l’autre Amoureux meurt de chagrin immédiatement.</li>
            <li>- Si un des joueurs est Capitaine, il désigne son successeur.</li>
          </ul>
          <br>Le village débat des suspects
          <br>Le meneur anime et relance les débats.
          <br>Un bruit suspect pendant la nuit, un comportement bizarre par rapport à un autre joueur, ou une façon de voter toujours identique de certains Villageois : voici des exemples d’indices qui peuvent laisser suspecter certains joueurs d’être Loups-Garous.
          <br>Au cours de cette phase il ne faut pas perdre de vue que les objectifs de chacun sont différents :
          <ul>
            <li>- Chaque Villageois tente de démasquer un Loup-Garou et de faire voter contre lui.</li>
            <li>- Les Loups-Garous doivent se faire passer pour des Villageois.</li>
            <li>- La Voyante ainsi que la Petite Fille doivent aider les autres Villageois, mais sans mettre trop tôt leur vie en danger en exposant leur identité.</li>
            <li>- Les Amoureux doivent se protéger l’un l’autre.</li>
          </ul>
          <br>Chacun a le droit de se faire passer pour un autre. Cette phase est le cœur du jeu. Faites briller vos talents de tribun, bluffez ou dites la vérité, mais soyez toujours crédibles.
          <br>Croyez-nous, on finit toujours par se dévoiler d’une façon ou d’une autre, et les soupçons finissent toujours par tomber juste. Enfin, presque toujours !
          <br>Le village vote
          <br>Les joueurs doivent éliminer un joueur suspecté d’être un Loup-Garou.
          <br>Au signal du meneur, chaque joueur pointe son doigt dans la direction du joueur qu’il souhaite éliminer.
          <br>Le joueur qui a la majorité des voix est éliminé. La voix du Capitaine compte double. En cas d’égalité, s’il est présent, le vote du Capitaine désigne la victime.
          <br>Sinon, les joueurs votent à nouveau pour départager les ex-æquo (y compris les joueurs en cause).
          <br>S’il y a toujours égalité, aucun joueur n’est éliminé.
          <br>Le joueur éliminé révèle sa carte et ne pourra plus communiquer avec les autres joueurs d’aucune manière.
          <br>Le village s’endort
          <br>Le meneur dit : “c’est la nuit, les survivants se rendorment !”, les joueurs referment les yeux. (Les joueurs éliminés se taisent, surtout quand ils découvrent qui sont vraiment les Loups-Garous…).
          <br>Le jeu reprend au début du tour normal, étape 1.
        </li>
      </ul>
      <div class="acheter">
        <button class="acheter-lien"><a href="https://www.amazon.fr/Asmodee-Loups-Garous-Thiercelieux-LMELG01FR-Dambiance/dp/B07PQM7D5W/ref=sr_1_2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1QD0PW2I2XUIY&dchild=1&keywords=loup+garou+de+thiercelieux&qid=1620664363&s=toys&sprefix=loup+garou+de+%2Ctoys%2C159&sr=1-2">Acheter ce jeu</a></button>
      </div>
    </div>
    <div class="variante">
      <button class="variante"><router-link to="">Variante</router-link></button>
      <ul>
        <li><h4>Les différents villages</h4> Les joueurs sont séparés en plusieurs villages. Les habitants des différents villages peuvent venir dans les villages voisins quand le Maître du jeu le décide.</li>
        <li><h4>Le panneau du village</h4> Chaque jour les habitants peuvent écrire sur un bout de papier des soupçons, découverte, mensonge pour tromper l'ennemi, etc… Les textes sont affichés dans le désordre quand la nuit tombe. </li>
      </ul>
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
