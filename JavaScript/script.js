document.getElementById("icon_menu").addEventListener("click", toggleMenu);

// Cierra el menú cuando se hace clic en un enlace del menú
document.querySelectorAll(".nav__link").forEach(function(link) {
    link.addEventListener("click", function() {
        document.querySelector(".menu").classList.remove("mostrar_menu");
    });
});

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("mostrar_menu");
}

window.onscroll = function() {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon-hear");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.3 + "px";
    elemento2.style.top = posicion * 0.3 + "px";
};
