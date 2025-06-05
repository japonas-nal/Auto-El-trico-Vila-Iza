const itens = document.querySelectorAll(".oficina");

function abreMenu(id){
    let dropdown = document.getElementById(id);
    const aberto = dropdown.classList.contains("show");

    itens.forEach(item => item.classList.remove("show"));

    if (!aberto) 
        dropdown.classList.add("show");
}

function burg(){
    let menu = document.getElementById("menu");

    menu.classList.contains("nav-open") ? menu.classList.remove("nav-open") : menu.classList.add("nav-open");
}   