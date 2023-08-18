import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../apis/PokemonAPIs";

function PokemonDetail() {

    const {pokemonName} = useParams();
    const [pokemon, setpokemon] = useState({});
    const [frontImage, setFrontImage] = useState({});
    const [backImage, setBackImage] = useState({});

    useEffect(
        () => {
            getPokemonDetail(pokemonName).then(
                result => {
                    setpokemon(result);
                    setFrontImage(result.sprites.front_default);
                    setBackImage(result.sprites.back_default)
                }
            )
        },
        []
    );

    return (
        <>
            <h2>포켓몬 상태 설명</h2>
            <h3>포켓몬 이름 : {pokemon.name}</h3>
            <h3>앞모습 : <img src={frontImage} style={{maxWidth: 500}}/></h3>
            <h3>뒷모습 : <img src={backImage} style={{maxWidth: 500}}/></h3>
        </>
    )
}
export default PokemonDetail;