import axios from 'axios';

export async function getPokemonList({paging}) {

    let pokemons = [];
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${paging.limit}&offset=${paging.offset}`;
    console.log('paging : ', paging);
    console.log(url);

    await axios
    .get(url)
    .then((res) => {
        pokemons = res.data.results;
    }).catch((e) => {
        console.log(e)
    })

    return pokemons;
}

export async function getPokemonImage(url) {
    let image= [];
    
    await axios
    .get(url)
    .then((res) => {
        image = res.data.sprites.front_default;
    }).catch((e) => {
        console.log(e);
    })
}

export async function getPokemonDetail(pokemonName) {
    
    let forms = [];

    await axios
    .get(`http://pokeapi.co/api///v2/pokemon` + pokemonName)
    .then((res) => {
        forms = res.data;
    }).catch((e) => {
        console.log(e)
    })

    return forms;
}

export async function searchPokemon(searchPokemonName) {

    let forms = [];

    await axios
        .get('https://pokeapi.co/api/v2/pokemon/'+ searchPokemonName)
        .then((res) => {
            forms = res.data.forms;
        }).catch((e) => {
            console.log(e);
        })

    return forms;
}