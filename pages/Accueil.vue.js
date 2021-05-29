var Accueil = Vue.component('Accueil',{
    template: `
		<div>
			<h3>{{titre}}</h3>
			<n-header v-if="je_veux_le_header"></n-header>
			<ul>
			    <li v-for="nombre in liste" :key="nombre">{{nombre}}</li>
            </ul>
			<!--ul>
			    <li v-for="categorie in listeCategories" :key="categorie.ID_categorie">
			        <img src="www.quelquechose/{{categorie.ID_categorie}}"></img>
			        <span>{{categorie.Nom_Categorie}}</span>
			    </li>
            </ul-->
            <button v-on:click="je_veux_le_header = !je_veux_le_header">{{je_veux_le_header}}</button>
		</div>
	`,
    data(){
        return {
            titre: 'Page d\'accueil',
            liste: null,
            listeCategories: null,
            je_veux_le_header: false
        }
    },
    mounted(){
        /*axios.get('http://localhost/normaludus - Copie/php/Utilitaires/Produit.php').then((response) => {
            this.listeCategories = response.data;
        });*/
        this.liste = [1, 2, 3];
    },
    methods:{
    }
});




/*<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
    <script src="https://kit.fontawesome.com/6113af7c7c.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../css/typographie_couleurs.css">
    <link rel="stylesheet" href="../css/menu.css">
    <link rel="stylesheet" href="../css/style_mise_en_page.css">
</head>
<body class=" ">
<header>
    <a href="Accueil.html"><svg xmlns="http://www.w3.org/2000/svg" id="logo" viewBox="0 0 80.06 26.69"><defs><style>.cls-1,.cls-6{fill:#a8d9dc;}  .cls-2{fill:#e6eded;}  .cls-3{fill:#cae7e9;}  .cls-4,.cls-5,.cls-7{fill:#cf4c68;}  .cls-5{font-size:3.22px;font-family:TimesNewRomanPSMT, Times New Roman;letter-spacing:-0.06em;}  .cls-6{font-size:14px;font-family:Roboto-Bold, Roboto;font-weight:700;}  .cls-7{font-size:10px;font-family:Roboto-Regular, Roboto;font-weight:400;}  .cls-8{letter-spacing:-0.02em;}</style></defs><title>Logo</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-1" d="M15.71,23.09l-4.83,2a1.78,1.78,0,0,1-2.21-.72L.17,8.59a1.39,1.39,0,0,1,.76-2l4.82-2Z"/><path class="cls-1" d="M15.73,23.08l4.83-2a1.4,1.4,0,0,0,.76-2L12.81,3.31a1.78,1.78,0,0,0-2.21-.72l-4.82,2Z"/><path class="cls-1" d="M16.76,23.09l4.9,2a1.71,1.71,0,0,0,2.18-.71l8-15.75a1.44,1.44,0,0,0-.84-2l-4.9-2Z"/><path class="cls-1" d="M16.74,23.08l-4.9-2a1.45,1.45,0,0,1-.83-2L19,3.33a1.73,1.73,0,0,1,2.18-.71l4.9,2Z"/><path class="cls-2" d="M15.82,25.39l-6.12,0a1.9,1.9,0,0,1-1.92-1.83L7.4,2.05A1.81,1.81,0,0,1,9.25.23l6.12,0Z"/><path class="cls-3" d="M15.85,25.39l6.12,0a1.81,1.81,0,0,0,1.85-1.82L23.44,2.1A1.9,1.9,0,0,0,21.52.27L15.4.25Z"/><path class="cls-4" d="M19.65,13.11a2,2,0,0,0,.41-1.26,2.76,2.76,0,0,0-2.94-2.43,3.11,3.11,0,0,0-1.54.37,3.33,3.33,0,0,0-1.46-.33,2.61,2.61,0,0,0-2.84,2.42,2.12,2.12,0,0,0,.41,1.21h0l0,0a3.71,3.71,0,0,0,.56.56l3.48,3.47,3.46-3.57a2.59,2.59,0,0,0,.4-.41l.06-.07Z"/><ellipse class="cls-4" cx="21.7" cy="20.76" rx="0.91" ry="0.95" transform="translate(-4.13 36.09) rotate(-74.42)"/><ellipse class="cls-4" cx="9.69" cy="4.81" rx="0.91" ry="0.95" transform="translate(2.45 12.85) rotate(-74.42)"/><text class="cls-5" transform="matrix(1.03, 0, 0.02, 1, 8.55, 3.34)">A</text><text class="cls-5" transform="matrix(-1.03, 0, -0.02, -1, 23, 22.53)">A</text><text class="cls-6" transform="translate(34.04 11.98)">Norma <tspan class="cls-7"><tspan class="cls-8" x="0" y="12">L</tspan><tspan x="5.17" y="12">udus</tspan></tspan></text></g></g></svg></a>
    <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
        <div class="nav-toggle-bar"></div>
    </div>
    <nav class="menu">
        <svg xmlns="http://www.w3.org/2000/svg" id="logo" viewBox="0 0 80.06 26.69"><defs><style>.cls-1,.cls-6{fill:#a8d9dc;}.cls-2{fill:#e6eded;}.cls-3{fill:#cae7e9;}.cls-4,.cls-5,.cls-7{fill:#cf4c68;}.cls-5{font-size:3.22px;font-family:TimesNewRomanPSMT, Times New Roman;letter-spacing:-0.06em;}.cls-6{font-size:14px;font-family:Roboto-Bold, Roboto;font-weight:700;}.cls-7{font-size:10px;font-family:Roboto-Regular, Roboto;font-weight:400;}.cls-8{letter-spacing:-0.02em;}</style></defs><title>Logo</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-1" d="M15.71,23.09l-4.83,2a1.78,1.78,0,0,1-2.21-.72L.17,8.59a1.39,1.39,0,0,1,.76-2l4.82-2Z"/><path class="cls-1" d="M15.73,23.08l4.83-2a1.4,1.4,0,0,0,.76-2L12.81,3.31a1.78,1.78,0,0,0-2.21-.72l-4.82,2Z"/><path class="cls-1" d="M16.76,23.09l4.9,2a1.71,1.71,0,0,0,2.18-.71l8-15.75a1.44,1.44,0,0,0-.84-2l-4.9-2Z"/><path class="cls-1" d="M16.74,23.08l-4.9-2a1.45,1.45,0,0,1-.83-2L19,3.33a1.73,1.73,0,0,1,2.18-.71l4.9,2Z"/><path class="cls-2" d="M15.82,25.39l-6.12,0a1.9,1.9,0,0,1-1.92-1.83L7.4,2.05A1.81,1.81,0,0,1,9.25.23l6.12,0Z"/><path class="cls-3" d="M15.85,25.39l6.12,0a1.81,1.81,0,0,0,1.85-1.82L23.44,2.1A1.9,1.9,0,0,0,21.52.27L15.4.25Z"/><path class="cls-4" d="M19.65,13.11a2,2,0,0,0,.41-1.26,2.76,2.76,0,0,0-2.94-2.43,3.11,3.11,0,0,0-1.54.37,3.33,3.33,0,0,0-1.46-.33,2.61,2.61,0,0,0-2.84,2.42,2.12,2.12,0,0,0,.41,1.21h0l0,0a3.71,3.71,0,0,0,.56.56l3.48,3.47,3.46-3.57a2.59,2.59,0,0,0,.4-.41l.06-.07Z"/><ellipse class="cls-4" cx="21.7" cy="20.76" rx="0.91" ry="0.95" transform="translate(-4.13 36.09) rotate(-74.42)"/><ellipse class="cls-4" cx="9.69" cy="4.81" rx="0.91" ry="0.95" transform="translate(2.45 12.85) rotate(-74.42)"/><text class="cls-5" transform="matrix(1.03, 0, 0.02, 1, 8.55, 3.34)">A</text><text class="cls-5" transform="matrix(-1.03, 0, -0.02, -1, 23, 22.53)">A</text><text class="cls-6" transform="translate(34.04 11.98)">Norma <tspan class="cls-7"><tspan class="cls-8" x="0" y="12">L</tspan><tspan x="5.17" y="12">udus</tspan></tspan></text></g></g></svg>
        <img src="../img/menu/vagues%20haut.png" alt="vagues haut" id="vagues-haut-menu" class="responsive">
        <ul>
            <li><a href="Accueil.html">Accueil<i class="fas fa-chevron-right"></i></a></li>
            <li><a href="../acheter-jeux.html">Acheter des jeux<i class="fas fa-chevron-right"></i></a></li>
            <li><a href="../vendre-jeux.html">Vendre des jeux<i class="fas fa-chevron-right"></i></a></li>
            <li><a href="../mon-profil.html">Mon profil<i class="fas fa-chevron-right"></i></a></li>
            <li><a href="../mes-parametres.html">Mes paramètres<i class="fas fa-chevron-right"></i></a></li>
            <li><a href="../a-propos.html">À propos<i class="fas fa-chevron-right"></i></a></li>
        </ul>
        <img src="../img/menu/vagues%20bas.png" alt="vagues bas" id="vagues-bas-menu" class="responsive">
    </nav>
</header>
<main class="index">
    <header>
        <img src="../img/footer_nav/vagues.png" alt="vagues" id="img_nav" class="responsive">
        <img src="../img/footer_nav/ligne.png" alt="ligne" id="ligne" class="responsive">
        <form role="search">
            <div class="recherche">
                <label for="maRecherche"></label>
                <input type="search" id="maRecherche" name="q"
                       placeholder="Trouve un jeu !"/>
                <button><svg version="1.1" id="loupe" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.005 512.005" style="enable-background:new 0 0 512.005 512.005;" xml:space="preserve"><g><g><path d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587zM202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"/></g></g></svg></button>
            </div>
        </form>
        <div class="boutons">
            <div class="vendre-jeu">
                <button><a href="../vendre-jeux.html"><svg id="plus" height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt" xmlns="http://www.w3.org/2000/svg"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg></a></button>
            </div>
            <div class="notifications">
                <button><a href="../notifications.html"><svg version="1.1" id="notif" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M467.819,431.851l-36.651-61.056c-16.896-28.181-25.835-60.437-25.835-93.312V224c0-82.325-67.008-149.333-149.333-149.333S106.667,141.675,106.667,224v53.483c0,32.875-8.939,65.131-25.835,93.312l-36.651,61.056c-1.984,3.285-2.027,7.403-0.149,10.731c1.899,3.349,5.461,5.419,9.301,5.419h405.333c3.84,0,7.403-2.069,9.301-5.419C469.845,439.253,469.803,435.136,467.819,431.851z M72.171,426.667l26.944-44.907C118.016,350.272,128,314.219,128,277.483V224c0-70.592,57.408-128,128-128s128,57.408,128,128v53.483c0,36.736,9.984,72.789,28.864,104.277l26.965,44.907H72.171z"/></g></g><g><g><path d="M256,0c-23.531,0-42.667,19.136-42.667,42.667v42.667C213.333,91.221,218.112,96,224,96s10.667-4.779,10.667-10.667V42.667c0-11.776,9.557-21.333,21.333-21.333s21.333,9.557,21.333,21.333v42.667C277.333,91.221,282.112,96,288,96s10.667-4.779,10.667-10.667V42.667C298.667,19.136,279.531,0,256,0z"/></g></g><g><g><path d="M302.165,431.936c-3.008-5.077-9.515-6.741-14.613-3.819c-5.099,2.987-6.805,9.536-3.819,14.613c2.773,4.715,4.288,10.368,4.288,15.936c0,17.643-14.357,32-32,32c-17.643,0-32-14.357-32-32c0-5.568,1.515-11.221,4.288-15.936c2.965-5.099,1.259-11.627-3.819-14.613c-5.141-2.923-11.627-1.259-14.613,3.819c-4.715,8.064-7.211,17.301-7.211,26.731C202.667,488.085,226.581,512,256,512s53.333-23.915,53.376-53.333C309.376,449.237,306.88,440,302.165,431.936z"/></g></g></svg></a></button>
            </div>
        </div>
    </header>
    <div class="centrer">
        <div class="categories">
            <a href="../j-plateau.html">
                <section class="j-de-plateau">
                    <h2>Jeux de Plateau</h2>
                    <img src="../img/index/board-game.jpg" alt="plateau">
                </section>
            </a>
            <a href="../j-pions.html">
                <section class="j-pions">
                    <h2>Jeux de Pions</h2>
                    <img src="../img/index/chess-pieces.jpg" alt="échecs">
                </section>
            </a>
            <a href="../j-cartes.html">
                <section class="j-cartes">
                    <h2>Jeux de Cartes</h2>
                    <img src="../img/index/cartes.jpg" alt="cartes">
                </section>
            </a>
            <a href="../j-des.html">
                <section class="j-des">
                    <h2>Jeux de Dés</h2>
                    <img src="../img/index/dices.jpg" alt="dés">
                </section>
            </a>
        </div>
    </div>
</main>
<footer>
    <img src="../img/footer_nav/footer.png" alt="footer" id="footer" class="responsive">
    <div class="reseaux module-footer">
        <ul>
            <li><a href="https://www.instagram.com/normaludus/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="80" viewBox="0 0 24 24" fill="none" stroke="#250B55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <li><a href="https://www.facebook.com/norma.ludus/"><svg id="facebook" viewBox="-110 1 511 511.99996" xmlns="http://www.w3.org/2000/svg"><path d="m180 512h-81.992188c-13.695312 0-24.835937-11.140625-24.835937-24.835938v-184.9375h-47.835937c-13.695313 0-24.835938-11.144531-24.835938-24.835937v-79.246094c0-13.695312 11.140625-24.835937 24.835938-24.835937h47.835937v-39.683594c0-39.347656 12.355469-72.824219 35.726563-96.804688 23.476562-24.089843 56.285156-36.820312 94.878906-36.820312l62.53125.101562c13.671875.023438 24.792968 11.164063 24.792968 24.835938v73.578125c0 13.695313-11.136718 24.835937-24.828124 24.835937l-42.101563.015626c-12.839844 0-16.109375 2.574218-16.808594 3.363281-1.152343 1.308593-2.523437 5.007812-2.523437 15.222656v31.351563h58.269531c4.386719 0 8.636719 1.082031 12.289063 3.121093 7.878906 4.402344 12.777343 12.726563 12.777343 21.722657l-.03125 79.246093c0 13.6875-11.140625 24.828125-24.835937 24.828125h-58.46875v184.941406c0 13.695313-11.144532 24.835938-24.839844 24.835938zm-76.8125-30.015625h71.632812v-193.195313c0-9.144531 7.441407-16.582031 16.582032-16.582031h66.726562l.027344-68.882812h-66.757812c-9.140626 0-16.578126-7.4375-16.578126-16.582031v-44.789063c0-11.726563 1.191407-25.0625 10.042969-35.085937 10.695313-12.117188 27.550781-13.515626 39.300781-13.515626l36.921876-.015624v-63.226563l-57.332032-.09375c-62.023437 0-100.566406 39.703125-100.566406 103.609375v53.117188c0 9.140624-7.4375 16.582031-16.578125 16.582031h-56.09375v68.882812h56.09375c9.140625 0 16.578125 7.4375 16.578125 16.582031zm163.0625-451.867187h.003906zm0 0"/></svg></a>
            <li><a href="mailto:normaludus25@gmail.com"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M467,76H45C20.137,76,0,96.262,0,121v270c0,24.885,20.285,45,45,45h422c24.655,0,45-20.03,45-45V121C512,96.306,491.943,76,467,76z M460.698,106c-9.194,9.145-167.415,166.533-172.878,171.967c-8.5,8.5-19.8,13.18-31.82,13.18s-23.32-4.681-31.848-13.208C220.478,274.284,64.003,118.634,51.302,106H460.698z M30,384.894V127.125L159.638,256.08L30,384.894zM51.321,406l129.587-128.763l22.059,21.943c14.166,14.166,33,21.967,53.033,21.967c20.033,0,38.867-7.801,53.005-21.939l22.087-21.971L460.679,406H51.321z M482,384.894L352.362,256.08L482,127.125V384.894z"/></g></g></svg></a></li>
        </ul>
    </div>
    <a href="../mentions-legales.html">Mentions Légales</a>
    <p>Lena Bataillard - Nina Bellino - Marine Beurier</p>
</footer>
</body>
</html>*/