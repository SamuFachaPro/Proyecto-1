// MENU

const menu = document.getElementById("mobile-menu");
const nav = document.getElementById("nav-menu");

menu.addEventListener("click", () => {
nav.classList.toggle("active");
menu.classList.toggle("active");
});

// HEADER SCROLL

window.addEventListener("scroll", function(){
const header = document.getElementById("header");
if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
});

// ANIMACIONES (FIX REAL)

function reveal(){
const reveals = document.querySelectorAll(".reveal");

reveals.forEach((el)=>{
const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ANTES / DESPUÉS

const slider = document.querySelector(".slider");
const after = document.querySelector(".after");

if(slider && after){
slider.oninput = function(){
after.style.width = this.value + "%";
};
}
