var species = {
	cat    : "cat.jpg",
	bear   : "bear.jpg",
	fish   : "fish.jpg"
};

function main(){

	var img=$('<img id="random" src="">');
		img.appendTo('#holder');

	$(':button').click(function (){
			img.attr('src','img/'+species[$(this).attr('data-animal')])	});	

	// 1. placez un listener sur le click des éléments <button>
	// 2. dans le callback récupérez le data attribute animal
	// 3. récupérerez dans l'objet species la valeur correspond à l'attribut récupéré
	// 4. ajoutez élément img en assignant à son attibut src la valeur précédemment récupérée
	// 5. inserez cet élément dans l'élément ayant l'id holder
	// 
	// Conseils : avancez étape par étape, console.log et debugger autant que nécessaires !
	
	/* Version if else if pour les trois etapes
	if ($(this).attr('data-animal')== 'cat'){
			$('#random').src=('img/'+species[$(this).attr('data-animal')])
			console.log('#random');
		}*/
	 
}

$(document).ready(function(){
	main();
});