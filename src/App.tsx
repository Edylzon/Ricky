
import ricky from "./assets/rick-morty.png"
import { useState } from "react";
import { Characters } from "./components/Character";
function App() {
  const [characters, SetCharacter] = useState(null)

  const raqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json()

    SetCharacter(characterApi.results)
  }

  return (
    <>

      <div className="App">
        
          <h1 className="title text-center">Rick & Morty</h1>
          {characters ? (
            <Characters characters={characters} SetCharacter={SetCharacter} />
          ) : (
            <>
              <div className="ajustar">
                <img src={ricky} alt="Rick & Morty" className="img-home" />
                <button className="btn-search text-center pdt " onClick={raqApi}>Buscar Personajes</button>
              </div>
            </>
          )}
       
      </div>


    </>
  )
}

export default App
