

import React from "react";
import profile from "../../assets/images/FtLewisNick.jpg";

// import profile from '../utils/images/profile.png'

export default function Intro(){
   
    return(
        

       

        <div id="hero" class="chapterSize">
            
        <div id="moodSet">
            <h1>
                <a id="selfTitle" href="">
                    Nicholas Holzer
                </a>
            </h1>
            <img className="" src={profile} />
            <div id="moodCard" class="carderizer">
                <ul>
                    <li>Web-Site + Application Developer</li>
                </ul>
            </div>
        </div>
    </div>
    )
}