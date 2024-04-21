import { NavLink } from "react-router-dom";
import "../styles/Error.css";

function Error() {
    return (
        <div className="positionBody">
            <h4 className="error">404</h4>
            <h4 className="messageError">Oups! La page que vous demandez n'existe pas.</h4>
            <NavLink to="/" className="return">
                Retourner sur la page d'accueil
            </NavLink>
        </div>
    )
}

export default Error