import { useEffect } from "react";

const Pokedex = () => {
    const [pokemonData, setPokemonData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const limit = 20
            const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
            const res = await fetch(url);
            const data = await res.json();

            const loadedPokemon = data.results.map((pokemon, index) => {
                return {
                    name: pokemon.name,
                    id: index + 1,
                    image: 
                }
            })
            const allPokemonData = [];
            for
        }
    })
}
export default Pokedex;