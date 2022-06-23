import React from "react";
import Nav from "../Nav/nav.js";

export default function Header(props){
    return(
        <div id="header">
            {/* img of me */}
            Nicholas Holzer
            <div className="subhead">
                MERN Developer
            </div>
            <Nav 
            setCurrentCategory={props.setCurrentCategory}
        currentCategory={props.currentCategory} />
        </div>
    )
}