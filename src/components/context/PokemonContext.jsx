import { createContext, useState } from "react";
import { formatAbily, formatStats, formatTypes } from "../helpers/Pokemon";

const PokemonContext = createContext();


const PokemonProvider = ({children}) => {
    const [pokemonDetail, setPokemonDetail] = useState(null);
    const [showDetailPokemon, setShowDetailPokemon] = useState(false);

    const showPokemon = (pokemonInfo) => {

        console.log(pokemonInfo)

        const {id, name, height, weight, stats, types, abilities} = pokemonInfo;


        console.log({
            id,
            name,
            height,
            weight,
            stats: formatStats(stats),
            types: formatTypes(types),
            abilities: formatAbily(abilities),
        
        });



        
        setPokemonDetail({
        });

        setShowDetailPokemon(true)
    }

const closePokemonDetail = () => {
    setShowDetailPokemon(false)
}

    return (
    <PokemonContext.Provider
    value={{ showDetailPokemon, showPokemon, closePokemonDetail }}
    >
        {children}
    </PokemonContext.Provider>
    );
};

export {PokemonContext, PokemonProvider}