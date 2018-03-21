
let left_arrow  = document.getElementById('left_arrow')
let right_arrow = document.getElementById('right_arrow')
let transition  = false // Para regular los clicks




// Eventos con control del click
// Para que los clicks sean regulares
//.................................................
right_arrow.addEventListener('click', function(e){

	transition == false ? translatePictures(e) : false })


left_arrow.addEventListener('click', function(e){

	transition == false ? translatePictures(e) : false })




function execute(cantidad_cajas)  // Llamada desde responsive.js
{
	create()                    // Crear cajas iniciales
	insert_all(cantidad_cajas)  // Insertar cajas
	position_box()              // Posicionar cajas
	number_box_all()            // Asignar atributos data
	insertAllPictures()
	insertAllTitles()
}




function translatePictures(e)
{
	transition = true // Limitador de clicks

	let boxes = document.getElementsByClassName('container-box')


	for(let i=0; i < boxes.length; i++)
	{
		e.target.id == 'right_arrow' ? left = - desplazamiento : left = desplazamiento // Medidas del desplazamiento

		boxes[i].style.left = boxes[i].offsetLeft + left + "px" // Desplazar capas
	}


	setTimeout(function() // Destruir capas
	{
		e.target.id == 'right_arrow' ? destroyBoxLeft() : destroyBoxRight()
	}, 300)
}





// Destruir capas
//.......................
function destroyBoxLeft()
{
	container_boxes.children[0].remove()

	setTimeout(function()
	{
		createBoxRight()
		transition = false
	}, 300)
}

function destroyBoxRight()
{
	container_boxes.children[ cantidad_cajas - 1 ].remove() // Eliminar la última caja

	setTimeout(function()
	{
		createBoxLeft()
		transition = false
	}, 300)
}






// Crear capas RIGHT
//.......................
function createBoxRight()
{
	let boxes  = document.getElementsByClassName('container-box')
	let button = "right" // Para saber en la siguiente función la dirección


	// Atributo data de la última caja
	//.................................
	let number_last_box = Number(container_boxes.lastChild.dataset.number)
	let number_new_box  = number_last_box + 1

	if(number_last_box == Object.keys(ranking).length)
	{
		number_new_box = 1  // Resetear valor al finalizar las fotos
	}

	insert_right() // Insertar nueva caja

	// Numerar la nueva última caja
	//.......................................
	container_boxes.lastChild.setAttribute('data-number', number_new_box)

	insertOnePicture("right")
}



// Crear capas LEFT
//.......................
function createBoxLeft()
{ 
	let boxes  = document.getElementsByClassName('container-box')
	let button = "left" // Para saber en la siguiente función la dirección


	// Atributo data de la primera caja
	//..................................
	let number_first_box = Number(container_boxes.firstChild.dataset.number)
	let number_new_box   = number_first_box - 1

	if(number_first_box == 1) // Resetear valor al finalizar las fotos
	{
		number_new_box = Object.keys(ranking).length 
	}

	insert_left() // Insertar nueva caja

	// Numerar la nueva última caja
	//.......................................
	container_boxes.firstChild.setAttribute('data-number', number_new_box)

	insertOnePicture("left")
}



function insertAllPictures()
{
	let boxes = document.getElementsByClassName('container-box')
	let container_pic = document.getElementsByClassName('container-pic')


	// Insertar última foto en la capa 0
	//...................................
	let number = container_pic[0].parentNode.dataset.number // Número de la caja padre
	let last_picture = Object.keys(ranking)[number - 1]
	container_pic[0].style.backgroundImage = 'url(img/' + last_picture + '.jpg'


	for(let i=1; i < cantidad_cajas; i++) // Insertar todas las fotos
	{
		let number  = container_pic[i].parentNode.dataset.number // Número de la caja padre
		let picture = Object.keys(ranking)[number - 1]

		container_pic[i].style.backgroundImage = 'url(img/' + picture + '.jpg'
	}
}




function insertOnePicture(button) // Insertar nuevas cajas
{
	if(button == "right")
	{
		let number  = container_boxes.lastChild.dataset.number
		let picture = Object.keys(ranking)[number - 1]

		container_boxes.lastChild.firstChild.style.backgroundImage = 'url(img/' + picture + '.jpg'
	}
	else
	{
		let number  = container_boxes.firstChild.dataset.number
		let picture = Object.keys(ranking)[number - 1]

		container_boxes.firstChild.firstChild.style.backgroundImage = 'url(img/' + picture + '.jpg'
	}

	insertAllTitles()
}





function insertAllTitles() // Insertar títulos
{
	let container_title = document.getElementsByClassName('container-title-film')

	for(let i=0; i < container_title.length; i++)
	{
		let index = container_title[i].parentNode.parentNode.dataset.number
		container_title[i].innerHTML = title[index-1]
	}

	colorStars()
}