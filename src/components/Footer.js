import footer from "../assets/LogoFooter.png";
import "../styles/Footer.css";


function Footer (){
    return <footer className="footer">

                <img src={footer} alt="Kasa"className="picture" />
                <h2>© 2020 Kasa. All rights reserved</h2>
            
        </footer>
    
}

export default Footer