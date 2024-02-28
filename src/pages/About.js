import Banner from "../components/Banner"
import bannerAbout from "../assets/bannerAbout.png"
import '../styles/Banner.css'
import'../styles/About.css'
import React from 'react'
import about from "../assets/data/about.json";
import Collapse from "../components/Collapse"


function About(){
    return <div>
        <header className="picturesBanner" >
            <Banner img={bannerAbout} />
        </header>

        <section className="PositionList">
            {about.map((About) => {
                return (
                    <Collapse content={About.content} title={About.title} />
                )
            })}
        </section>
    </div>
}

export default About