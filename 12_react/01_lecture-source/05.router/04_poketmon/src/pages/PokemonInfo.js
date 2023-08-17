import { useEffect, useState} from "react";
import Pokedex from "../data/Pokedex";

function PokemonInfo() {

    Pokedex

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