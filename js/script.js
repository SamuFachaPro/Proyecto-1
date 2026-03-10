const menuBtn = document.getElementById("menu-btn")
const nav = document.getElementById("nav")

menuBtn.addEventListener("click", function(){

nav.classList.toggle("show")

})

/* SCROLL HEADER */

window.addEventListener("scroll", function(){

const header = document.getElementById("header")

if(window.scrollY > 80){

header.classList.add("scrolled")

}else{

header.classList.remove("scrolled")

}

})
