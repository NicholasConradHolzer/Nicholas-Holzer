

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
                    <li>Technical Expert <a href="https://www.youtube.com/watch?v=bC2rlhbgmqs">&</a> IT Solutions</li>
                </ul>
            </div>
        </div>
    </div>
    )
}