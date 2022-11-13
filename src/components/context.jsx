import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { ButtonComponent } from "./state_and_effect";


const ContextChange= props=>{
    var theme = useContext(ThemeContext);
    return (<>
        <Heading >useContext and createContext</Heading>
        <ButtonComponent onClick={props.toggleTheme}>Enable {theme ==="dark"?"light": "dark"}</ButtonComponent>
            </>
    );
}



const Heading =props=>{
    return (
        <h1>{props.children}</h1>
    )
}

export default ContextChange;
export {Heading};