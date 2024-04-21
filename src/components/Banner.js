import "../styles/Banner.css"

function Banner({ img, text }) {
    return <section className="picturesBanner">
            <img src={img} className="banner" alt="banner landScape" />
            <h1>{text}</h1>
        </section>
}

export default Banner