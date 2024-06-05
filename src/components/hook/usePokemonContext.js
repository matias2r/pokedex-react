import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"


const userPokemonContext = () => useContext(PokemonContext);

export default userPokemonContext;