import React from "react";
import Nav from "../Nav/nav.js";


export default function Header(props){
    const subHead = () =>{
        if(props.currentCategory==="Intro"){
            return ""
        } else {
            return "noDisp"
        }
    }
    return(
        <div id="header">
            {/* img of me */}
            <h1>Nicholas Holzer</h1>
            
            <h2 className={ subHead() }>
                Full Stack Developer
            </h2>
            <Nav 
            setCurrentCategory={props.setCurrentCategory}
        currentCategory={props.currentCategory} />
        </div>
    )
}