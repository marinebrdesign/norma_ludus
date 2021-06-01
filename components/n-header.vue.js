var NHeader = Vue.component('n-header',{
    template: `
        <div>
<header>
    <router-link to="/Accueil">
    <img src="img/logo.svg" alt="logo" id="logo">
    </router-link>
    <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
        <div class="nav-toggle-bar"></div>
    </div>
    <nav class="menu">
        <img src="img/logo.svg" alt="logo" id="logo">
        <img src="img/menu/vagues%20haut.png" alt="vagues haut" id="vagues-haut-menu" class="responsive">
        <ul>
            <li><router-link to="/accueil" onclick="document.documentElement.classList.toggle('menu-open')">Accueil<i class="fas fa-chevron-right"></i></router-link></li>
            <li><router-link to="/acheter-jeux" onclick="document.documentElement.classList.toggle('menu-open')">Acheter des jeux<i class="fas fa-chevron-right"></i></router-link></li>
            <li><router-link to="/vendre-jeux" onclick="document.documentElement.classList.toggle('menu-open')">Vendre des jeux<i class="fas fa-chevron-right"></i></router-link></li>
            <li><router-link to="/mon-profil" onclick="document.documentElement.classList.toggle('menu-open')">Mon profil<i class="fas fa-chevron-right"></i></router-link></li>
            <li><router-link to="/mes-parametres" onclick="document.documentElement.classList.toggle('menu-open')">Mes paramètres<i class="fas fa-chevron-right"></i></router-link></li>
            <li><router-link to="/a-propos" onclick="document.documentElement.classList.toggle('menu-open')">À propos<i class="fas fa-chevron-right"></i></router-link></li>
        </ul>
        <img src="img/menu/vagues%20bas.png" alt="vagues bas" id="vagues-bas-menu" class="responsive">
    </nav>
</header>

		</div>
	`,
    data(){
        return{
            logo:null

        }
    },
    mounted(){
       /* axios.get('/img/logo.svg').then((response) => {
            this.logo = response.data;
        });*/
    },
    methods:{
    }
});
