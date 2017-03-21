valor_padrao = "Buscar";

search = document.querySelector(".input-search");
search.value = valor_padrao;

search.addEventListener("click",function(event){
	if (this.value === valor_padrao){
		this.value = '';
	}
});

search.addEventListener("focusout",function(){
	if (this.value === ''){
		this.value = valor_padrao;
	}
});