var Accueil = Vue.component('Accueil',{
    template: `
		<div>
			    <n-header></n-header>
		<div class="norma">
			  <main class="index">
    <n-barre-recherche></n-barre-recherche>
    <div class="centrer">
        <div class="categories">
            <router-link to="j-plateau">
                <section class="j-de-plateau">
                    <h2>Jeux de Plateau</h2>
                    <img src="img/index/board-game.jpg" alt="plateau">
                </section>
            </router-link>
            <router-link to="j-pions">
                <section class="j-pions">
                    <h2>Jeux de Pions</h2>
                    <img src="img/index/chess-pieces.jpg" alt="échecs">
                </section>
            </router-link>
            <router-link to="j-cartes">
                <section class="j-cartes">
                    <h2>Jeux de Cartes</h2>
                    <img src="img/index/cartes.jpg" alt="cartes">
                </section>
            </router-link>
            <router-link to="j-des">
                <section class="j-des">
                    <h2>Jeux de Dés</h2>
                    <img src="img/index/dices.jpg" alt="dés">
                </section>
            </router-link>
        </div>
    </div>
</main>
<n-footer></n-footer>
        </div>
		</div>
		
	`,

    data(){
        return {
        }
    },
    mounted(){
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
            <li><a href="../acheter-jeux.vue.js">Acheter des jeux<i class="fas fa-chevron-right"></i></a></li>
            <li><a href="../vendre-jeux.vue.js">Vendre des jeux<i class="fas fa-chevron-right"></i></a></li>
            <li><a href="../mon-profil.vue.js">Mon profil<i class="fas fa-chevron-right"></i></a></li>
            <li><a href="../mes-parametres.vue.js">Mes paramètres<i class="fas fa-chevron-right"></i></a></li>
            <li><a href="../a-propos.vue.js">À propos<i class="fas fa-chevron-right"></i></a></li>
        </ul>
        <img src="../img/menu/vagues%20bas.png" alt="vagues bas" id="vagues-bas-menu" class="responsive">
    </nav>
</header>

<footer>
    <img src="../img/footer_nav/footer.png" alt="footer" id="footer" class="responsive">
    <div class="reseaux module-footer">
        <ul>
            <li><a href="https://www.instagram.com/normaludus/"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="80" viewBox="0 0 24 24" fill="none" stroke="#250B55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <li><a href="https://www.facebook.com/norma.ludus/"><svg id="facebook" viewBox="-110 1 511 511.99996" xmlns="http://www.w3.org/2000/svg"><path d="m180 512h-81.992188c-13.695312 0-24.835937-11.140625-24.835937-24.835938v-184.9375h-47.835937c-13.695313 0-24.835938-11.144531-24.835938-24.835937v-79.246094c0-13.695312 11.140625-24.835937 24.835938-24.835937h47.835937v-39.683594c0-39.347656 12.355469-72.824219 35.726563-96.804688 23.476562-24.089843 56.285156-36.820312 94.878906-36.820312l62.53125.101562c13.671875.023438 24.792968 11.164063 24.792968 24.835938v73.578125c0 13.695313-11.136718 24.835937-24.828124 24.835937l-42.101563.015626c-12.839844 0-16.109375 2.574218-16.808594 3.363281-1.152343 1.308593-2.523437 5.007812-2.523437 15.222656v31.351563h58.269531c4.386719 0 8.636719 1.082031 12.289063 3.121093 7.878906 4.402344 12.777343 12.726563 12.777343 21.722657l-.03125 79.246093c0 13.6875-11.140625 24.828125-24.835937 24.828125h-58.46875v184.941406c0 13.695313-11.144532 24.835938-24.839844 24.835938zm-76.8125-30.015625h71.632812v-193.195313c0-9.144531 7.441407-16.582031 16.582032-16.582031h66.726562l.027344-68.882812h-66.757812c-9.140626 0-16.578126-7.4375-16.578126-16.582031v-44.789063c0-11.726563 1.191407-25.0625 10.042969-35.085937 10.695313-12.117188 27.550781-13.515626 39.300781-13.515626l36.921876-.015624v-63.226563l-57.332032-.09375c-62.023437 0-100.566406 39.703125-100.566406 103.609375v53.117188c0 9.140624-7.4375 16.582031-16.578125 16.582031h-56.09375v68.882812h56.09375c9.140625 0 16.578125 7.4375 16.578125 16.582031zm163.0625-451.867187h.003906zm0 0"/></svg></a>
            <li><a href="mailto:normaludus25@gmail.com"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M467,76H45C20.137,76,0,96.262,0,121v270c0,24.885,20.285,45,45,45h422c24.655,0,45-20.03,45-45V121C512,96.306,491.943,76,467,76z M460.698,106c-9.194,9.145-167.415,166.533-172.878,171.967c-8.5,8.5-19.8,13.18-31.82,13.18s-23.32-4.681-31.848-13.208C220.478,274.284,64.003,118.634,51.302,106H460.698z M30,384.894V127.125L159.638,256.08L30,384.894zM51.321,406l129.587-128.763l22.059,21.943c14.166,14.166,33,21.967,53.033,21.967c20.033,0,38.867-7.801,53.005-21.939l22.087-21.971L460.679,406H51.321z M482,384.894L352.362,256.08L482,127.125V384.894z"/></g></g></svg></a></li>
        </ul>
    </div>
    <a href="../mentions-legales.vue.js">Mentions Légales</a>
    <p>Lena Bataillard - Nina Bellino - Marine Beurier</p>
</footer>
</body>
</html>*/