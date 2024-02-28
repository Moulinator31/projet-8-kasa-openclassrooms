import Banner from "../components/Banner"
import bannerAbout from "../assets/bannerAbout.png"
import '../styles/Banner.css'
import'../styles/About.css'
import React from 'react'
import about from "../assets/about.json";
import Collapse from "../components/Collapse"


function About(){
    return <div>
        <div className="picturesBanner" >
            <Banner img={bannerAbout} />
       
        </div>
        <div>
            <section>
            {about.map((About) => {
                return (
                    <ul className="PositionList">
                        <Collapse content={About.cover} title={About.title} />
                    </ul>
                )
            })}
            </section>
           
        </div>
    

    </div>
}

export default About