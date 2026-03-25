// MENU

const menu = document.getElementById("mobile-menu");
const nav = document.getElementById("nav-menu");

menu.addEventListener("click", () => {
nav.classList.toggle("active");
});

// HEADER SCROLL

window.addEventListener("scroll", () => {
const header = document.getElementById("header");
header.classList.toggle("scrolled", window.scrollY > 50);
});

// ANIMACIONES

function reveal(){
const elements = document.querySelectorAll(".reveal");

elements.forEach(el=>{
const top = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(top < windowHeight - 100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ANTES DESPUES

const slider = document.querySelector(".slider");
const after = document.querySelector(".after");

if(slider){
slider.oninput = function(){
after.style.width = this.value + "%";
};
}
