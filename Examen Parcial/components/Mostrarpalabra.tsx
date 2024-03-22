import { FunctionComponent } from "preact";
import { palabra } from "../islands/Clientside.tsx";



const Mostrarpalabra: FunctionComponent<palabra> = (props) => {

    return(
        <div>
            <h1>{props.word}</h1>
            {props.definitions.meanings.map((a) => {
                return(
                    <div key={props.definitions}>
                    <h3>Definitions</h3>
                    <h3>{a.definition}</h3>
                    {a.example && <div>
                        <h3>Example</h3>
                        <h3>{a.example}</h3>
                       </div> }
                    </div>
                )
            })}
        </div>
    )
} 

export default Mostrarpalabra;