import Pokemons from "./components/Pokemons"
import Aside from "./components/Aside"
import ModalPokemon from "./components/ModalPokemon"
import userPokemonContext from "./components/hook/usePokemonContext"

function App() {

const {showDetailPokemon, closePokemonDetail } = userPokemonContext();



  return (
    <section>
    <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] h-screen font-mono bg-[#F6F8FC]">
      <Pokemons />
      <Aside/>
      <ModalPokemon showModal={showDetailPokemon} onCloseModal={closePokemonDetail}/>
    </main>
    </section>
  )
}

export default App
