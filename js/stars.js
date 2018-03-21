
let capa_estrellas = document.getElementsByClassName('container-stars')
 
let level_1 = 1000
let level_2 = 2000
let level_3 = 3000
let level_4 = 4000
let level_5 = 5000


 function colorStars()
 {
 	for(let i=0; i < capa_estrellas.length; i++)
	{
		let index = capa_estrellas[i].parentNode.parentNode.dataset.number


		let value = Object.values(ranking)[index-1]


		values(value, i)
	}



	function values(value, i)
	{
		let stars = capa_estrellas[i].getElementsByClassName('icon-star')


		for(let i=0; i < 5; i++) // Poner todas en gris
		{
			stars[i].style.color = "#D0D0D0"
		}


		if(value >= level_1 && value < level_2)
		{
			stars[0].style.color = "orange"
		}
		else if (value >= level_2 && value < level_3) 
		{
			stars[0].style.color = "orange"
			stars[1].style.color = "orange"
		}
		else if (value >= level_3 && value < level_4) 
		{
			stars[0].style.color = "orange"
			stars[1].style.color = "orange"
			stars[2].style.color = "orange"
		}
		else if (value >= level_4 && value < level_5) 
		{
			stars[0].style.color = "orange"
			stars[1].style.color = "orange"
			stars[2].style.color = "orange"
			stars[3].style.color = "orange"
		}
		else if (value >= level_5) 
		{
			stars[0].style.color = "orange"
			stars[1].style.color = "orange"
			stars[2].style.color = "orange"
			stars[3].style.color = "orange"
			stars[4].style.color = "orange"
		}
	}
 }
 colorStars()

  

