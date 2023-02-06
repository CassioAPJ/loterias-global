
const btn = document.getElementById("btn")

btn.addEventListner("click", function(){
     window.scrollTo(0,0)
})

document.addEventListner('scroll', ocultar)

function ocultar(){
	if(window.scrollY > 10){
		btn.style.display = "flex"
     } else {
		btn.style.display = "none"
     }
}
ocultar()

