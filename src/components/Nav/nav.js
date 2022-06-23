import React from "react";

export default function Nav(props){

    const introHead = () =>{
        if(props.currentCategory==="Intro"){
            return "introNav"
        } else {
            return "stanHead"
        }
    }
    
//conversion of these disparet functions

    
    return(
        <div id="nav" className={ introHead() }>
            <button id="about" className={props.currentCategory === "About" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("About")}>About</button>
            <button id="contact" className={props.currentCategory === "Contact" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Contact")}>Contact</button>
            <button id="projects" className={props.currentCategory === "Projects" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Projects")}>Projects</button>
        </div>
    )
}