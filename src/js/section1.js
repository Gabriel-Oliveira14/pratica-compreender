const btn = document.querySelector("#menu");
btn.addEventListener("click",  menuAtivo);

function menuAtivo() {
    const menuMobile = document.querySelector(".menu-central");
    if(menuMobile.classList.toggle("ativo")){
        menuMobile.classList.add("ativo");
    } 
}