var Trainer1 = [];
var Trainer2 = [];
var Trainer3 = [];
var Trainer4 = [];
var Trainer5 = [];

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

        Trainer1.pokemon.push(4)


        }

    };
    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/" + id + "/", true);
    xhttp.send();
  }
