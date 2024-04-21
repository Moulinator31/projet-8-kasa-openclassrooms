import "../styles/Host.css"

function Host({picture, name}) {
    return (
        <div className="hostPosition">
            <img className="hostPicture" src={picture} alt={name}></img>
            <span className="hostName">{name}</span>
        </div>
        )

}
export default Host;