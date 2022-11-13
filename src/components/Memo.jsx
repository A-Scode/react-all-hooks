import React, { useContext, useMemo } from "react";
import { ThemeContext } from "../App";
import { Heading } from "./context";
import { ButtonComponent } from "./state_and_effect";

const Memo = props=>{

    var theme = useContext(ThemeContext);
    const mem_fun = useMemo(()=>{
        console.log("memo");
        return theme === "dark"?1:2;
    },[theme])

    return ( <div className="wrapper">
        <Heading>useMemo</Heading>
        <ButtonComponent onClick={()=>console.log(mem_fun)}>Memo on Theme</ButtonComponent>

    </div>
    );
}

export default Memo;