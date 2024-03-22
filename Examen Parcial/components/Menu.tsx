import { FunctionComponent } from "preact";
import {selecionar} from "../routes/_layout.tsx"


const Menu: FunctionComponent<selecionar> = ({selected}) => {
    return(
        <div>
        <div class={"separar"}>
            <a href={"/wordcsr"}>Client Side</a><br></br>
            <a href={"/wordssr"}>Server Side</a>
        </div>
        <h1>My Dictionary</h1>
        </div>
    )
} 

export default Menu;