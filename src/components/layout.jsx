import React, { useLayoutEffect, useRef } from "react";
import { Heading } from "./context";

const Layout=props=>{
    const ref = useRef(null);


    //runs before painting the DOM and after rendering DOM
    useLayoutEffect(()=>{
        ref.current.innerText = `Body Height is ${document.body.getBoundingClientRect().height}`;
    } , [ref])


    return (
        <div className="wrapper">
        <Heading >useLayoutEffect</Heading>
        <label ref = {ref} style = {{fontSize:"25px" , display:"block"}}></label>
        </div>
    );
}

export default Layout;