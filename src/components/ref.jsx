import React, { useRef } from "react";
import { Heading } from "./context";


const Ref=props=>{

    const ref = useRef({}); //same as state but wihout triggering re-render

    const changeLabel = ()=>{
        ref.current.label.innerText = ref.current.input.value
    }

    const setInput = el=> ref.current.input = el;



    return (
        <div className="wrapper">
            <Heading > useRef</Heading>
            <InputText type={"text"}            
            onInput = {changeLabel} refrence = {setInput} />
            <label style={{display:"block",fontSize:"20px"}}  ref = {el=>ref.current.label = el} ></label>
        </div>
    );
}

const InputText= props=>{
    return (
        <input type = {props.type} onInput = {props.onInput}  value = {props.value}
        style = {{ fontSize : "20px", borderRadius:"20px", padding: "5px 10px",...props.style}} ref = {props.refrence} />
    );
}


export default Ref;