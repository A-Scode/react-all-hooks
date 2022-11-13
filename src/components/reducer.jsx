import React, { useReducer } from "react";
import { ButtonComponent } from "./state_and_effect";
import { Heading } from "./context";


const reducer_function = ( state , action)=>{
    switch (action){
        case "inc":
            return state+1;
        case "dec":
            return state-1;
        default:
            console.log("error")
            return state;
    }

}

const Reducer = props=>{

    const [state , dispatch ]  = useReducer(reducer_function , 0)
    // multiple actions on a state

    return(
        <div className="wrapper" style={ { margin:"20px auto"}}>
            <Heading>useReducer</Heading>
            <ButtonComponent onClick = {()=>dispatch("inc")} >+1 </ButtonComponent>
            <label style = {{fontSize:"25px",margin:"auto 15px"}}>{state}</label>
            <ButtonComponent onClick = {()=>dispatch("dec")} >-1 </ButtonComponent>

        </div>
    );

}


export default Reducer;