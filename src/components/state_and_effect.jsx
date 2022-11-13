import React, { useEffect, useState } from "react";
import { Heading } from "./context";


const StateAndEffect= props=>{


    const [counter , setcounter] = useState( 0 );

    useEffect( ()=>{
        document.title = `hello ${counter}`;
    },[counter])

    const add_one =()=>{
        setcounter(counter+1);
    }

    return (<div className="wrapper">

        <Heading>useState and useEffect</Heading>
        <label style = {{fontSize : "30px"}}>{counter} </label>

        <ButtonComponent onClick= {add_one} > Add one</ButtonComponent>

<label style = {{fontSize : "30px", display:"block" , margin:"20px auto"}}>useEffect changing title of window </label>

        </div>

    );
}

const ButtonComponent= props=>{
    return (
        <button onClick={props.onClick} style={{fontSize: "25px" ,
    borderRadius: "25px", ...props.Style
    }} >{props.children}</button>
    )
}



export default StateAndEffect;
export {ButtonComponent};