
let container_boxes = document.getElementById('container_boxes')
var cantidad_cajas  = null // Varía con el tamaño del viewport
let variable        = null // Limita las llamadas a createAll()






// Gestiona el nº de cajas 
// en función del viewport
//........................
function responsive()
{
	let viewport = window.innerWidth

	     if( viewport > 2000)                       cantidad_cajas = 9 
	else if( viewport < 2000 && viewport > 1800 )   cantidad_cajas = 8 
	else if( viewport < 1800 && viewport > 1600 )   cantidad_cajas = 7 
	else if( viewport < 1600 && viewport > 1400 )   cantidad_cajas = 6 
	else if( viewport < 1400 && viewport > 1150 )   cantidad_cajas = 5 
	else if( viewport < 1150 && viewport > 550  )   cantidad_cajas = 4 
	else if( viewport < 550)                        cantidad_cajas = 3 



	
	if(variable != cantidad_cajas) // Limita las llamadas a create() e insert_all()
	{
		container_boxes.style.width = desplazamiento * (cantidad_cajas - 2) + "px" // Redimensiona container_boxes
		variable = cantidad_cajas

		execute(cantidad_cajas) // Crear e insertar cajas iniciales
	}
}
window.addEventListener('resize', responsive)
responsive() // Punto de inicio