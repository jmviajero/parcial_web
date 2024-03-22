import { FreshContext, Handlers } from "$fresh/server.ts";
import Clientside from "../../islands/Clientside.tsx";


export const handler: Handlers = {
    GET: async(req: Request, ctx:FreshContext) => {

       const {word} = ctx.params



        const response = await fetch ("https://api.dictionaryapi.dev/api/v2/entries/en_US"+ word)

        if(!response.ok){
            throw new Response("Error buscando libros", {status: 500});
        }

        const data = await response.json();

        console.log(data)
        
        return new Response(JSON.stringify(data[0]), {
            headers: {"Content-Type": "aplication/json"}
        })
    }
}
