/* MENU */

const menu = document.getElementById("mobile-menu")
const nav = document.getElementById("nav-menu")

menu.addEventListener("click",()=>{
nav.classList.toggle("active")
})

/* SCROLL ANIMATION */

function reveal(){
let elements=document.querySelectorAll(".reveal")

elements.forEach(el=>{
let windowHeight=window.innerHeight
let elementTop=el.getBoundingClientRect().top

if(elementTop < windowHeight - 100){
el.classList.add("active")
}
})
}

window.addEventListener("scroll",reveal)
reveal()
