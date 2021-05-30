var NHeader = Vue.component('n-header',{
    template: `
        <div>
            <h1>Header</h1>
            <span>Je mets ce que je veux ici</span>
		</div>
	`,
    data(){
        return{
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
