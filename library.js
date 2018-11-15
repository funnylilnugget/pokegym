// This is the flavor text for the Pokemon

function pokemonBio(pokemon) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      for (i in data["flavor_text_entries"]) {
          if (data['flavor_text_entries'][(i)]['language']['name'] == 'en'){
          var infos = data['flavor_text_entries'][(i)]['flavor_text'];
        }
    let poke = new PokemonData(data.infos);
    }
      let node = document.createElement('p');
        node.innerHTML = "<center><b>Bio:</b></center>" + infos;
        document.getElementById('pokebio').appendChild(node);
        node.style.background = "rgb(217, 217, 217, .4)";
        node.style.borderRadius = "25px";
        node.style.padding = "20px";
    }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon-species/" + pokemon + "/", true);
  xhttp.send();
}
