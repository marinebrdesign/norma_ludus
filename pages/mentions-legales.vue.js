var MentionsLegales = Vue.component('MentionsLegales',{
    template: `

<div>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mentions Légales</title>
    <link rel="stylesheet" href="../css/typographie_couleurs.css">
    <link rel="stylesheet" href="../css/menu.css">
    <link rel="stylesheet" href="../css/style_mise_en_page.css">
</head>
<body class=" ">
<main>
    <div class="mentions-legales">
    <header>
        <h1>Mentions Légales</h1>
        <div class="croix">
            <button><a href="javascript:history.go(-1)"><svg version="1.1" id="croix" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22.88 22.88" style="enable-background:new 0 0 22.88 22.88;" xml:space="preserve"><path style="fill:#1E201D;" d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z"/></svg></a></button>
        </div>
    </header>
    <p><h3>En vigueur au 7 / 6/ 21</h3>
    <p>Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des Utilisateurs du site normaludus.fr les présentes mentions légales.
        La connexion et la navigation sur le site (indiquer le nom du site) par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.
        Ces dernières sont accessibles sur le site à la rubrique « Mentions légales ».</p>
    <h3>ARTICLE 1 : L’éditeur</h3>
    <p>L’édition et la direction de la publication du site normaludus.fr est assurée par l’équipe de Norma Ludus domiciliée 4 Place Tharradin, 25200 Montbéliard, dont le numéro de téléphone est 03 81 99 47 34, et l'adresse e-mail normaludus25@gmail.com.</p>
    <h3>ARTICLE 2 : L’hébergeur</h3>
    <p>L'hébergeur du site normaludus.fr est la Société Infomaniak, dont le siège social est situé au Rue Eugène-Marziano 25, 1227 Genève, Suisse , avec le numéro de téléphone : +41 22 820 35 44.</p>
    <h3>ARTICLE 3 : Accès au site</h3>
    <p>Le site est accessible par tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.
        En cas de modification, interruption ou suspension des services le site normaludus.fr ne saurait être tenu responsable.</p>
    <h3>ARTICLE 4 : Collecte des données</h3>
    <p>Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs.</p>
    <h3>ARTICLE 5 : Cookies</h3>
    <p>L’Utilisateur est informé que lors de ses visites sur le site, un cookie peut s’installer automatiquement sur son logiciel de navigation.
        En naviguant sur le site, il les accepte.
        Un cookie est un élément qui ne permet pas d’identifier l’Utilisateur mais sert à enregistrer des informations relatives à la navigation de celui-ci sur le site Internet. L’Utilisateur pourra désactiver ce cookie par l’intermédiaire des paramètres figurant au sein de son logiciel de navigation.</p>
    <h3>ARTICLE 6 : Propriété intellectuelle</h3>
    <p>Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site normaludus.fr,  sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
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
