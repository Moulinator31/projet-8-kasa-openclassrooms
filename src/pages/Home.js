import logements from "../assets/data/logement.json";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Banner from "../components/Banner";
import banner from "../assets/Pictures/banner.png"

function Home() {
    return <main>
            <Banner img={banner} text={"Chez vous, partout et ailleurs"} />

        <section className="cardsPosition">
                {logements.map((logement, key) => {
                    return (
                        <Link className="paddingCard" to={`/Accommodation/${logement.id}`} key={key}>
                            <Card key={logement.id} cover={logement.cover} title={logement.title} />
                        </Link>
                    )
                })}
        </section>
    </main>
        ;

}
export default Home;