import React from "react";
import ProjMod from "../../components/ProjMod/projmod.js";
// import good from '../utils/images/good.png'
// import devspark from '../utils/images/devspark.png'
// import movie from '../utils/images/moviefetch.png'
// import shop from '../utils/images/shop.png'
// import note from '../utils/images/niftynotes.png'
// import weather from '../utils/images/whereweather.png'


export default function Projects(){
    const projectArray = [
        {
            title: 'Fanpage: Nyango-Starr',
            // image: devspark,
            alt:'homepage for Nyango-Starr Fanclub',
            linkDeployed: 'https://nicholasconradholzer.github.io/NHolzerNyangoStarr/',
            // linkGithub:'',
            description:'A Fanpage for Japanese Mascot/Drummer/Apple-Cat Nyango Starr; featuring embedded youtube video as a background color for the site.',
            tech:''
        },
        {
            title: 'My "Watch-the-Box" Page',
            // image: movie,
            alt:'homepage for Watch-the-Box',
            linkDeployed: 'https://nicholasconradholzer.github.io/boxManipulator/',
            // linkGithub:'',
            description:'A "Watch-the-Box" page; with buttons that use javascript to directly alter the CSS styling of a colored-box.',
            tech:''
        },
        {
            title: 'Homepage: Run-Buddy, Inc.',
            // image: good,
            alt:'homepage for ',
            linkDeployed: 'https://nicholasconradholzer.github.io/run-buddy/',
            // linkGithub:'',
            description:'The homepage and privacy policy page of Run-Buddy, Inc., featuring advanced applications of CSS for both user responsiveness and screensize-disparity formatting.',
            tech:''
        },
        {
            title: 'Homepage: Horiseon, Inc.',
            // image: shop,
            alt:'homepage for ',
            linkDeployed: 'https://nicholasconradholzer.github.io/Horiseon-refactored.home/',
            // linkGithub:'',
            description:'The homepage for Horiseon, Inc.; refactored for accsesability, development ease-of-use, and corrective-debugging.',
            tech:''
        }]
    return(
        <div id="projectHolder">
        {/* <div id="projectPage"> */}
            {projectArray.map((project, index)=>(
                <ProjMod key={index} project = {project}></ProjMod>
            ))}
			<a id="returnBut" href="">Intro</a>
        </div>
    )
}