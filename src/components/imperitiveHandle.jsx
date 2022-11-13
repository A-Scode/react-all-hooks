import React, { useImperativeHandle, useState } from "react";
import { Heading } from "./context";

const ImpHandle=(props , ref)=>{

    const [state , setState] = useState(true);

    // overwrite the ref that passed by parent component 
    // allow to controll component from outsite 
    // hence creates a portal
    useImperativeHandle(  ref, ()=>{ return {
        changeState: ()=>changeState()
    };} , [state])

    const changeState=()=>{
        setState(!state);
    }

    return (
        <div className="wrapper">
        <Heading>useImperativeHandle</Heading>
        <label  style={{display:"block",fontSize:"25px" , padding:"10px"}} >My State is {state?"true":"false"}</label>
        </div>
    );
}


export default React.forwardRef(ImpHandle);