/* 1. EFECTO SCROLL DEL HEADER */
window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* 2. MENU MOBILE (ABRIR/CERRAR) */
// Usamos nombres únicos para evitar el error de "already declared"
const botonHamburguesa = document.getElementById('mobile-menu');
const menuNavegacion = document.getElementById('nav-menu');

if (botonHamburguesa && menuNavegacion) {
    botonHamburguesa.addEventListener('click', () => {
        menuNavegacion.classList.toggle('active');
        console.log("Menú clickeado");
    });

    // Cerrar el menú al tocar un enlace
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuNavegacion.classList.remove('active');
        });
    });
}

/* 3. SLIDER ANTES / DESPUÉS */
const sliderImg = document.querySelector(".slider");
const afterImg = document.querySelector(".after");

if (sliderImg && afterImg) {
    sliderImg.oninput = function() {
        afterImg.style.width = this.value + "%";
    };
}
