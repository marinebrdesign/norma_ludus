var PasserPrenium = Vue.component('PasserPrenium',{
  template: `

<div>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Passer-Premimum</title>
  <link rel="stylesheet" href="../css/typographie_couleurs.css">
  <link rel="stylesheet" href="../css/menu.css">
  <link rel="stylesheet" href="../css/style_mise_en_page.css">
</head>
<body class=" ">
<header>
  <a href="Accueil.vue.js">
          <img src="img/logo.svg" alt="logo" id="logo">
  </a>
</header>
<main>
  <img src="img/footer_nav/vagues.png" alt="vagues" id="img_nav" class="responsive">
  <img src="img/footer_nav/ligne.png" alt="ligne" id="ligne" class="responsive">
  <div class="premium">
  <header>
    <h1>Norma Ludus Premium</h1>
    <div class="retour">
      <button><a href="javascript:history.go(-1)"><svg version="1.1" id="left_arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><g><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></g></g></svg></a></button>
    </div>
  </header>
  <p>Deviens toi aussi un abonné à <br>Norma Ludus Premium</p>
  <div class="avantages">
    <h2>Avantages exclusifs</h2>
    <div class="pas-pubs">
      <figure>
        <img src="img/premium/stop%20pubs.png" alt="pas-de-pub">
      </figure>
      <h3>Pas de pubs</h3>
      <p>Découvre toutes les règles des jeux de société sans interruptions</p>
    </div>
    <div class="regles-premium">
      <figure>
        <img src="img/premium/smiley.png" alt="smiley">
      </figure>
      <h3>Règles à volontés</h3>
      <p>Ajoutes autant de règles de jeux de société que tu souhaites</p>
    </div>
    <p>Pour seulement 0.99€ par mois sur Norma Ludus</p>
    <div class="demarrer-abonnement">
      <button><a href="">DÉMARRER MON ABONNEMENT NORMA LUDUS PREMIUM </a></button>
    </div>
  </div>
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
