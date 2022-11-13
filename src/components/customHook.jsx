import React, { useDebugValue, useEffect, useRef, useState } from "react";
import { Heading } from "./context";
import { ButtonComponent } from "./state_and_effect";

//custom Hook
function useCustomHook(ref , init){
    const [State  , setState] = useState(init);

    useEffect(()=> {
        console.log(ref.current.style.fontSize.slice(0, ref.current.style.fontSize.length -2));
        ref.current.style.fontSize = (Number(ref.current.style.fontSize.slice(0, ref.current.style.fontSize.length -2))+1 )+"px";

    }, [State ]);

    useDebugValue(State?? "loading...");

    return [State,setState];
}


const Hook=props=>{

    const ref = useRef(null);
    const[bool , setbool] = useCustomHook(ref , false);

    const changeState = ()=>setbool(!bool)


    return( <div className="wrapper">
        <Heading>useDebugValue and customHook</Heading>
        <label ref = {ref} style = {{display:"block" , fontSize:"25px"}}>HelloHooks</label>
        <ButtonComponent onClick= {changeState} >Change Custom Hook</ButtonComponent>
        </div>

    )
}

export default Hook;