import React from "react";


const NosotrosPage = (props) => {
    return (
        <main className="holder">

        <div className="historia">
            <h1>Historia</h1>
            <p> RentAlo comezó como un proyecto allá por el 2012, cuando dos amigos estaban planeando un viaje a México,
                y se dieron cuenta que no existía otra opción de alojamiento que no sean hoteles. Entonces decidieron
                alquilar solo dos noches en un hotel, con el objetivo de hallar un departamento.</p>
            <p>Su sorpresa fue enorme al llegar al destino, y darse cuenta de la cantidad de departamentos y complejos
                vacacionales que existían. Por eso, ni bien volvieron de sus vacacioes, y gracias a sus básicos
                conocimientos en desarrollo web, Juan Alcorta y Osvaldo Junin, se pusieron manos a la obra para crear
                RentAlo, una plataforma que tiene como objetivo juntar en un mismo lugar las opciones de alquiler
                vacacional en distintos destinos.</p>
            <p>Es así como hoy, diez años después de su lanzamiento, RentAlo continua expandiendose, sumando cada vez
                más departamentos, habitaciones y hasta casas compartidas, en múltiples destinos y a precios económicos.
            </p>
        </div>

        <div className="staff">
            <h2>Staff</h2>
            <div className="personas">
                <div className="persona">
                    <img src="/perfil 3.jpg"/>
                    <h4>Juan Alcorta</h4>
                    <h5>Co-Founder y CEO</h5>
                    <p> Juan Alcorta es Licenciado en Administración de la Universidad de Buenos Aires.</p>
                    <p>Acutalmente ocupa el puesto de director ejecutivo en RentAlo debido a su amplio conocimiento del
                        negocio y experiencia dentro del mundo de la administración.</p>
                </div>
                <div className="persona">
                    <img src="/perfil1.jpg"/>
                    <h4>Osvaldo Junin</h4>
                    <h5>Co-Founder y CTO</h5>
                    <p>Osvaldo Junin es Ingeniero Electrónico de la Universidad Técnica Nacional.</p>
                    <p>Actualmente ocupa el puesto de director de innovaciones tecnológicas, y es el encargado de
                        encontrar destinos apropiados para nuestra continua expansión.</p>
                </div>
                <div className="persona">
                    <img src="/perfil2.webp"/>
                    <h4>Laura Hermínedes</h4>
                    <h5>UX Manager</h5>
                    <p>Tras una amplia experiencia en el sector UX y UI, Laura Hermínedes se unió al equipo de RentAlo
                        para asegurarle una excelente al usuario. </p>
                    <p>Este puesto es fundamental, ya que día a día es la encargada de coordinar tanto diseñadores, como
                        así programadores, para hacer que la interfaz se convierta en su mejor versión, trayendo
                        comodidad para el usuario a la hora de alquilar un departamento.</p>
                </div>


            </div>

        </div>






    </main>

    );


}

export default NosotrosPage;