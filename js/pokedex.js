
/**
 * AUTHOR: MARELY
 * This JavaScript code fetches data from the PokeAPI and displays information about different Pokemon
 * when the left or right arrow buttons are clicked.
 * @param i - The parameter "i" is used to specify the ID of the Pokemon that we want to retrieve data
 * for. It is initially set to 1 and is incremented or decremented based on the user's interaction with
 * the left and right arrows.
 */

async function capturaDatos(i) {
	url = "https://pokeapi.co/api/v2/pokemon/" + i;
	let respuesta = await fetch(url);
	let datosPokemon = await respuesta.json();
	console.log(datosPokemon[i]);
	urlPokemon = datosPokemon.sprites.other.dream_world.front_default; //url imagen pokemon
	$("#img-pokemon").attr("src", urlPokemon);
	$("#h-id").text(`#${datosPokemon.id}`);
	$("#h-name").text(`${datosPokemon.name}`);
}

function clickFlechaIzq() {
	i = i == 1 ? 650 : i;
	capturaDatos(--i);
}

function clickFlechaDer() {
	i = i == 649 ? 0 : i;
	capturaDatos(++i);
}

var i = 1;
	$(document).ready(function () {
	$("#f-left").click(clickFlechaIzq);
	$("#f-right").click(clickFlechaDer);
});




