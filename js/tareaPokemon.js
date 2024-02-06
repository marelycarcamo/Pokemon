async function capturaDatos(i) {
	url = "https://pokeapi.co/api/v2/pokemon/" + i;
	let respuesta = await fetch(url);
	let datosPokemon = await respuesta.json();
	console.log(datosPokemon[i]);
	urlPokemon = datosPokemon.sprites.other.dream_world.front_default;
	$("#img-pokemon").attr("src", urlPokemon);
	$("h1").text(`#${datosPokemon.id} ${datosPokemon.name}`);
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
