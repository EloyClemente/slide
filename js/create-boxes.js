
let anchura = 200 // Anchura de foto
let margen  = 10 // Margen de cada foto
let posicion_primera_capa = - (anchura + margen)
let desplazamiento = anchura + (margen * 2)
//..............................................



function create() // Crear cajas
{
	let container_box         = document.createElement('div') // Capa general para la pelicula
	let container_pic         = document.createElement('figure') // Capa para la foto
	let container_title_stars = document.createElement('div') // Capa para título y estrellas
	let container_title       = document.createElement('p') // Capa para el título
	let container_stars       = document.createElement('div') // Capa para las estrellas

	container_box.classList.add('container-box')
	container_pic.classList.add('container-pic')
	container_title_stars.classList.add('container-title-stars')
	container_title.classList.add('container-title-film')
	container_stars.classList.add('container-stars')

	container_box.appendChild(container_pic)
	container_box.appendChild(container_title_stars)
	container_title_stars.appendChild(container_title)
	container_title_stars.appendChild(container_stars)


	for(let i=0; i < 5; i++) // Crear estrellas
	{
		let star = document.createElement('div')
		star.classList.add('icon-star')
		container_stars.appendChild(star) 
	}
	

	return container_box
}





function insert_all(cantidad_cajas) // Insertar cajas iniciales
{ 
	container_boxes.innerHTML = ""

	for(let i=0; i < cantidad_cajas; i++)
	{
		container_boxes.appendChild( create() )
	}
}





function position_box() // Posicionar capas
{
	let boxes = document.getElementsByClassName('container-box')

	for(let i=0; i < boxes.length; i++)
	{
		boxes[i].style.left = posicion_primera_capa + "px"
		posicion_primera_capa += desplazamiento // Poner una al lado de otra
	}

	posicion_primera_capa = - (anchura + margen) // Restaurar valor
}





function number_box_all() // Atributos data para las cajas
{
	let boxes = document.getElementsByClassName('container-box')

	var last_index = Object.keys(ranking).length // Obtener último índice
	boxes[0].setAttribute('data-number', last_index) // Último índice para la capa 0


	for(let i=1; i < boxes.length; i++) // Numerar por orden desde la capa 1
	{
		boxes[i].setAttribute('data-number', i)
	}
}





// Insertar nuevas capas
//......................
function insert_right()
{
	container_boxes.appendChild( create() )
	let posicion_penultima = container_boxes.lastChild.previousSibling.offsetLeft // Posición penúltima capa
	container_boxes.lastChild.style.left = posicion_penultima + anchura + (margen * 2) + "px" // Posicionar última
}


function insert_left()
{
	container_boxes.prepend( create() )
	container_boxes.firstChild.style.left = - (anchura + margen) + "px"
}