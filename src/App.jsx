import Pokemons from "./components/Pokemons"
import Aside from "./components/Aside"

function App() {
  return (
    <section>
    <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px] h-screen font-mono bg-[#F6F8FC]">
      <Pokemons />
      
    </main>
    </section>
  )
}

export default App
