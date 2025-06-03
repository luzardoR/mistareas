const $=(e) => document.querySelector(e);
const inputValor = $(".input-elemento");

const subirElemento = $(".subir");

subirElemento.addEventListener("click",nuevaTarea);
let x = 0;

function nuevaTarea(){

	const contenedorElemento = $(".sub-contenedor-de-elemento");
	const tareaNueva = document.createElement("div");
	const textoTarea = document.createElement("p");
	const botonRemover = document.createElement("button");
	
	let variable_id = "";
	do{
		x += 1;
		variable_id = "tareanueva"+x;
		tareaNueva.id = variable_id;
		tareaNueva.classList.add("cajatarea");
		botonRemover.classList.add("btn");
		botonRemover.classList.add("eliminar"+x);
		botonRemover.addEventListener("click",(e)=>{ e.target.parentElement.remove()});
	}while(variable_id != "tareanueva"+x);

	textoTarea.innerHTML = inputValor.value;
	botonRemover.innerHTML = "Eliminar";

	tareaNueva.appendChild(textoTarea);
	tareaNueva.appendChild(botonRemover);
	contenedorElemento.appendChild(tareaNueva);
}