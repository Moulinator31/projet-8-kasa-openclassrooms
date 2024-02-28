import "../styles/Banner.css"

function Banner ({img, text}){
    return <div>
                <img src={img} className="banner" />
                <h1>{text}</h1>
            </div>
}

export default Banner