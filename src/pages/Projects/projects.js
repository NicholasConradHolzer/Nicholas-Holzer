import React from "react";
import ProjMod from "../../components/ProjMod/projmod.js";
import nyango from "../../assets/images/project-nyango.PNG";
import watchBox from "../../assets/images/project-box.PNG";
import runBuddy from "../../assets/images/project-runbuddy.PNG";
import horiseon from "../../assets/images/project-horiseon.PNG";
// import  from "../../assets/images/";


export default function Projects(){
    const projectArray = [
        {
            title: 'Fanpage: Nyango-Starr',
            image: nyango,
            alt:'homepage for Nyango-Starr Fanclub',
            linkDeployed: 'https://nicholasconradholzer.github.io/NHolzerNyangoStarr/',
            // linkGithub:'',
            description:'A Fanpage for Japanese Mascot/Drummer/Apple-Cat Nyango Starr; featuring embedded youtube video as a background color for the site.',
            tech:''
        },
        {
            title: 'My "Watch-the-Box" Page',
            image: watchBox,
            alt:'homepage for Watch-the-Box',
            linkDeployed: 'https://nicholasconradholzer.github.io/boxManipulator/',
            // linkGithub:'',
            description:'A "Watch-the-Box" page; with buttons that use javascript to directly alter the CSS styling of a colored-box.',
            tech:''
        },
        {
            title: 'Homepage: Run-Buddy, Inc.',
            image: runBuddy,
            alt:'homepage for "Run-Buddy, Inc."',
            linkDeployed: 'https://nicholasconradholzer.github.io/run-buddy/',
            // linkGithub:'',
            description:'The homepage and privacy policy page of Run-Buddy, Inc., featuring advanced applications of CSS for both user responsiveness and screensize-disparity formatting.',
            tech:''
        },
        {
            title: 'Homepage: Horiseon, Inc.',
            image: horiseon,
            alt:'homepage for "Horiseon, Inc."',
            linkDeployed: 'https://nicholasconradholzer.github.io/Horiseon-refactored.home/',
            // linkGithub:'',
            description:'The homepage for Horiseon, Inc.; refactored for accsesability, development ease-of-use, and corrective-debugging.',
            tech:''
        }]
    return(
        <div id="work-samples-nick" className="work-display chapterSize">
        <div id="samplesHolder">
            <h2 className="section-title">
                My Work Samples
            </h2>
        </div>
            <div id="projectHolder">
                {projectArray.map((project, index)=>(
                    <ProjMod key={index} project = {project}></ProjMod>
                ))}
            </div>
        </div>
    )
}