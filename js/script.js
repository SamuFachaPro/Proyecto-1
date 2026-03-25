// MENU

const menu = document.getElementById("mobile-menu")
const nav = document.getElementById("nav-menu")

menu.addEventListener("click",()=>{
nav.classList.toggle("active")
})

// HEADER SCROLL

window.addEventListener("scroll", function(){
const header = document.getElementById("header")
if(window.scrollY > 50){
header.classList.add("scrolled")
}else{
header.classList.remove("scrolled")
}
})

// ANTES / DESPUÉS

const slider = document.querySelector(".slider")
const after = document.querySelector(".after")

if(slider){
slider.oninput = function(){
after.style.width = this.value + "%"
}
}
