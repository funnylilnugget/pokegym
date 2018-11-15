var Trainer = [];

class Pokemon {
  constructor(name, hp, attack, defense, ability1, ability2) {
    this.name= name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability1 = ability1;
    this.ability2 = ability2;
  }
}




  function getPokemon(id){
    var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText)
        console.log(data);
         let pokemon = new Pokemon(data['name'],data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.abilities[0].ability.name, data.abilities[1].ability.name);




        }

    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + id + "/", true);
    xhttp.send();
  }
// =======
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
// >>>>>>> 20e79df4ad450ec4d3c4ec6ca8ae5eac25dce6a3
