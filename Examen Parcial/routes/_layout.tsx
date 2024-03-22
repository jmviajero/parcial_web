import { FreshContext } from "$fresh/server.ts";
import { FunctionComponent } from "preact";
import Menu from "../components/Menu.tsx";


export type selecionar = {
    selected: "Client" | "Server"
}


const Layout  = (ctx: FreshContext<unknown,selecionar>) => {
    const Component = ctx.Component;
    const route = ctx.route;

    const page = route.split('/').pop();

    const selected = page === "" ? "Client" : "Server";

    return (
    <div>
        <Menu selected={selected}/>
        <Component/>
    </div>
    )
}

export default Layout;