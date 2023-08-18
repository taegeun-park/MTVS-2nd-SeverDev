import itemStyle from './MenuItem.module.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPokemonImage } from '../apis/MenuAPIs';

function PokemonItem({ pokemon }) {

    const [image, setImage] = useState('');

    useEffect(
        () => {
            getPokemonImage(pokemon.url).then(
                image => {
                    setImage(image)
                }
            )
        },
        []
    )

    return (

        <div className={itemStyle.PokemonItem}>
            <h3>이름 : {pokemon.name} </h3>
            <Link to={`/pokemon/${pokemon.name}`}>
                <img src={image} style={{ maxWidth: 1000 }} />
            </Link>
        </div>
    )
}

export default PokemonItem;