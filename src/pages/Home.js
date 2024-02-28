import logements from "../assets/data/logement.json";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Banner from "../components/Banner";
import banner from "../assets/banner.png"

function Home() {
    return  <div>
        <div className="picturesBanner">
            <Banner img={banner} text={"Chez vous, partout et ailleurs"} />
        </div>

        <div className="backCardsHome">
            
            <section className="cardsPosition">
                {logements.map((logement) => {
                    return (
                        <Link className="paddingCard" to={`/logement/${logement.id}`}>
                            <Card key={logement.id} cover={logement.cover} title={logement.title} />
                        </Link>
                    )
                })}
            </section>
        </div>
        </div>
    ;

}
export default Home;