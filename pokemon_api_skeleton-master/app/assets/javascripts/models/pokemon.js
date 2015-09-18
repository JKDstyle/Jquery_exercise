var PokemonModel = function (id) {
  this.id = id
  this.url = "/api/pokemon/"
}

PokemonModel.prototype.fetch = function (callback) {
  var request = $.get(`${this.url}${this.id}`)

  request.done(function(pokemonInfo) {
    $.extend(this, pokemonInfo);

    callback();
  }.bind(this))
}

PokemonModel.prototype.fetchSprite = function(callback){
	var spriteUrl = "/api/sprite/";
	this.id = parseInt(this.id) + 1;
	console.log(this.id)
	var request = $.get(`${spriteUrl}${this.id}`);

	request.done(function(pokemonInfo){
    	$.extend(this, pokemonInfo);

    	callback();
  	}.bind(this));
}


module.exports = PokemonModel

// var PokemonSprite = function(img){
// 	this.img = img
// 	this.url = "pokeapi.co/api/v1/sprite"
// }

// PokemonSprite.prototype.fetch = function(callback){
// 	var request = $get(`$)
// }