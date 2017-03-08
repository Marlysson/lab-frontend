
var ranking_item = document.querySelectorAll('.ranking_product');

ranking_item.forEach(function(content,index){

	if (content.textContent < 2.5){
		content.style.color = '#d25e5e';	
	}else{
		content.style.color = '#27a293';
	}
});