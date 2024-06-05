import axios from "axios";
import { useEffect, useState } from "react";
import { IconPokeball } from '@tabler/icons-react';
import PokemonList from "./PokemonList";


const Pokemons = () => {
const [allPokemons, setAllPokemons] = useState([]);
const [pokemonName, setPokemonName] = useState(" ");

const pokemonsByName = allPokemons.filter((pokemon) => pokemon.name.includes(pokemonName));

const handleChangePokemonName = (e) =>
    setPokemonName(e.target.value.toLoweCase());

const handleSubmit = (e) => {
    e.preventDefault();
   setPokemonName(e.target.pokemonName.value);
};

useEffect (() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=50")
    .then(({data}) => setAllPokemons(data.results))
    .catch((err) => console.log(err));
}, [])



    return <section className="p-4 py-5">
        <form onSubmit={handleSubmit}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon Logo" className="p-5 w-40 "/>
         <div className="bg-white p-5 flex rounded-3xl text-lg shadow-lg">
            <input className="outline-none flex-1"
            type="text"
            placeholder="Busca tu Pokémon"
            name="pokemonName"
            autoComplete="off"
            onChange={handleChangePokemonName}
            />
            <button className="bg-red-500 p-2 rounded-xl shadow-lg shadow-red-500/60 hover:bg-red-400 transition-colors ">
                <IconPokeball color="white" stroke={2}/>
            </button>
         </div>
        </form>
       <PokemonList pokemons={pokemonsByName}/>
    </section>;
};



export default Pokemons;