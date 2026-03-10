const toggle = document.getElementById("menu-toggle")
const menu = document.getElementById("menu")

toggle.onclick = () => {
menu.classList.toggle("active")
}

window.addEventListener("scroll",function(){

const header=document.getElementById("header")

if(window.scrollY>50){

header.classList.add("scrolled")

}else{

header.classList.remove("scrolled")

}

})
