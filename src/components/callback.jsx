import React, { useCallback, useState } from "react";
import { Heading } from "./context";

const Callback=props=>{
    const [state , setstate] = useState(0);

    const add_one = useCallback(props=>{  //memorizes function call
        setstate(state+1);
    } , [state])

    var list = [];

    for (let i=0 ; i< 5 ; i++){
        list.push(<Label onClick= {add_one} key={i} >{state} key is {i}</Label>);
    }

    return (
        <div className="wrapper">
            <Heading>useCallback</Heading>
            { list }
        </div>
        );
}

const Label=props=>{
    return (
        <label onClick={props.onClick} style = {{ fontSize:"25px" , display:"block",
         margin:"10px auto" , ...props.style}} >{props.children}</label>
    );
}

export default Callback;
