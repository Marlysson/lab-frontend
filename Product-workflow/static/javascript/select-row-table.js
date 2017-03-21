checkbox = document.querySelectorAll("input[type=checkbox");

	checkbox.forEach(function(value,index){

		value.addEventListener("click",function(event){
			row = this.parentNode.parentNode;
			row.classList.toggle("product-item-selected");
		});

});