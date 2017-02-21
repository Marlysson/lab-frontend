
let contagem = function(max,element){

	let contador = 0;

	let count_up = setInterval(function(){
		
		if (contador < parseInt(max)){

			if ( (max - contador) < 10){
				contador += (max - contador);
			}else{
				contador += 10;	
			}

			element.textContent = contador;

		}else{
			clearInterval(count_up);
		}

	},90);

}

const numbers = document.querySelectorAll('.data-number');

//Refactor to one "function lib like" using objects
contagem(numbers[0].textContent,numbers[0]);
contagem(numbers[1].textContent,numbers[1]);
contagem(numbers[2].textContent,numbers[2]);