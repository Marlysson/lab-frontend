
var model = new Vue({
	el:"#app",
	data:{
		acao : "Cadastrar",
		
		produtos:[
			{
				cod:1,
				nome:"Copo plástico",
				preco:0.30.toFixed(2),
				categoria:"Cozinha",
				validade:"09/08/2018"
			},
			{
				cod:2,
				nome:"Caneta",
				preco:1.20.toFixed(2),
				categoria:"Papelaria",
				validade:"10/12/2042"},
			{
				cod:3,
				nome:"Papel A4",
				preco:20.00.toFixed(2),
				categoria:"Papelaria",
				validade:"01/01/2050"
			}],

			nome : '',
			preco :'',
			validade:'',
			categoria:''
	},

	methods :{
		cadastrar : function(event){
			event.preventDefault();

			produto = {
				nome : this.nome,
				preco : this.preco,
				validade : this.validade,
				categoria : this.categoria
			}

			this.produtos.push(produto);

			this.nome = '';
			this.preco = '';
			this.validade = '';
			this.categoria = '';
		
			document.querySelector(".modal-add-item").classList.remove("modal-visible");
		},

		editar : function(produto){

			this.acao = "Editar";

			this.nome = produto.nome;
			this.categoria = produto.categoria;
			this.preco = produto.preco;
			this.validade = produto.validade;

			document.querySelector(".modal-add-item").classList.add("modal-visible");
			
		},

		show: function(produto){

			this.nome = produto.nome;
			this.categoria = produto.categoria;
			this.preco = produto.preco;
			this.validade = produto.validade;

		},

		remover : function(produto){
			indice = this.produtos.indexOf(produto);
			this.produtos.splice(indice,1);
		},

		filterByCod : function(id_produto){

			produto = this.produtos.filter(function(elemento){
				return elemento.cod == id_produto;
			});

			return produto[0];
		},


	}
})