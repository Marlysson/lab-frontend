
//Triggers close
close_modal_add = document.querySelector(".add_item");
close_modal_detalhe = document.querySelector(".detalhe_item");

//Triggers action
btn_add = document.querySelector(".add-product-js");
show_produto_js = document.querySelectorAll(".show_produto_js");

//Target itens
modal_add_item = document.querySelector(".modal-add-item");
modal_detalhe_item = document.querySelector(".modal-detalhe-item");

function show_modal(){
	this.classList.add("modal-visible");
}

function hidden_modal(modal){
	this.classList.remove("modal-visible");
}

btn_add.addEventListener("click",show_modal.bind(modal_add_item));
close_modal_add.addEventListener("click",hidden_modal.bind(modal_add_item));

show_produto_js.forEach(function(elemento,indice){
	elemento.addEventListener("click",show_modal.bind(modal_detalhe_item));
});

close_modal_detalhe.addEventListener("click",hidden_modal.bind(modal_detalhe_item))