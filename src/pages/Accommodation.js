import React from "react"
import logements from "../assets/data/logement.json";
import "../styles/Cards.css"
import { useParams } from "react-router-dom";
import "../styles/Logement.css"
import Tag from "../components/Tag";
import Host from "../components/Host";
import Rate from "../components/Rating";
import ImageSlider from "../components/Carousel";
import Collapse from "../components/Collapse";
import Error from "./Error";



function Accommodation() {

    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

  
    if (!logement) { // Si l'id n'existe pas, affiche la page d'erreur
        return (<Error />);
    }
  
    const {  
      description,
      title,
      location,
      host: { name, picture },
    } = logement;

    return  <section className="bodyAccomodation">
                    <ImageSlider slides={logement?.pictures} />
                <div className="positionNameRatingHostTag">
                    <figure className="positionName">
                        <h4 className="nameLogement">{title}</h4>
                        <h4 className="nameCity">{location}</h4>
                        <div className="positionTags"> 
                            {logement?.tags.map((tags, i) => {
                            return <Tag key={i} tags={tags} />
                            })}
                        </div>
                    </figure>
                    <div className="PositionPictureRating">
                        <Rate score={logement.rating} />
                        
                        <Host picture={picture} name={name}/>

                    </div>
                </div>
                <section className="positionDescription">
                    <Collapse title="Description" content={description} />
                    
                    <Collapse title="Equipements" content={<ul className="contentEquipments">
                                {logement.equipments.map((equip, index) => {
                                    return <li key={`${index}${equip}`}>{equip}</li>;
                                })}
                            </ul>} />
                        
                    
                </section>
            </section>
    
    ;
}
export default Accommodation
