const menuBtn = document.getElementById("menu-btn")
const nav = document.getElementById("nav")

menuBtn.addEventListener("click", () => {

nav.classList.toggle("open")

})

/* HEADER SCROLL */

window.addEventListener("scroll", () => {

const header = document.getElementById("header")

if(window.scrollY > 80){

header.classList.add("scrolled")

}else{

header.classList.remove("scrolled")

}

})
