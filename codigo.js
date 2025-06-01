const $=(e) => document.querySelector(e);
const inputValor = $(".input-elemento");

const subirElemento = $(".btn-subir");
const eliminarELemento = $(".btn-eliminar");

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
		
	}while(variable_id != "tareanueva"+x);

	botonRemover.classList.add("btn-eliminar");

	textoTarea.innerHTML = inputValor.value;
	botonRemover.innerHTML = "Eliminar";

	tareaNueva.appendChild(textoTarea);
	tareaNueva.appendChild(botonRemover);
	contenedorElemento.appendChild(tareaNueva);
	
}

eliminarELemento.addEventListener("click",eliminarTarea);

function eliminarTarea(){

	alert("este es: "+eliminarELemento.parentElement);
}

