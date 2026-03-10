/* HEADER SCROLL */

window.addEventListener("scroll",function(){

const header=document.getElementById("header")

if(window.scrollY>80){

header.classList.add("scrolled")

}else{

header.classList.remove("scrolled")

}

})

/* ANTES DESPUES */

const slider=document.querySelector(".slider")
const after=document.querySelector(".after")

slider.oninput=function(){

after.style.width=this.value+"%"

}
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Opcional: Cerrar el menú cuando se hace clic en una opción
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});
