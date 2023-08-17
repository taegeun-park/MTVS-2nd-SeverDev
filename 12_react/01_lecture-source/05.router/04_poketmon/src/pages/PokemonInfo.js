import { useEffect, useState} from "react";

function PokemonInfo() {

    const [pokeList, setPokeList] = useState([]);
    useEffect(
        () => {
            setPokeList(Pokedex())
        }
    )

    return (
        <>
            <h1>포켓몬 목록</h1>
        
            <div>
                {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
            </div>
        </>
    );

}

export default PoketmonInfo;