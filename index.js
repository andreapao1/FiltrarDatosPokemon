class Poke {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }

    obtenerNombre() {
        return this.name;
    }

    async obtenerFoto() {
        //console.log(this.url)
        let resultado = await fetch(this.url)
        let data1 = await resultado.json();
        //console.log(data1)
        //console.log(resultado)
        console.log(data1.sprites.front_default)
        return data1.sprites.front_default;
    }
}

let varPoke = [];
let elemento = document.getElementById("app");

async function getPokemon() {
    let url = `https://pokeapi.co/api/v2/pokemon/`;
    
    
    const data = await fetch(url);
    let pokemones = await data.json();


    console.log(pokemones);


    pokemones.results.map(async datum => {
        const personaje = new Poke(datum.name, datum.url)
        const foto = await personaje.obtenerFoto()
        //personaje.obtenerFoto();
        console.log(foto)
        elemento.innerHTML += 
        `<div class="pokeapi1">
        <h2 class="colorletter1">${datum.name}</h2>
        <img class="img_Pokemon1" src="${foto}">
        </div>`

            

    })

    const input = document.querySelector('#buscador')

    document.getElementById('app').innerHTML = pok;
    }



    async function llamarBusqueda() {
        const consulta = document.getElementById("buscador").value;
        let url = `https://pokeapi.co/api/v2/pokemon/${consulta}`;
        const data = await fetch(url);
        let pokemones = await data.json();

        elemento.innerHTML = `<div class="pokeapi">
        <h2 class="colorletter">${pokemones.name}</h2>
        <img class="img_Pokemon" src="${pokemones.sprites.front_default}">
        </div>`


        console.log(data);

    }





    getPokemon();

    

    