/* HEADER SCROLL */

window.addEventListener("scroll",function(){

const header=document.getElementById("header")

if(window.scrollY>80){

header.classList.add("scrolled")

}else{

header.classList.remove("scrolled")

}

})

/* MENU MOBILE */

const botonHamburguesa=document.getElementById("mobile-menu")
const menuNavegacion=document.getElementById("nav-menu")

botonHamburguesa.addEventListener("click",function(){

menuNavegacion.classList.toggle("active")
botonHamburguesa.classList.toggle("active")

})

document.querySelectorAll("#nav-menu a").forEach(link=>{

link.addEventListener("click",function(){

menuNavegacion.classList.remove("active")
botonHamburguesa.classList.remove("active")

})

})

/* ANIMACION SCROLL */

function reveal(){

var reveals=document.querySelectorAll(".reveal")

for(var i=0;i<reveals.length;i++){

var windowHeight=window.innerHeight
var elementTop=reveals[i].getBoundingClientRect().top
var elementVisible=120

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll",reveal)
reveal()

/* SLIDER ANTES DESPUES */

const slider=document.querySelector(".slider")
const after=document.querySelector(".after")

if(slider){

slider.addEventListener("input",function(){

after.style.width=this.value+"%"

})

}
