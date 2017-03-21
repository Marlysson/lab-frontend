
var model = new Vue({
	el:"#product-list",
	data:{
		produtos:[
			{
				cod:1,
				nome:"Copo plástico",
				valor:0.30,
				categoria:"Cozinha",
				validade:"09/08/2018"
			},
			{
				cod:2,
				nome:"Caneta",
				valor:1.20,
				categoria:"Papelaria",
				validade:"10/12/2042"},
			{
				cod:3,
				nome:"Papel A4",
				valor:20.00,
				categoria:"Papelaria",
				validade:"01/01/2050"
			}]
	}
})