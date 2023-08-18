import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchPokemon } from "../apis/PokemonAPIs";
import PokemonItem from "../components/PokemonItem";
import boxStyle from './PokemonInfo.module.css'


function PokemonSearchResult() {

    const [searchParam] = useSearchParams();
    const searchPokemonName = searchParam.get('pokemonName');
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(
        () => {
            searchPokemon(searchPokemonName).then(
                result => {
                    setPokemonList(result);
                }
            )
        },
        []
    )

    return (
        <>
            <h1>포켓몬 검색 결과</h1>
            <div className={boxStyle.PokemonBox}>
                {pokemonList.map(poke => <PokemonItem pokemon={poke} />)}
            </div>
        </>
    )
}

export default PokemonSearchResult;