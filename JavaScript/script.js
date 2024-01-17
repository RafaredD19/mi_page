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

document.getElementById('downloadBtn').addEventListener('click', function () {
    // Código para generar el PDF
    var pdf = new jsPDF();
    pdf.text('Tu Nombre', 20, 20);
    pdf.text('Soy un desarrollador frontend junior...', 20, 30);

    // Puedes agregar más contenido al PDF según sea necesario

    // Guardar el PDF como "cv.pdf"
    pdf.save('CVRafaelAndres.pdf');
});