import '../styles/Header.css'
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png'
import Banner from "../components/Banner";




function Header() {

    return  <header className='lmj-banner'>
      <div className='position-header'>
    <Link to="/">
    <img src={logo} alt="Kasa" className="header_logo" />
    </Link>

    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav_link" : "nav_link"
        }
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav_link" : "nav_link"
        }
      >
        A Propos
      </NavLink>
    </nav>
    </div>
    <div>
      <Banner />
    </div>
  </header>
;
}


export default Header