var MDPOublie = Vue.component('MDPOublie',{
    template: `

<div>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mot de passe oublié</title>
    <link rel="stylesheet" href="../css/typographie_couleurs.css">
    <link rel="stylesheet" href="../css/menu.css">
    <link rel="stylesheet" href="../css/style_mise_en_page.css">
</head>
<body class="mdp-oublie">
<img src="img/footer_nav/haut_connexion.png" alt="haut_png" id="haut_connexion" class="responsive">
<svg xmlns="http://www.w3.org/2000/svg" id="logo" viewBox="0 0 80.06 26.69"><defs><style>.cls-1,.cls-6{fill:#a8d9dc;}.cls-2{fill:#e6eded;}.cls-3{fill:#cae7e9;}.cls-4,.cls-5,.cls-7{fill:#cf4c68;}.cls-5{font-size:3.22px;font-family:TimesNewRomanPSMT, Times New Roman;letter-spacing:-0.06em;}.cls-6{font-size:14px;font-family:Roboto-Bold, Roboto;font-weight:700;}.cls-7{font-size:10px;font-family:Roboto-Regular, Roboto;font-weight:400;}.cls-8{letter-spacing:-0.02em;}</style></defs><title>Logo</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-1" d="M15.71,23.09l-4.83,2a1.78,1.78,0,0,1-2.21-.72L.17,8.59a1.39,1.39,0,0,1,.76-2l4.82-2Z"/><path class="cls-1" d="M15.73,23.08l4.83-2a1.4,1.4,0,0,0,.76-2L12.81,3.31a1.78,1.78,0,0,0-2.21-.72l-4.82,2Z"/><path class="cls-1" d="M16.76,23.09l4.9,2a1.71,1.71,0,0,0,2.18-.71l8-15.75a1.44,1.44,0,0,0-.84-2l-4.9-2Z"/><path class="cls-1" d="M16.74,23.08l-4.9-2a1.45,1.45,0,0,1-.83-2L19,3.33a1.73,1.73,0,0,1,2.18-.71l4.9,2Z"/><path class="cls-2" d="M15.82,25.39l-6.12,0a1.9,1.9,0,0,1-1.92-1.83L7.4,2.05A1.81,1.81,0,0,1,9.25.23l6.12,0Z"/><path class="cls-3" d="M15.85,25.39l6.12,0a1.81,1.81,0,0,0,1.85-1.82L23.44,2.1A1.9,1.9,0,0,0,21.52.27L15.4.25Z"/><path class="cls-4" d="M19.65,13.11a2,2,0,0,0,.41-1.26,2.76,2.76,0,0,0-2.94-2.43,3.11,3.11,0,0,0-1.54.37,3.33,3.33,0,0,0-1.46-.33,2.61,2.61,0,0,0-2.84,2.42,2.12,2.12,0,0,0,.41,1.21h0l0,0a3.71,3.71,0,0,0,.56.56l3.48,3.47,3.46-3.57a2.59,2.59,0,0,0,.4-.41l.06-.07Z"/><ellipse class="cls-4" cx="21.7" cy="20.76" rx="0.91" ry="0.95" transform="translate(-4.13 36.09) rotate(-74.42)"/><ellipse class="cls-4" cx="9.69" cy="4.81" rx="0.91" ry="0.95" transform="translate(2.45 12.85) rotate(-74.42)"/><text class="cls-5" transform="matrix(1.03, 0, 0.02, 1, 8.55, 3.34)">A</text><text class="cls-5" transform="matrix(-1.03, 0, -0.02, -1, 23, 22.53)">A</text><text class="cls-6" transform="translate(34.04 11.98)">Norma <tspan class="cls-7"><tspan class="cls-8" x="0" y="12">L</tspan><tspan x="5.17" y="12">udus</tspan></tspan></text></g></g></svg>
<div class="centrer">
    <div id="container">
        <div class="mdp-oublie">
            <p><b>Vous avez oublié votre mot de passe ?</b> <br>
                Entrez votre adresse mail ou votre identifiant et nous vous enverrons un lien pour récupérer votre compte </p><label for="mdp-o"></label>
            <input type="text" id="mdp-o" placeholder="Identifiant ou E-mail " name="username" required>
            <div class="mdp-o">
                <button class="mdp-o"
                        type="submit">
                    Suivant
                </button>
            </div>
        </div>
    </div>
</div>
<footer>
    <img src="img/footer_nav/bas_connexion.png" alt="bas_png" id="bas_connexion" class="responsive">
</footer>
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
