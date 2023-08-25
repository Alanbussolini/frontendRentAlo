import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/destinos">Destinos</Link></li>
                    <li> <Link to="/nosotros">Sobre Nosotros</Link></li>
                    <li> <Link to="/contacto">Contacto</Link></li>
                    <li> <Link to="/novedades">Novedades</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;