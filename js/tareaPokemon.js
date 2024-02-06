
async function capturaDatos(i){
    url= "https://pokeapi.co/api/v2/pokemon/"+i;
    let respuesta =await fetch(url);
    let datosPokemon =await respuesta.json();
    console.log(datosPokemon[i]);
    urlPokemon = (datosPokemon.sprites.other.dream_world.front_default);
    $("#img-pokemon").attr("src",urlPokemon);
     $("h1").text(`#${datosPokemon.id} ${datosPokemon.name}`);
}; 
 
function clickFlechaIzq(){
i = (i == 1) ? 650 : i;
capturaDatos(--i);
}


function clickFlechaDer(){
    if (i==649){
        i=0;
    }
    capturaDatos(++i);
}

var i=1, imagen, nombre;
$(document).ready(function(){
$("#flechaIzq").click(clickFlechaIzq);
$("#flechaDer").click(clickFlechaDer);
});
