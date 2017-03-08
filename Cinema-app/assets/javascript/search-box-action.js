
var action_search = document.querySelector('.search');
var box_search = document.querySelector('.box-search');

action_search.addEventListener('click',function(event){
	box_search.classList.toggle('box-search-active');
	
	box_search.querySelector('.input-search').focus();
});