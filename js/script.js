const toggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")

toggle.onclick = () => {
menu.classList.toggle("active")
}

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
