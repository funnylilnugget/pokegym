var pokemon1 = 708;
var pokemon2 = 330;
var pokemon3 = 718;
var pokemon4 = 345;
var pokemon5 = 545;
var pokemon6 = 64;
var pokemon7 = 381;
var pokemon8 = 257;
var pokemon9 = 282;
var pokemon10= 133;
var pokemon11 = 132;
var pokemon12= 6;
var pokemon13 = 356;
var pokemon14 = 94;
var pokemon15= 282;
// var pokemon1 = [];


class Pokemons {
  constructor(name,hp, attack, defense,id, images,type, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.id = id;
    this.images = images;
    this.type = type;
    this.abilities = abilities;
    // this.text = text;
    trainer.pokemons.push(this);

  }
}
class Info {
  constructor(text){
    this.text = text
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemons = [];
  }

  all(){
    return this.pokemons;
  }

  get(name) {
    for (let i = 0; i < this.pokemons.length; i++) {
        let pokemonName = this.pokemons[i].name;
        if (pokemonName === name) {
            return this.pokemons[i];
        }
    }
    return false;
  }
}

function getPokemon(pokemon) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      // console.log(data);

      let name = data["name"];
      let hp = data["stats"][5]["base_stat"];
      let attack = data["stats"][4]["base_stat"];
      let defense = data["stats"][3]["base_stat"];
      let id = data["id"];
    let images = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + pokemon +".png";
    // id =parseInt();
    for(typ in data["types"]){
      var types = (data["types"][typ]["type"]["name"]);
    }
    var abilities =  data["abilities"][0]["ability"]["name"];
    // console.log(abilities);
    let pokemons = new Pokemons(name,hp,attack,defense,id,images,types,abilities);
    // console.log(pokemons);
    displayStats(pokemons)
}
};
  xhttp.open("GET", "https://fizal.me/pokeapi/api/" +pokemon+ ".json", true);
  xhttp.send();
}

// *******************************************************************************************************
function pokeInf (pokemon) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText);
      for (i in data["flavor_text_entries"]) {
                if (data['flavor_text_entries'][(i)]['language']['name'] == 'en'){
                  var info= data['flavor_text_entries'][(i)]['flavor_text'];
                }
              }

      let description = new Info(info);
      displayText(description);
}
};
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon-species/" +pokemon + "/", true);
  xhttp.send();
}

var trainer = new Trainer ("Bonny", pokemon1, pokemon2, pokemon3);
var trainer2 = new Trainer("keiry", pokemon4, pokemon5, pokemon6);
var trainer3 = new Trainer("kenny", pokemon7, pokemon8, pokemon9);
var trainer4 = new Trainer("jason", pokemon10, pokemon11, pokemon12);
var trainer5 = new Trainer("chris", pokemon13, pokemon14, pokemon15);

let images = document.querySelector(".pokeImage");
let name = document.querySelector(".name");
let id = document.querySelector(".id");
let hp = document.querySelector(".hp");
let attack = document.querySelector(".attack");
let defense = document.querySelector(".defense");
let type = document.querySelector(".type");
let abilities = document.querySelector(".abilities");


function displayStats(pokemon) {
  images.src = pokemon.images;
  name.innerText = pokemon.name.toUpperCase();
  id.innerText = pokemon.id;
  hp.innerText = pokemon.hp;
  attack.innerText = pokemon.attack;
  defense.innerText = pokemon.defense;
  type.innerText = pokemon.type;
  abilities.innerText = pokemon.abilities;
  // text.innerHTML = pokemon.info;
  // console.log(pokemon.info);

}
// let description = new Info(text);
// displayText(description);
// }

function displayText(text){
  let text = document.querySelector(".text");
  text.innerHTML = pokemon.info;
  console.log(pokemon.info);
}
