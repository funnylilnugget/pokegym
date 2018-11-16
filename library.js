

class Pokemon {
  constructor(name, hp, attack, defense, abilities) {
    this.name= name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }

}
class Trainer{
  constructor(){
    this.pokemon = [];

  }
}

var Bason = new Trainer();
var Kari = new Trainer();
var Bonny = new Trainer();
var Chris = new Trainer();
var Kenny = new Trainer();

let BasonID = [001,002,003];
let KariID = [144,141,143];
let BonnyID = [719, 708, 330];
let ChrisID = [356, ];
let KennyID = [144, 257, 282];

for (let i =0; i<BasonID.length; i++) {
  getPokemon(BasonID[i]);


  }
}
  function getPokemon(id){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText)
        console.log(data);

        let pokemon = new Pokemon(data['name'],data['stats'][5]['base_stat'],data['stats'][4]['base_stat'],data['stats'][3]['base_stat'],data['abilities']);

        Bason.pokemon.push(pokemon);
        Kari.pokemon.push(pokemon);



        // Bason.pokemon.push(pokemon);
        // Kari.pokemon.push(pokemon);
        // Bonny.pokemon.push(pokemon);
        // Chris.pokemon.push(pokemon);
        // Kenny.pokemon.push(pokemon);

      }

    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + id + "/", true);

    xhttp.send();
  }



  function getStats(number_of_pokemon_in_array) {switch(Bason)
  {

    let name = Bason.pokemon[1]['name'];

  }




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

var Bason = new Trainer();
document.getElementsByClassName('remove')[0].addEventListener('click',removePokemon);
getPokemon(1);
getPokemon(2);
getPokemon(3);
