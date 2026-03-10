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

if(botonHamburguesa && menuNavegacion){

botonHamburguesa.addEventListener("click",function(){

menuNavegacion.classList.toggle("active")

})

document.querySelectorAll("#nav-menu a").forEach(link=>{

link.addEventListener("click",function(){

menuNavegacion.classList.remove("active")

})

})

}

/* SLIDER ANTES DESPUES */

const sliderImg=document.querySelector(".slider")
const afterImg=document.querySelector(".after")

if(sliderImg && afterImg){

sliderImg.oninput=function(){

afterImg.style.width=this.value+"%"

}

}
