
var legend = document.querySelectorAll('.item-legend');

legend.forEach(function(element,index){
	element.addEventListener('click',function(event){
		parent = this.parentElement;

		parent.classList.toggle('item-screen-hide');
	});	
});