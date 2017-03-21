icon_close = document.querySelector(".icon-close");
btn_add = document.querySelector(".add-product-js");
modal = document.querySelector(".modal-item");

function show_modal(){
	modal.classList.add("modal-visible");
}

function hidden_modal(){
	modal.classList.remove("modal-visible");
}

btn_add.addEventListener("click",show_modal);
icon_close.addEventListener("click",hidden_modal);
