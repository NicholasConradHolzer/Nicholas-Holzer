import React from "react";
import about from "../../assets/images/hero.jpg";

export default function About(){
    return(
        
        <div id="me">
           
		   <section id="about-nick" className="">

				<h2 className="section-title">
					About Me
				</h2>
				<p className="backText fullWide chapterSize">
					Using a Diverse Career History<br/>
					to Deploy Versatility in<br/>
					Problem Solving
				</p>

				<div id="aboutCard">
					<div className="about-pic">		
						<img src={ about } />
					</div>
					<div className="info-box">
						<article>
							<p>
								My Name is Nicholas Holzer; a student of Website Development, and Computing Technology Enthusiast.<br/>
								My longterm goals include development of my own app systems and breaking ground in new AI cognizing methods.<br/>
								Thank you very much for checking out my portfolio today; enjoy your visit, and <br/>
								reach out if you like what you see!
							</p>
						</article>
					</div>
				</div>

			</section>
        </div>
        
    )
}