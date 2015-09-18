var PokemonComponent = function(container, pokemon) {
  this.pokemon = pokemon
  this.container = container
}

PokemonComponent.prototype.template = function(pokemon) {
  return `
	<div>
	  	<h2>${pokemon.name}</h2>
	</div>`
}

PokemonComponent.prototype.render = function () {
	this.container.empty();
  var html = this.template(this.pokemon)
  this.container.append(html);
}

PokemonComponent.prototype.addImageToTemplate = function(pokemon){
	var url = "http://pokeapi.co/" + pokemon.image;
	return`
		<div>	
	  		<img src=${url}>
	  	</div>`
}

PokemonComponent.prototype.renderImage = function () {
	this.container.empty();
	var image = this.addImageToTemplate(this.pokemon);
  	this.container.append(image);
}
	  	

module.exports = PokemonComponent;


