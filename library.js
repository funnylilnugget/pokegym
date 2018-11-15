<<<<<<< HEAD
<<<<<<< HEAD
var Trainer1 = [];
var Trainer2 = [];
var Trainer3 = [];
var Trainer4 = [];
var Trainer5 = [];
=======
var Trainer = [];
>>>>>>> 33fd0430bc54a91fb66be67b7151fa1d1a234fe7
=======

>>>>>>> JavascriptJava

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
<<<<<<< HEAD
         let pokemon = new Pokemon(data['name'],data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.abilities[0].ability.name, data.abilities[1].ability.name);

        Trainer1.pokemon.push(4)
=======
        let pokemon = new Pokemon(data['name'],data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.abilities[0].ability.name, data.abilities[1].ability.name);

        
>>>>>>> JavascriptJava

      }

    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + id + "/", true);

    xhttp.send();
  }
<<<<<<< HEAD
=======
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
>>>>>>> 33fd0430bc54a91fb66be67b7151fa1d1a234fe7
