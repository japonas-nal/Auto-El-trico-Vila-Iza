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

    if(menu.classList.contains("nav-open")){
        menu.classList.remove("nav-open");
        document.getElementById("btn-menu").style.backgroundColor = "#ffffff";
        document.getElementById("btn-menu").style.color = "#000000";
    } else {
        menu.classList.add("nav-open");
        document.getElementById("btn-menu").style.backgroundColor = "#52bcba";
        document.getElementById("btn-menu").style.color = "#ffffff";
    }
}   