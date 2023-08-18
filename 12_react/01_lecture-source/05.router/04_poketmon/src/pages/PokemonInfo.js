import { useEffect, useState,useNavigate } from "react";
import PokemonItem from "../components/PokemonItem";
import { getPokemonList } from "../apis/PokemonAPIs";
import boxStyle from './PokemonInfo.module.css'

function PokemonInfo() {

    const [pokemonList, setPokemonList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [paging, setPaging] = useState({
        limit: 20,
        offset: 0
    });
    const [current, setCurrent] = useState(1);
    const navigate = useNavigate();

    useEffect(
        () => {
            getPokemonList({ paging }).then(
                pokemons => {
                    setPokemonList(pokemons)
                }
            )
        }
        , [paging]
    )

    const onClickHandler = () => {
        navigate(`/pokemon/search?pokemonName=${searchValue}`);
    };

    const onPreviousClick = async () => {
        await setCurrent(current - 1);
        await setPaging({
            limit: paging.limit,
            offset: paging.offset - 20
        });
    }

    const onNextClick = async () => {
        await setCurrent(current + 1);
        await setPaging({
            limit: paging.limit,
            offset: paging.offset + 20
        });
    }

    return (
        <div className={boxStyle.PokemonBox}>
            <h1>포켓몬 목록</h1>
            <input type="search" name="pokemonName" onChange={e => setSearchValue(e.target.value)}></input>
            <button coClick={onClickHandler}> 검색 </button>
            <div>
                {pokemonList.map(pokemon => <PokemonItem key={pokemon.name} pokemon={pokemon} />)}
            </div>
            <div>
                <button onClick={onPreviousClick} disabled= {current ===1? true: false}>이전</button>
                <button onClick={onNextClick}>다음</button>
            </div>
        </div>
    );

}

export default PokemonInfo;