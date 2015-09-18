// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks

var Pokemon = require('./models/pokemon.js');
var Component =  require("./components/pokemon.js");

//var Router = require("./app_router.js");
$('#submitPokemon').on('click', function(event){
	event.preventDefault();
	var pokemonId = $('#input-id-pokemon').val(); // this = $('#input-id-pokemon')
	console.log(pokemonId);
	var pokemon = new Pokemon(pokemonId);
	var nameComponent = new Component($('.pokedex-container'), pokemon);
	var imageComponent = new Component($('.image-container'), pokemon);
	pokemon.fetch(nameComponent.render.bind(nameComponent));
	pokemon.fetchSprite(imageComponent.renderImage.bind(imageComponent));
});




//window.router = new Router($container);
