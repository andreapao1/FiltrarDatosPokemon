/*const input = document.getElementById('buscador').value;
const button = document.getElementById('buscarBtn');
const pokemonContainer = document.getElementById('app');*/

/*function getPokemon(){
    let url = "https://pokeapi.co/api/v2/pokemon/"
    let pokemones = []

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log('respuesta server', data)
        pokemones = data;
    })

}

getPokemon();*/

/*function getPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => {
        createPokemon(data);
    });
}

getPokemon(1);


function fetchPokemon(number){
    for(let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.Container.appendChild(card);
}

fetchPokemon(9)*/


class Poke {
    constructor(name, image) {
        this.name = name;
        this.image = image;
    }

    obtenerNombre() {
        return this.name;
    }

    obtenerFoto() {
        return this.image;
    }
}

async function getPokemon(id) {
    let poke = [];
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    let elemento = document.getElementById("app");
    
    const data = await fetch(url);
    const pokemones = await data.json();

    console.log(pokemones);

    poke = new Poke(pokemones.name, pokemones.sprites.front_default)


    elemento.innerHTML = `
    <p>${pokemones.name}</p>
    <img src=${pokemones.sprites.front_default} height="250" width="250"/>`

}

getPokemon(5);

/*async function createPokemon(id) {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    let elemento = document.getElementById("app");
    const data = await fetch(url);
    const pokemones = await data.json();

    console.log(pokemones);

    elemento.innerHTML = `<img src=${pokemon[1].sprites.front_default}/>`
}*/






/*function createPokemon(pokemon) {
    const img = document.createElement('img');
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement('h3');
    h3.textContent = pokemon.name;

    const div = document.createElement('div');
    div.appendChild(img);
    div.appendChild(h3);

    pokemonContainer.appendChild(div);

}

getPokemon();*/




/*async function getPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/`;
    let elemento = document.getElementById("app");

    const data = await fetch(url);
    let pokemon = await data.json();

    console.log(pokemon.url);

    elemento.innerHTML = `<img src=${pokemon.url}/>`;
}

getPokemon();*/