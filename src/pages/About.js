import Banner from "../components/Banner"
import bannerAbout from "../assets/Pictures/bannerAbout.png"
import '../styles/Banner.css'
import '../styles/About.css'
import React from 'react'
import about from "../assets/data/about.json";
import Collapse from "../components/Collapse"


function About() {
    return <div>
            <Banner img={bannerAbout} />

            <section className="PositionList">
                {about.map((About, key) => {
                    return (
                        <Collapse  key={key} content={About.content} title={About.title} />
                    )
                })}
            </section>
        </div>
}

export default About