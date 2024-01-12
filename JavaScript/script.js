document.getElementById("icon_menu").addEventListener("click", mostrar_menu);
function mostrar_menu(){
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}

window.onscroll= function(){
    var posicion =window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon-hear");
    var elemento2= document.getElementById("icon_fire");
    elemento1.style.bottom= posicion * 0.3 + "px";
    elemento2.style.top = posicion * 0.3 + "px";
}