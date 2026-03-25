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
</div>

<input type="range" min="0" max="100" value="50" class="slider">

</div>

</section>

<section id="galeria" class="galeria reveal">

<h2>Proyectos</h2>

<div class="portfolio">

<img src="img/mural1.jpg">
<img src="img/mural2.jpg">
<img src="img/mural3.jpg">

</div>

</section>

<section id="contacto" class="contacto reveal">

<h2>Solicita tu mural</h2>

<p>Contáctanos para cotizar tu proyecto en Bogotá.</p>

<a href="https://wa.me/573000000000" class="btn">
Escribir por WhatsApp
</a>

</section>

<footer>

<p>© 2026 MUROTEC COL</p>

</footer>

<a href="https://wa.me/573000000000" class="whatsapp-float">💬</a>

<script src="js/script.js"></script>

</body>
</html>
