import React from "react";
import Nav from "../Nav/nav.js";

export default function introHead(props){
    return(
        <div id="header">
            {/* img of me */}
            Nicholas Holzer
            <div className="subhead">
                Full-Stack Developer
            </div>
            <Nav 
            setCurrentCategory={props.setCurrentCategory}
        currentCategory={props.currentCategory} />
        </div>
    )
}