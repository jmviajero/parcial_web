import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";
import Mostrarpalabra from "../components/Mostrarpalabra.tsx"

type definitions = {
    definition: string,
    example?: string
}

type meanings = {
    meanings: definitions[]
}

export type palabra = {
    word: string,
    definitions: meanings
}

const Clientside:FunctionComponent = () => {

    const [palabra, setpalabra] = useState<palabra>({
        word: "",
        definitions: {meanings: []}
    })

    const consultarpalabra = async () => {
        console.log(palabra.word)
        const response = await fetch(`/api/palabra/${palabra.word}`);
        
        if (!response.ok) {
            throw new Error("Error al buscar palabras")
        }

        const data = await response.json();
        setpalabra(data);
    }

    return (
    <div>

       
            <input type={"text"}  name={"word"} value={palabra.word} placeholder={"type a word"}/>
            
            <button type={"submit"} onClick={consultarpalabra}>Search</button>

        {palabra.word !== "" && <Mostrarpalabra word={palabra.word} definitions={palabra.definitions}/> }
        {palabra.word === "" && <h3>No se ha rellenado el campo</h3> }        

    </div>
    )
}


export default Clientside