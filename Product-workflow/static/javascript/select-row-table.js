checkbox = document.querySelectorAll("input[type=checkbox");

	checkbox.forEach(function(value,index){

		value.addEventListener("click",function(event){
			row = this.parentNode.parentNode;
			console.log(row)
			row.classList.toggle("product-item-selected");
		});

});