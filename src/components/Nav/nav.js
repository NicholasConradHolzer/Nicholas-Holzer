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
            <ul>
                <li>
                    <a id="about" className={props.currentCategory === "About" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("About")}>About</a>
                </li>
          
                <li>
                    <a id="projects" className={props.currentCategory === "Projects" ? 'navActive' : 'navInactive'} onClick={() =>props.setCurrentCategory("Projects")}>Projects</a>
                </li>
            </ul>
        </div>
    )
}