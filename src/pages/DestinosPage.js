import React from "react";
import { Link } from "react-router-dom";

const DestinosPage = (props) => {
    return (
        <main className="holder">
        <h1>Conocé nuestros destinos</h1>
        <div className="destinos">

        <Link to="/destinos/pinadeptos">    
            <div className="destino">

                <h4>Pinamar</h4>
                <div className="imagen"> <img src="/pinamar.jpeg"/> </div>
                <div className="texto">
                    <p> Pinamar es lindo en sus cuatro estaciones del año. Su clima es templado y húmedo de transición
                        que permite disfrutar de inviernos suaves y veranos cálidos. Las temperaturas varían según la
                        estación y propician un paisaje distinto y alternativo para cada gusto.</p>
                </div>
            </div>
            </Link>

            

           

            <Link to="/destinos/santadeptos"> 
            <div className="destino">

                <h4>Santa Teresita</h4>
                <div className="imagen"> <img src="/santateresita.jpg"/> </div>
                <div className="texto">
                    <p> En Santa Teresita encontrarás las mejores playas de la costa argentina, al igual que un
                        maravilloso centro peatonal.</p>
                </div>
            </div>
            </Link>

        </div>
        







    </main>

    );


}

export default DestinosPage;