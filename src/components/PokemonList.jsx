import PokemonPreview from "./PokemonPreview"
import userPokemonContext from "./hook/usePokemonContext";


const PokemonList = ({pokemons}) => {
 const {showPokemon} = userPokemonContext();
 
  return (
    <section className="pt-14 grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] gap-5 gap-y-14">
        {
            pokemons.map((pokemon) => (
            <PokemonPreview key={pokemon.url} pokemonURL={pokemon.url} onClick={showPokemon}/>
        )) }
    </section>
  );
};

export default PokemonList