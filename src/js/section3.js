const fundo = document.querySelector(".fundo");
const Form = document.querySelector(".form-theme");
const btnFundo = document.querySelector(".btn-fundo");


btnFundo.addEventListener("click", fundoAtivo);

function fundoAtivo() {
    if(fundo.classList.toggle("fundo-claro")){
        fundo.classList.add("fundo-claro");
    }
}

console.log(btnFundo);
