import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

export function Characters(props: { characters: any; SetCharacter: any; }) {

  const { characters, SetCharacter } = props;
  const resetCharacters = () => {
    SetCharacter(null)
  }

  return (
    <>
      <div className="Characters">
        <h1 className="text-amber-50 text-center font-semibold text-lg ">
          Personajes  <br />
          <span className="back-home" onClick={resetCharacters}>volver a la Home</span>
          <div className="container-characters">
            {characters.map((characters: { image: string | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; status: string; episode: string | any[]; species: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, index: Key | null | undefined) => (
              <div className="character-container" key={index}>
                <div>
                  <img src={characters.image} />
                </div>

                <div >
                  <h1 className="text-center ">{characters.name} </h1>
                  <br />
                  <h1 className="text-center  ">
                    {
                      characters.status == "Alive" ? (
                        <>
                          <p className="alive">
                            <br />
                            Alive
                          </p>
                          <br />
                        </>
                      ) : (
                        <>
                          <span className="dead "> <br /> Dead </span>
                        </>
                      )
                    }
                  </h1>
                  <h3>
                    <p>
                      <span className="text-gray-400">
                        <br /> EPISODIOS:</span>
                      <span > {characters.episode.length} </span>
                    </p>
                  </h3>
                  <h4>
                    <p>
                      <span className="text-gray-400">ESPECIE:</span>
                      <span> {characters.species} </span>
                    </p>
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <span className="back-home" onClick={resetCharacters}>volver a la Home</span>
        </h1>
      </div>


    </>
  )
}

