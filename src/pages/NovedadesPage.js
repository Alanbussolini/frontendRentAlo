import { useState, useEffect } from "react";
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';



const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [novedades, setNovedades] = useState([]);

    useEffect(() => {
        const cargarNovedades = async () => {
            setLoading(true);
            //const response = await axios.get('${process.env.REACT_APP_API_URL}/api/novedades'); M6U4
            const response = await axios.get('http://localhost:3000/api/novedades');
            setNovedades(response.data);
            setLoading(false);
        };

        cargarNovedades();
    }, []);
    return (
        <section className="holder">
            <div className="container">
            <h1>Novedades</h1>
            {
                loading ? (
                    <p> Cargando... </p>
                ) : (
                    novedades.map(item => <NovedadItem key={item.id}
                        title={item.titulo} subtitle={item.subtitulo}
                        imagen={item.imagen} body={item.cuerpo} />)

                )
            }
            </div>
        </section>
    )
};




export default NovedadesPage;