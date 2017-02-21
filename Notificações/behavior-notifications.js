
close = document.querySelector('.close');
action = document.querySelector('.action');

notificacoes = document.querySelector('.notificacoes');

action.addEventListener('click',function(event){
	notificacoes.classList.add('show-notificacao');
});

close.addEventListener('click',function(event){
	notificacoes.classList.remove('show-notificacao');
});
