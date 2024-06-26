import { useEffect, useState } from "react"
import axios from "axios"
import { colorByType } from "./colorType/pokemontype";

const PokemonPreview = ({pokemonURL}) => {
const [pokemon, setPokemon] = useState(null);


useEffect(() => {
    axios
    .get(pokemonURL)
    .then(({data}) => setPokemon(data))
    .catch((err) => console.log(err));
    }, [])

return (
<article className="text-center bg-white rounded-[30px] relative font-semibold capitalize pb-4 shadow-lg shadow-slate-400/20
border-2 border-transparent hover:border-slate-200 cursor-pointer hover:scale-105 transition-transform grid gap-2">
    <header className="h-9 ">
        <img className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 pixelated"
        src={pokemon?.sprites.versions["generation-v"]["black-white"].front_default} alt="" />
    </header>
    <span className="text-sm text-slate-400">N°{pokemon?.id}</span>
    <h4 className="text-lg">{pokemon?.name}</h4>
    <ul className="flex gap-2 justify-center text-sm">

        {pokemon?.types.map((type) => (
        <li className={` p-1 rounded-md px-2 text-white ${
            colorByType[type.type.name]
        }`}
        key={type.type.name}>{type.type.name}</li>
        ))}

    </ul>
</article>
)
}

export default PokemonPreview