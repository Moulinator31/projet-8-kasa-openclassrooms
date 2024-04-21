import { Link } from "react-router-dom";
import footer from "../assets/Pictures/LogoFooter.png";
import "../styles/Footer.css";



function Footer (){
        const currentYear = new Date().getFullYear();
    return <footer className="footer">
                <Link to="/">
                <img src={footer} alt="Kasa"className="picture" />
                </Link>

                <h5>© {currentYear} Kasa. All rights reserved</h5>
        </footer>
    
}

export default Footer